package com.jig.controller;

import com.jig.entity.*;
import com.jig.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class CommonJson {
    @Autowired
    private CommonService commonService;
    /**
     * 获取单个JigDefinition对象
     *
     * @param id jig_definition表id
     * @return 查询到的JigDefinition对象
     */
    @RequestMapping("get_simple_jig_definition")
    public JigDefinition getSimpleJigDefinition(@RequestParam("id") String id) {
        return commonService.getSimpleJigDefinition(id);
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
     * @return
     */
    @RequestMapping("get_workcell_list")
    public List<Workcell> getWorkcellList() {
        return commonService.getWorkcellList();
    }

    /**
     * 获取工夹具类别列表
     * @return
     */
    @RequestMapping(value = "get_family_list", method = {RequestMethod.GET, RequestMethod.POST})
    public List<Family> getFamilyList() {
        return commonService.getFamilyList();
    }

    /**
     * 获取工夹具模组列表
     * @return
     */
    @RequestMapping(value = "get_model_list", method = {RequestMethod.GET, RequestMethod.POST})
    public List<Model> getModelList() {
        return commonService.getModelList();
    }

    /**
     * 获取工夹具料号列表
     * @return
     */
    @RequestMapping(value = "get_part_no_list", method = {RequestMethod.GET, RequestMethod.POST})
    public List<PartNo> getPartNoList() {
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
    public List<MaintenanceType> naiveGetMaintenanceTypeList(){
        return commonService.get_maintenance_type_list();
    }




}
