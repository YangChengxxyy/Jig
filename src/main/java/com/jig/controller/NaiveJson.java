package com.jig.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jig.entity.common.User;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.jig.JigEntity;
import com.jig.entity.jig.JigPosition;
import com.jig.entity.jig.JigStock;
import com.jig.entity.out.OutgoingJig;
import com.jig.entity.repair.RepairJigHistory;
import com.jig.service.NaiveService;
import com.jig.utils.LoginStatusUtil;
import com.jig.utils.PoiUtil;
import org.apache.commons.io.FileUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import javax.print.DocFlavor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/naive")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class NaiveJson {
    @Value("${file.resource-url}")
    public String RESOURCE_URL;
    @Autowired
    private NaiveService naiveService;
    @Autowired
    private PoiUtil poiUtil;
    public static final String SCRAP_IMAGE_NAME = "images/scrap_images/";
    public static final String REPAIR_IMAGE_NAME = "images/repair_images/";
    public static final String SCRAP = "SCRAP";
    public static final String REPAIR = "REPAIR";

    private String getRepairPathName(String fileName) {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString();
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");//设置日期格式
        String nowTime = LocalDateTime.now().format(fmt);
        assert fileName != null;
        String after = fileName.substring(fileName.lastIndexOf('.'));
        return REPAIR_IMAGE_NAME + REPAIR + "-" + nowTime + "-" + uuidString + after;
    }

    @NotNull
    private Map<String, Object> getStringObjectMap(List<?> data, int max) {
        Map<String, Object> map = new HashMap<>(2);
        map.put("data", data);
        map.put("max", max);
        return map;
    }

    //将采购入库的工夹具入库
    @RequestMapping("input_jig")
    public int naiveInputJig(@RequestParam("bill_no") String bill_no,
                             @RequestParam("code") String code,
                             @RequestParam("count") String count,
                             @RequestParam("jig_position") String jig_position,
                             @RequestParam("free_bin_list") String free_bin) {
        String[] code_list = code.split("\\|");
        String[] count_list = count.split("\\|");
        String[] jig_position_list = jig_position.split("\\|");
        String[] free_bin_list_all = free_bin.split("\\|");
        int flag = -1;
        for (int i = 0; i < code_list.length; i++) {
            int max_seq_id = naiveService.getMaxSeqId(code_list[i]);
            String jig_cabinet = jig_position_list[i].split(",")[0];
            String location = jig_position_list[i].split(",")[1];
            String[] free_bin_list = free_bin_list_all[i].split(",");
            for (int j = 0; j < Integer.valueOf(count_list[i]); j++) {
                flag = naiveService.naiveInputJigEntity(bill_no, code_list[i], max_seq_id + j + 1, jig_cabinet, location, free_bin_list[j]);
            }
        }
        return flag;
    }

    //初级用户获取 工夹具出库页面的工夹具存放位置list
    @RequestMapping("get_location_list")
    public List<JigPosition> navieGetLocationList() {
        String workcell_id = "7";
        List<JigPosition> location_list = naiveService.navieGetLocationList(workcell_id);
        for (JigPosition jp : location_list) {
            System.out.println(jp);
        }
        return location_list;
    }

    //初级用户 根据选择的 夹具柜号和区号确定 工夹具list
    @RequestMapping("get_jig_list_by_location")
    public List<JigStock> navieGetJigStockByLocation(@RequestParam("jig_cabinet_id") String jig_cabinet_id,
                                                     @RequestParam("jig_location_id") String jig_location_id) {
        String workcell_id = "7";
        List<JigStock> jig_list = naiveService.navieGetJigListByLocation(jig_cabinet_id, jig_location_id, workcell_id);

        for (JigStock jigStock : jig_list) {
            jigStock.setJig_entity_list(naiveService.navieGetJigEntityListByLocation(jig_cabinet_id, jig_location_id, jigStock.getCode()));
        }

        return jig_list;
    }

    //初级用户 根据选择的工夹具存放区域 和 搜索条件来 确定工夹具list
    @RequestMapping("get_jig_list_by_select")
    public List<JigStock> navieGetJigListBySelect(@RequestParam("jig_cabinet_id") String jig_cabinet_id,
                                                  @RequestParam("jig_location_id") String jig_location_id,
                                                  @RequestParam("code") String code,
                                                  @RequestParam("name") String name,
                                                  @RequestParam("user_for") String user_for) {
        String workcell_id = "7";
        List<JigStock> jig_list = naiveService.navieGetJigListBySelect(jig_cabinet_id, jig_location_id, code, name, user_for, workcell_id);
        for (JigStock jigStock : jig_list) {
            jigStock.setJig_entity_list(naiveService.navieGetJigEntityListByLocation(jig_cabinet_id, jig_location_id, jigStock.getCode()));
        }
        return jig_list;
    }

    //初级用户 根据夹具柜号和区号确定 检点的工夹具list
    @RequestMapping("get_maintenance_jig_detail_list")
    public List<JigEntity> navieGetCheckJigModalJigDetailList(@RequestParam("jig_cabinet_id") String jig_cabinet_id,
                                                              @RequestParam("jig_location_id") String jig_location_id,
                                                              @RequestParam("code") String code,
                                                              @RequestParam("user_id") String user_id) {
        //应该要根据workcell_id工作部门id区别
        return naiveService.navieGetMaintenanceJigDetailList(jig_cabinet_id, jig_location_id, code);
    }

    /**
     * @param code   检点完成的工夹具代码
     * @param seq_id
     * @param reason 原因id 多个用|分开
     * @return
     */
    @RequestMapping("maintenance_jig")
    public int naiveMaintenanceJig(HttpServletRequest request,
                                   @RequestParam("code") String code,
                                   @RequestParam("seq_id") String seq_id,
                                   @RequestParam("reason") String reason,
                                   @RequestParam("user_id") String user_id) {
        return naiveService.naive_maintenance_jig(code, seq_id, reason, user_id);
    }

    /**
     * naive工夹具出库
     *
     * @param code      工夹具代码
     * @param seq_id    工夹具序列号
     * @param submit_id 申请人id
     * @return 是否出库成功
     */
    @RequestMapping("outgo_jig")
    public boolean naiveOutgoJig(@RequestParam("code") String code,
                                 @RequestParam("seq_id") String seq_id,
                                 @RequestParam("submit_id") String submit_id,
                                 @RequestParam("user_id") String accpetor_id) {
        try {

            naiveService.naiveOutgoJig(code, seq_id, submit_id, accpetor_id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * naive获取需要入库的工夹具信息
     *
     * @return 需要入库的工夹具信息
     */
    @RequestMapping("get_outgoing_jig_list")
    public Map<String, Object> naiveGetOutgoingJigList(@RequestParam("code") String code,
                                                       @RequestParam("name") String name,
                                                       @RequestParam("start_date") String start_date,
                                                       @RequestParam("end_date") String end_date,
                                                       @RequestParam("user_for") String user_for,
                                                       @RequestParam("page_number") int page_number,
                                                       @RequestParam("page_size") int page_size,
                                                       @RequestParam("workcell_id") String workcell_id) {
        page_number = (page_number - 1) * page_size;
        Map<String, Object> map = new HashMap<>();
        List<OutgoingJig> list = naiveService.naiveGetOutgoingJigList(code, name, start_date, end_date, user_for, page_number, page_size, workcell_id);
        int all = naiveService.naiveGetOutgoingJigListPage(code, name, start_date, end_date, user_for, workcell_id);
        map.put("data", list);
        map.put("all", all);
        return map;
    }

    /**
     * naive工夹具入库
     *
     * @param code      工夹具代码
     * @param seq_id    工夹具序列号
     * @param submit_id 归还人id
     * @param id        outgoing_jig表id
     * @param rec_id    记录人id(即用户id)
     * @return 是否入库成功
     */
    @RequestMapping("return_jig")
    public boolean naiveReturnJig(@RequestParam("code") String code,
                                  @RequestParam("seq_id") String seq_id,
                                  @RequestParam("submit_id") String submit_id,
                                  @RequestParam("id") String id,
                                  @RequestParam("rec_id") String rec_id) {
        try {
            naiveService.naiveReturnJig(id, code, seq_id, submit_id, rec_id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * naive获取报修历史
     *
     * @param submit_id   申请人id
     * @param page_number 页码
     * @return 保修历史
     */
    @RequestMapping("get_repair_history")
    public Map<String, Object> naiveGetRepairHistory(@RequestParam("submit_id") String submit_id, @RequestParam("page_number") int page_number) {
        List<RepairJigHistory> list = naiveService.naiveGetRepairHistory(submit_id, page_number);
        int a = naiveService.naiveGetRepairHistoryPage(submit_id);
        return getStringObjectMap(list, a);
    }

    /**
     * naive获取报修列表
     *
     * @param submit_id   naive用户id
     * @param page_number 页码
     * @return 报修列表
     */
    @RequestMapping("get_repair_list")
    public Map<String, Object> naiveGetRepairList(@RequestParam("submit_id") String submit_id, @RequestParam("page_number") int page_number) {
        return getStringObjectMap(naiveService.naiveGetRepairList(submit_id, page_number), naiveService.naiveGetRepairListPage(submit_id));
    }

    /**
     * naive提交报修
     *
     * @param code          工夹具代码
     * @param seq_id        工夹具序列号
     * @param submit_id     申请人id
     * @param repair_reason 报修原因
     * @param file          文件
     * @return 成功与否
     */
    @RequestMapping("submit_repair")
    public boolean naiveSubmitRepair(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id, @RequestParam("submit_id") String submit_id, @RequestParam("repair_reason") String repair_reason, @RequestParam("file") MultipartFile file) {
        String fileName = file.getOriginalFilename();
        try {
            assert fileName != null;
            String pathName = getRepairPathName(fileName);
            FileUtils.writeByteArrayToFile
                    (new File(RESOURCE_URL + pathName), file.getBytes());
            naiveService.naiveSubmitRepair(code, seq_id, submit_id, repair_reason, pathName);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @RequestMapping("download_one_search")
    public void naiveDownloadOneSearch(HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber, @RequestParam("page_size") int page_size, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = naiveService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber, page_size);
        if (list.size() == 0) {
            return;
        }
        poiUtil.outputFile(response, fileName, list);
    }

    @RequestMapping("download_all_search")
    public void naiveDownloadAllSearch(HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = naiveService.searchAllJigDefinition(code, name, workcell, family, userFor);
        poiUtil.outputFile(response, fileName, list);
    }

    /**
     * 搜索工夹具
     *
     * @param code       工夹具代码
     * @param name       工夹具名字
     * @param workcell   工作部门
     * @param family     类别
     * @param userFor    用途
     * @param pageNumber 页码
     * @return 查询到的对应页数的Map对象 { data:数据 ,max:最大页数 }
     */
    @RequestMapping("search_jig_definition")
    public Map<String, Object> naiveSearchJigDefinition(@RequestParam("code") String code, @RequestParam("name") String name, @RequestParam("workcell") String workcell, @RequestParam("family") String family, @RequestParam("user_for") String userFor, @RequestParam("page_number") int pageNumber, @RequestParam("page_size") int page_size) throws Exception {
        int all = naiveService.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor);
        Map<String, Object> map = getStringObjectMap(naiveService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber, page_size), (int) Math.ceil(all / (double) page_size));
        map.put("all", all);
        return map;
    }

    /**
     * 获取出库申请
     *
     * @return 出库申请
     */
    @RequestMapping("get_outgoing_submit")
    public Map<String, Object> getOutgoingSubmit(@RequestParam("page_number") int page_number) {
        return getStringObjectMap(naiveService.naiveGetOutgoingSubmit(page_number), naiveService.naiveGetOutgoingSubmitPage());
    }
}
