package com.jig.controller;

import com.jig.annotation.Permission;
import com.jig.entity.common.*;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.jig.JigModel;
import com.jig.entity.jig.JigPart;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.repair.MaintenanceType;
import com.jig.entity.scrap.ScrapSubmit;
import com.jig.entity.warehouse.JigCabinet;
import com.jig.entity.warehouse.JigLocation;
import com.jig.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Permission(Role.common)
@RestController
@RequestMapping("/api")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class CommonJson {
    private static int ALL_BIN_COUNT = 9;
    @Autowired
    private CommonService commonService;

    /**
     * 获取单个JigDefinition对象
     *
     * @param id jig_definition表id
     * @return 查询到的JigDefinition对象
     */
    @RequestMapping("get_simple_jig_definition")
    public JigDefinition getSimpleJget_workcell_listigDefinition(@RequestParam("id") String id) {
        return commonService.getSimpleJigDefinition(id);
    }

    @RequestMapping("get_jig_definition")
    public Map<String, Object> getJigDefinition(@RequestParam("page_size") int page_size, @RequestParam("page_number") int page_number) {
        Map<String, Object> map = new HashMap<>();
        map.put("data", commonService.getJigDefinition(page_number, page_size));
        int all = commonService.getJigDefinitionPage();
        map.put("all", all);
        map.put("max", (int) Math.ceil(all / (double) page_size));
        return map;
    }

    /**
     * 获取工夹具位置
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @return 位置
     */
    @RequestMapping("get_position")
    public Position getPosition(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id) {
        return commonService.getPosition(code, seq_id);
    }

    /**
     * 获取产线列表
     *
     * @return 产线列表
     */
    @RequestMapping("get_production_line_list")
    public List<ProductionLine> getProductionLineList() {
        return commonService.getProductionLineList();
    }

    /**
     * 获取工作部门列表
     *
     * @return
     */
    @RequestMapping("get_workcell_list")
    public List<Workcell> getWorkcellList() {
        return commonService.getWorkcellList();
    }

    /**
     * 获取工夹具类别列表
     *
     * @return
     */
    @RequestMapping(value = "get_family_list", method = {RequestMethod.GET, RequestMethod.POST})
    public List<Family> getFamilyList() {
        return commonService.getFamilyList();
    }

    /**
     * 获取工夹具模组列表
     *
     * @return
     */
    @RequestMapping(value = "get_model_list", method = {RequestMethod.GET, RequestMethod.POST})
    public List<JigModel> getModelList() {
        return commonService.getModelList();
    }

    /**
     * 获取工夹具料号列表
     *
     * @return
     */
    @RequestMapping(value = "get_part_no_list", method = {RequestMethod.GET, RequestMethod.POST})
    public List<JigPart> getPartNoList() {
        return commonService.getPartNoList();
    }


    /**
     * 获取工夹具代码列表
     *
     * @return 工夹具代码列表
     */
    @RequestMapping("get_code_list")
    public List<String> getCodeList() {
        return commonService.getCodeList();
    }

    /**
     * 通过工夹具代码查询有哪些序列号
     *
     * @param code 工夹具代码
     * @return 序列号集合
     */
    @RequestMapping("code_get_all_seq_id")
    public List<String> codeGetSeqId(@RequestParam("code") String code) {
        return commonService.codeGetSeqId(code);
    }

    @RequestMapping("code_get_in_seq_id")
    public List<String> codeGetInSeqId(@RequestParam("code") String code) {
        return commonService.codeGetInSeqId(code);
    }

    //获取 检点工夹具的检点类型
    @RequestMapping("get_maintenance_type_list")
    public List<MaintenanceType> naiveGetMaintenanceTypeList() {
        return commonService.get_maintenance_type_list();
    }

    //获取仓库信息，工夹具号、存放区域、空余bin位信息的综合
    @RequestMapping("get_jig_cabinet_list")
    public List<JigCabinet> getJigCabinetList() {
        List<JigCabinet> jigCabinetList = commonService.get_jig_cabinet_list();
        Map<String, String> map = new HashMap<>();
        List<String> all_bin_list = resetAllBinList();

        for (JigCabinet jc : jigCabinetList) { // 对获取到的工夹具柜jigCabinetList进行循环
            for (JigLocation jl : jc.getLocation_id_list()) {
                all_bin_list = resetAllBinList(); // 复原all_bin_list
                if (jl.getFull_bin_list().size() == 0) { // 如果该location的已使用bin位数为0，直接设置
                    jl.setFree_bin_list(all_bin_list);
                    jl.setFree_bin_count(ALL_BIN_COUNT);
                    continue;
                }
                for (String bin : jl.getFull_bin_list()) {
                    for (int j = 0; j < all_bin_list.size(); j++) {
                        if (bin.equals(all_bin_list.get(j))) {
                            all_bin_list.remove(j);
                            break;
                        }
                    }
                }
                jl.setFree_bin_list(all_bin_list);
                jl.setFree_bin_count(all_bin_list.size());
            }
        }
        return jigCabinetList;
    }

    public static List<String> resetAllBinList() {
        List<String> all_bin_list = new ArrayList<>();
        for (int i = 1; i <= ALL_BIN_COUNT; i++) {
            all_bin_list.add("" + i);
        }
        return all_bin_list;
    }

    @RequestMapping("log_out")
    public void logOUt() {
    }

    @RequestMapping("get_a_purchase_submit")
    public PurchaseIncomeSubmit getAPurchaseSubmit(@RequestParam("id") String id) {
        return commonService.getPurchaseSubmit(id);
    }

    @RequestMapping("get_a_scrap_submit")
    public ScrapSubmit getAScrapSubmit(@RequestParam("id") String id) {
        return commonService.getScrapSubmit(id);
    }
}
