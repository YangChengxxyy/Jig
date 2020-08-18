package com.jig.controller;

import com.jig.entity.common.Message;
import com.jig.entity.common.User;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.jig.JigEntity;
import com.jig.entity.jig.JigPosition;
import com.jig.entity.jig.JigStock;
import com.jig.entity.out.OutgoSubmit;
import com.jig.entity.out.OutgoingJig;
import com.jig.entity.purchase.PendingPuchaseIncomeSubmit;
import com.jig.entity.repair.*;
import com.jig.entity.scrap.PendingScrapSubmit;
import com.jig.service.*;
import com.jig.utils.PoiUtil;
import com.jig.utils.RedisUtil;
import org.apache.commons.io.FileUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.text.NumberFormat;
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
    private UserService userService;
    @Autowired
    private LifeService lifeService;
    @Autowired
    private CommonService commonService;
    @Autowired
    private PoiUtil poiUtil;
    @Autowired
    private RedisUtil redisUtil;
    @Autowired
    private MessageService messageService;
    @Autowired
    private WebSocketServer webSocketServer;
    public static final String SCRAP_IMAGE_NAME = "images/scrap_images/";
    public static final String REPAIR_IMAGE_NAME = "images/repair_images/";
    public static final String SCRAP = "SCRAP";
    public static final String REPAIR = "REPAIR";

    private String getRepairPathName(String fileName) {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString();
        String after = fileName.substring(fileName.lastIndexOf('.'));
        return REPAIR_IMAGE_NAME + REPAIR + "-" + uuidString + after;
    }

    @NotNull
    private Map<String, Object> getStringObjectMap(List<?> data, int max) {
        Map<String, Object> map = new HashMap<>(2);
        map.put("data", data);
        map.put("max", max);
        return map;
    }

    private User getUserById(String user_id) {
        User user = new User();
        String user_name = userService.getUserName(user_id);
        user.setId(user_id);
        user.setName(user_name);
        return user;
    }

    /**
     * 初级用户将待采购入库的采购单中的工夹具入库
     *
     * @param bill_no
     * @param code
     * @param count
     * @param jig_position 要入库的工夹具位置信息,格式: 7,A2|8,C1
     * @param user_id
     * @return
     */
    @RequestMapping("input_purchase_submit_jig")
    public int naiveInputPurchaseSubmitJig(@RequestParam("bill_no") String bill_no, @RequestParam("code") String code,
                                           @RequestParam("count") String count, @RequestParam("jig_position") String jig_position,
                                           @RequestParam("user_id") String user_id) {
        String desciption = "";
        desciption += bill_no + "~" + code + "~" + count;
        String[] code_list = code.split("\\|");
        String[] count_list = count.split("\\|");
        String[] jig_position_list = jig_position.split("\\|");
        int flag = -1;
        for (int i = 0; i < code_list.length; i++) {
            int max_seq_id = naiveService.getMaxSeqId(code_list[i]);
            String jig_cabinet = jig_position_list[i].split(",")[0];
            String location = jig_position_list[i].split(",")[1];
            for (int j = 0; j < Integer.parseInt(count_list[i]); j++) {
                flag = naiveService.naive_input_purchase_jig(bill_no, code_list[i], max_seq_id + j + 1, jig_cabinet,
                        location, desciption, user_id);
            }
        }
        return flag;
    }

    // 将采购入库的工夹具入库
    @RequestMapping("input_jig")
    public int naiveInputJig(@RequestParam("bill_no") String bill_no, @RequestParam("code") String code,
                             @RequestParam("count") String count, @RequestParam("jig_position") String jig_position,
                             @RequestParam("free_bin_list") String free_bin, @RequestParam("user_id") String user_id) {
        String desciption = "";
        desciption += bill_no + "~" + code + "~" + count;
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
            for (int j = 0; j < Integer.parseInt(count_list[i]); j++) {
                flag = naiveService.naiveInputJigEntity(bill_no, code_list[i], max_seq_id + j + 1, jig_cabinet,
                        location, free_bin_list[j], desciption, user_id);
            }
        }
        return flag;
    }

    // 初级用户获取 工夹具出库页面的工夹具存放位置list
    @RequestMapping("get_location_list")
    public List<JigPosition> navieGetLocationList() {
        String workcell_id = "7";
        List<JigPosition> location_list = naiveService.navieGetLocationList(workcell_id);
        return location_list;
    }

    // 初级用户 根据选择的 夹具柜号和区号确定 工夹具list
    @RequestMapping("get_jig_list_by_location")
    public Map<Object, Object> navieGetJigStockByLocation(@RequestParam("jig_cabinet_id") String jig_cabinet_id,
                                                          @RequestParam("jig_location_id") String jig_location_id, @RequestParam("page_number") int page_number,
                                                          @RequestParam("page_size") int page_size, @RequestParam("workcell_id") String workcell_id) {
        Map<Object, Object> map = new HashMap<>();
        List<JigStock> jig_list = naiveService.navieGetJigListByLocation(jig_cabinet_id, jig_location_id, workcell_id,
                (page_number - 1) * page_size, page_size);
        List<List<?>> all = naiveService.navieGetJigListByLocationPages(jig_cabinet_id, jig_location_id, workcell_id);
        for (JigStock jigStock : jig_list) {
            jigStock.setJig_entity_list(
                    naiveService.navieGetJigEntityListByLocation(jig_cabinet_id, jig_location_id, jigStock.getCode()));
            for (JigEntity jigEntity : jigStock.getJig_entity_list()) { // 获取出入库历史记录List
                jigEntity.setOut_and_in_history_list(
                        naiveService.naive_get_out_and_in_history_list(jigEntity.getCode(), jigEntity.getSeq_id()));
            }
        }
        map.put("data", jig_list);
        map.put("all", all.get(1).get(0));
        return map;
    }

    @RequestMapping("get_out_and_in_history_list") // 移动端
    public List<OutgoSubmit> navieGetJigStockByLocation(@RequestParam("code") String code,
                                                        @RequestParam("seq_id") String seq_id) {
        // 获取出入库历史记录List
        return naiveService.naive_get_out_and_in_history_list(code, seq_id);
    }

    // 初级用户 根据选择的工夹具存放区域 和 搜索条件来 确定工夹具list
    @RequestMapping("get_jig_list_by_select")
    public Map<Object, Object> navieGetJigListBySelect(@RequestParam("jig_cabinet_id") String jig_cabinet_id,
                                                       @RequestParam("jig_location_id") String jig_location_id, @RequestParam("code") String code,
                                                       @RequestParam("name") String name, @RequestParam("user_for") String user_for,
                                                       @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size,
                                                       @RequestParam("workcell_id") String workcell_id) {

        Map<Object, Object> map = new HashMap<>();
        List<JigStock> jig_list = naiveService.navieGetJigListBySelect(jig_cabinet_id, jig_location_id, code, name,
                user_for, workcell_id, (page_number - 1) * page_size, page_size);
        List<List<?>> all = naiveService.navieGetJigListBySelectPages(jig_cabinet_id, jig_location_id, code, name,
                user_for, workcell_id);
        for (JigStock jigStock : jig_list) {
            jigStock.setJig_entity_list(
                    naiveService.navieGetJigEntityListByLocation(jig_cabinet_id, jig_location_id, jigStock.getCode()));
            for (JigEntity jigEntity : jigStock.getJig_entity_list()) { // 获取出入库历史记录List
                jigEntity.setOut_and_in_history_list(
                        naiveService.naive_get_out_and_in_history_list(jigEntity.getCode(), jigEntity.getSeq_id()));
            }
        }
        map.put("data", jig_list);
        map.put("all", all.get(1).get(0));
        return map;
    }

    @RequestMapping("change_jig_position")
    public int navieChangeJigPosition(@RequestParam("jig_id") String jig_id, @RequestParam("code") String code,
                                      @RequestParam("seq_id") String seq_id, @RequestParam("old_position") String old_position,
                                      @RequestParam("jig_cabinet_id") String jig_cabinet_id, @RequestParam("location_id") String location_id,
                                      @RequestParam("bin") String bin, @RequestParam("user_id") String user_id) {
        User user = getUserById(user_id);
        return naiveService.naive_change_jig_position(jig_id, code, seq_id, old_position, jig_cabinet_id, location_id,
                bin, user);
    }

    // 初级用户 根据夹具柜号和区号确定 检点的工夹具list
    @RequestMapping("get_maintenance_jig_detail_list")
    public List<JigEntity> navieGetCheckJigModalJigDetailList(@RequestParam("jig_cabinet_id") String jig_cabinet_id,
                                                              @RequestParam("jig_location_id") String jig_location_id, @RequestParam("code") String code,
                                                              @RequestParam("user_id") String user_id) {
        // 应该要根据workcell_id工作部门id区别
        List<JigEntity> jig_list = naiveService.navieGetMaintenanceJigDetailList(jig_cabinet_id, jig_location_id, code);
        for (JigEntity jigEntity : jig_list) { // 获取检点历史记录list
            jigEntity.setMaintenance_history_list(
                    naiveService.naive_get_maintenance_history_list(jigEntity.getCode(), jigEntity.getSeq_id()));
            for (MaintenanceSubmit maintenanceSubmit : jigEntity.getMaintenance_history_list()) { // 对数据进行处理，方便前端显示
                String[] reason = maintenanceSubmit.getReason().split("\\|");
                String r = "";
                if (reason[0].equals("")) {
                    continue;
                }
                for (int i = 0; i < reason.length; i++) {
                    MaintenanceType type = commonService.get_maintenance_type(reason[i]);
                    maintenanceSubmit.getReason_description().add(type.getWrong_description());
                }
            }
        }
        return jig_list;
    }

    /**
     * 根据工夹具实体的code和seq_id获取该工夹具的检点历史
     *
     * @param code
     * @param seq_id
     * @return
     */
    @RequestMapping("get_jig_maintenance_history_list")
    public List<MaintenanceSubmit> getJigMaintenanceHistoryList(@RequestParam("code") String code,
                                                                @RequestParam("seq_id") String seq_id) {
        List<MaintenanceSubmit> maintenanceSubmitList = naiveService.naive_get_maintenance_history_list(code, seq_id);

        for (MaintenanceSubmit maintenanceSubmit : maintenanceSubmitList) { // 对数据进行处理，方便前端显示
            String[] reason = maintenanceSubmit.getReason().split("\\|");
            String r = "";
            if (reason[0].equals("")) {
                continue;
            }
            for (int i = 0; i < reason.length; i++) {
                MaintenanceType type = commonService.get_maintenance_type(reason[i]);
                maintenanceSubmit.getReason_description().add(type.getWrong_description());
            }
        }
        return maintenanceSubmitList;
    }

    /**
     * @param code   检点完成的工夹具代码
     * @param seq_id
     * @param reason 原因id 多个用|分开
     * @return
     */
    @RequestMapping("maintenance_jig")
    public int naiveMaintenanceJig(HttpServletRequest request, @RequestParam("code") String code,
                                   @RequestParam("seq_id") String seq_id, @RequestParam("reason") String reason,
                                   @RequestParam("is_repair") int is_repair, @RequestParam("user_id") String user_id) {
        return naiveService.naive_maintenance_jig(code, seq_id, reason, is_repair, user_id);
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
    public boolean naiveOutgoJig(@RequestParam("jig_id") String jig_id, @RequestParam("code") String code,
                                 @RequestParam("seq_id") String seq_id, @RequestParam("submit_id") String submit_id,
                                 @RequestParam("production_line_id") String production_line_id,
                                 @RequestParam("user_id") String accpetor_id) {
        try {

            naiveService.naiveOutgoJig(jig_id, code, seq_id, submit_id, production_line_id, accpetor_id);
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
                                                       @RequestParam("name") String name, @RequestParam("start_date") String start_date,
                                                       @RequestParam("end_date") String end_date, @RequestParam("user_for") String user_for,
                                                       @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size,
                                                       @RequestParam("workcell_id") String workcell_id) {
        Map<String, Object> map = new HashMap<>();
        List<OutgoingJig> list = naiveService.naiveGetOutgoingJigList(code, name, start_date, end_date, user_for,
                page_number, page_size, workcell_id);
        int all = naiveService.naiveGetOutgoingJigListPage(code, name, start_date, end_date, user_for, workcell_id);
        map.put("data", list);
        map.put("all", all);
        return map;
    }

    // 归还工夹具导出本页
    @RequestMapping("download_one_outgoing_list")
    public void naiveDownloadOneOutgoingList(HttpServletResponse response, @RequestParam("code") String code,
                                             @RequestParam("name") String name, @RequestParam("start_date") String start_date,
                                             @RequestParam("end_date") String end_date, @RequestParam("user_for") String user_for,
                                             @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size,
                                             @RequestParam("workcell_id") String workcell_id, @RequestParam("file_name") String file_name) {
        List<OutgoingJig> list = naiveService.naiveGetOutgoingJigList(code, name, start_date, end_date, user_for,
                page_number, page_size, workcell_id);
        poiUtil.outputFile(response, file_name, list);
    }

    // 归还工夹具导出所有页
    @RequestMapping("download_all_outgoing_list")
    public void naiveDownloadAllOutgoingList(HttpServletResponse response, @RequestParam("code") String code,
                                             @RequestParam("name") String name, @RequestParam("start_date") String start_date,
                                             @RequestParam("end_date") String end_date, @RequestParam("user_for") String user_for,
                                             @RequestParam("workcell_id") String workcell_id, @RequestParam("file_name") String file_name) {
        List<OutgoingJig> list = naiveService.naiveGetOutgoingJigListAllPages(code, name, start_date, end_date,
                user_for, workcell_id);
        poiUtil.outputFile(response, file_name, list);
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
    public boolean naiveReturnJig(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id,
                                  @RequestParam("submit_id") String submit_id, @RequestParam("id") String id,
                                  @RequestParam("rec_id") String rec_id, @RequestParam("production_line_id") String production_line_id) {
        try {
            naiveService.naiveReturnJig(id, code, seq_id, submit_id, rec_id, production_line_id);
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
    public Map<String, Object> naiveGetRepairHistory(@RequestParam("submit_id") String submit_id,
                                                     @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size) {
        List<RepairJigHistory> list = naiveService.naiveGetRepairHistory(submit_id, page_number, page_size);
        int all = naiveService.naiveGetRepairHistoryPage(submit_id);
        Map<String, Object> map = new HashMap<>();
        map.put("all", all);
        map.put("data", list);
        return map;
    }

    /**
     * naive获取报修列表
     *
     * @param submit_id   naive用户id
     * @param page_number 页码
     * @return 报修列表
     */
    @RequestMapping("get_repair_list")
    public Map<String, Object> naiveGetRepairList(@RequestParam("submit_id") String submit_id,
                                                  @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size) {
        Map<String, Object> map = new HashMap<>();
        map.put("data", naiveService.naiveGetRepairList(submit_id, page_number, page_size));
        int all = naiveService.naiveGetRepairListPage(submit_id);
        map.put("all", all);
        map.put("max", (int) Math.ceil(all / (double) page_size));
        return map;
    }

    /**
     * naive提交报修
     *
     * @param code          工夹具代码
     * @param seq_id        工夹具序列号
     * @param submit_id     申请人id
     * @param repair_reason 报修原因
     * @param files         文件
     * @return 成功与否
     */
    @RequestMapping("submit_repair")
    public boolean naiveSubmitRepair(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id,
                                     @RequestParam("submit_id") String submit_id, @RequestParam("repair_reason") String repair_reason,
                                     @RequestParam("repair_type") int repair_type, @RequestParam("file") MultipartFile[] files,
                                     @RequestParam(value = "workcell_id", defaultValue = "", required = false) String workcell_id) {
        try {
            StringBuilder pathName = new StringBuilder("");
            if (files.length == 1) {
                String fileName = getRepairPathName(files[0].getOriginalFilename());
                FileUtils.writeByteArrayToFile(new File(RESOURCE_URL + fileName), files[0].getBytes());
                pathName.append(fileName);
            } else {
                for (int i = 0; i < files.length - 1; i++) {
                    String fileName = getRepairPathName(files[i].getOriginalFilename());
                    FileUtils.writeByteArrayToFile(new File(RESOURCE_URL + fileName), files[i].getBytes());
                    pathName.append(fileName).append('|');
                }
                String fileName = getRepairPathName(files[files.length - 1].getOriginalFilename());
                FileUtils.writeByteArrayToFile(new File(RESOURCE_URL + fileName), files[files.length - 1].getBytes());
                pathName.append(fileName);
            }
            RepairJig repair = new RepairJig();
            repair.setCode(code);
            repair.setSeq_id(seq_id);
            repair.setSubmit_id(submit_id);
            repair.setRepair_reason(repair_reason);
            repair.setRepair_type(repair_type);
            naiveService.naiveSubmitRepair(repair, pathName.toString());
            long now = System.currentTimeMillis();
            Message message = new Message("/repair/my", "id", repair.getId(), submit_id + "提交了一份新的报修请求", now);
            webSocketServer.sendMessageToRole("high", message);
            if (!"".equals(workcell_id)) {
                messageService.roleAdd("high", workcell_id, "/repair/my", "id", repair.getId(),
                        submit_id + "提交了一份新的报修请求", now);
            }
            lifeService.changeJigLife(code, seq_id);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * 若取消提交报废，需删除原来的图片
     */
    @RequestMapping("mobile_remove_repair_uuid")
    public boolean mobileRemoveRepairUuid(@RequestParam("file_name") String[] file_name) {
        for (String filename : file_name) {
            try {
                FileUtils.forceDelete(new File(RESOURCE_URL + filename));
            } catch (IOException e) {
                e.printStackTrace();
                return false;
            }
        }
        return true;
    }

    @RequestMapping("mobile_upload_repair_photo")
    public String mobileUploadRepairPhoto(@RequestParam("file") MultipartFile file) {
        try {
            String pathName = getRepairPathName(file.getOriginalFilename());
            FileUtils.writeByteArrayToFile(new File(RESOURCE_URL + pathName), file.getBytes());
            return pathName;
        } catch (IOException e) {
            e.printStackTrace();
            return "error";
        }
    }

    /**
     * @param code
     * @param seq_id
     * @param submit_id
     * @param repair_reason
     * @param repair_type
     * @param file_name
     * @return
     */
    @RequestMapping("mobile_submit_repair")
    public boolean mobileSubmitRepair(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id,
                                      @RequestParam("submit_id") String submit_id, @RequestParam("repair_reason") String repair_reason,
                                      @RequestParam("repair_type") int repair_type, @RequestParam("file_name") String[] file_name) {
        StringBuilder all_path = new StringBuilder();
        for (int i = 0; i < file_name.length - 1; i++) {
            all_path.append(file_name[i]).append("|");
        }
        all_path.append(file_name[file_name.length - 1]);
        RepairJig repair = new RepairJig();
        repair.setCode(code);
        repair.setSeq_id(seq_id);
        repair.setSubmit_id(submit_id);
        repair.setRepair_reason(repair_reason);
        repair.setRepair_type(repair_type);
        naiveService.naiveSubmitRepair(repair, all_path.toString());
        lifeService.changeJigLife(code, seq_id);
        return true;
    }

    @RequestMapping("download_one_search")
    public void naiveDownloadOneSearch(HttpServletResponse response, @RequestParam(value = "code") String code,
                                       @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell,
                                       @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor,
                                       @RequestParam(value = "page_number") int pageNumber, @RequestParam("page_size") int page_size,
                                       @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = naiveService.naiveSearchJigDefinition(code, name, workcell, family, userFor,
                pageNumber, page_size);
        if (list.size() == 0) {
            return;
        }
        poiUtil.outputFile(response, fileName, list);
    }

    @RequestMapping("download_all_search")
    public void naiveDownloadAllSearch(HttpServletResponse response, @RequestParam(value = "code") String code,
                                       @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell,
                                       @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor,
                                       @RequestParam(value = "file_name") String fileName) throws Exception {
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
    public Map<String, Object> naiveSearchJigDefinition(@RequestParam("code") String code,
                                                        @RequestParam("name") String name, @RequestParam("workcell") String workcell,
                                                        @RequestParam("family") String family, @RequestParam("user_for") String userFor,
                                                        @RequestParam("page_number") int pageNumber, @RequestParam("page_size") int page_size) throws Exception {
        int all = naiveService.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor);
        Map<String, Object> map = getStringObjectMap(
                naiveService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber, page_size),
                (int) Math.ceil(all / (double) page_size));
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
        return getStringObjectMap(naiveService.naiveGetOutgoingSubmit(page_number),
                naiveService.naiveGetOutgoingSubmitPage());
    }

    /**
     * 计算工夹具故障概率
     *
     * @param reason
     * @param code
     * @param seq_id
     * @return
     */
    @RequestMapping("get_jig_trouble_percent")
    public String naiveGetJigTroublePercent(@RequestParam("reason") String reason, @RequestParam("code") String code,
                                            @RequestParam("seq_id") String seq_id) {
        if (reason.equals("")) {
            return "数据不足,无法准确计算";
        }
        String[] reason_list = reason.split("\\|");
        double percent = 1.0; // 要返回的故障概率值
        double trouble_percent_all = naiveService.naive_get_jig_trouble_percent_all(); // 故障工夹具概率

        int reason_count_in_all = 0;
        // 获取需要报修的记录list,用于计算出现工夹具检点时所有工夹具所出现的该工夹具出现过的问题的次数

        percent *= trouble_percent_all;
        int k = 0;
        int reason_count_in_the_jig = 0; // 该工夹具自己出现过的当前出现的问题的总次数
        int reason_count_in_all_jig = 0; // 所有故障工夹具出现过的该工夹具出现过的问题的次数
        for (int i = 0; i < reason_list.length; i++) {
            reason_count_in_the_jig = naiveService.naive_get_trouble_reason_count_by_reason(code, seq_id,
                    reason_list[i]);
            reason_count_in_all_jig = naiveService.naive_get_trouble_reason_count_by_reason("", "", reason_list[i]);
            reason_count_in_all += naiveService.naive_get_reason_count_in_all(reason_list[i]);
            k++;
        }
        if (k > 0) {
            percent /= reason_count_in_all;
            percent *= (reason_count_in_the_jig + 1.0) / (reason_count_in_all_jig + 1.0);
        }

        NumberFormat num = NumberFormat.getPercentInstance();
        String str_percent = num.format(percent);
        return str_percent;
    }

    public int get_all_reason_count(List<MaintenanceSubmit> list) {
        int count = 0;
        for (MaintenanceSubmit submit : list) {
            int k = 0, i;
            for (i = 0; i < submit.getReason().length(); i++) {
                if (submit.getReason().charAt(i) == '|') {
                    k++;
                }
            }
            if (i != 0) {
                count += k + 1;
            }
        }
        return count;
    }
    // 朴素贝叶斯算法思路 C：工夹具故障, Ai:要判断的工夹具检点时出现的各个问题
    // C = (P(C)*P(Ai|C) / P(Ai在所有检点时有出现过的次数)) P(Ai|C) =
    // Ai问题在该工夹具出现过的问题次数+1/工夹具故障时出现过的所有问题的次数+1

    /**
     * 获取待入库的采购入库清单
     *
     * @param workcell_id
     * @param page_number
     * @param page_size
     * @param status      清单状态 0：待入库 1:已入库
     * @return
     */
    @RequestMapping("get_pending_purchase_submit_list")
    public Map<Object, Object> getPendingPurchaseSubmitList(@RequestParam("workcell_id") String workcell_id,
                                                            @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size,
                                                            @RequestParam("status") int status) {
        Map<Object, Object> map = new HashMap<>();
        List<PendingPuchaseIncomeSubmit> list = naiveService.naive_get_pending_purchase_submit_list(workcell_id, status,
                page_number, page_size);
        int all = naiveService.naive_get_pending_purchase_submit_list_pages(workcell_id, status);

        map.put("data", list);
        map.put("all", all);
        return map;
    }

    /**
     * 获取待报废的报废清单
     *
     * @param workcell_id
     * @param page_number
     * @param page_size
     * @return
     */
    @RequestMapping("get_pending_scrap_submit_list")
    public Map<Object, Object> getPendingScrapSubmitList(@RequestParam("workcell_id") String workcell_id,
                                                         @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size) {
        Map<Object, Object> map = new HashMap<>();
        List<PendingScrapSubmit> list = naiveService.naive_get_pending_scrap_submit_list(workcell_id, page_number,
                page_size);
        int all = naiveService.naive_get_pending_scrap_submit_list_pages(workcell_id);

        map.put("data", list);
        map.put("all", all);
        return map;
    }

    // 报废工夹具
    @RequestMapping("scrap_jig")
    public int NaiveScrapJig(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id,
                             @RequestParam("jig_id") String jig_id, @RequestParam("submit_id") String submit_id,
                             @RequestParam("user_id") String user_id) {
        return naiveService.naive_scrap_jig(code, seq_id, jig_id, submit_id, user_id);
    }

    /**
     * 获取待维修的报修工夹具list
     * @param workcell_id
     * @param page_number
     * @param page_size
     * @return
     */
    @RequestMapping("get_pending_repair_submit_list")
    public Map<Object, Object> NaiveGetPendingRepairSubmit(@RequestParam("workcell_id") String workcell_id,
                                                           @RequestParam("page_number") int page_number,
                                                           @RequestParam("page_size") int page_size) {
        Map<Object, Object> map = new HashMap<>();
        List<PendingRepairSubmit> list = naiveService.naive_get_pending_repair_submit_list(workcell_id, page_number, page_size);
        int max = naiveService.naive_get_pending_repair_submit_list_pages(workcell_id);
        map.put("data", list);
        map.put("all", max);
        return map;
    }

    /**
     * 获取维修工夹具的人员list
     * @param workcell_id
     * @return
     */
    @RequestMapping("get_repair_man_list")
    public List<User> NaiveGetRepairManList(@RequestParam("workcell_id") String workcell_id) {
        return naiveService.naive_get_repair_man_list(workcell_id);
    }

    /**
     * 为报修审批通过的需要维修的工夹具选择维修人员
     * @param repair_man_id 维修人员id
     * @param repair_submit_id 待处理的报修审批id
     * @return
     */
    @RequestMapping("choose_repair_man")
    public int NaiveChooseRepairMan(@RequestParam("repair_man_id") String repair_man_id,
                                    @RequestParam("repair_submit_id") String repair_submit_id) {
        return naiveService.naive_choose_repair_man(repair_man_id, repair_submit_id);
    }



}
