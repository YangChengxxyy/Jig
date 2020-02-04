package com.jig.controller;

import com.jig.entity.*;
import com.jig.service.JigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class JigJson {
    @Autowired
    private JigService jigService;

    @RequestMapping(value = "get_demo_list", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<Object, Object> getDemoList(@RequestParam(value = "page_number") int pageNumber) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < pageNumber; i++) {
            a.add(people);
        }
        Map<Object, Object> map = new HashMap<>(2);
        map.put("data", a);
        map.put("max", 11);
        return map;
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
    public Map<Object, Object> searchJigDefinition(@RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber) throws Exception {
        Map<Object, Object> map = new HashMap<>(2);
        List<JigDefinition> list = jigService.searchJigDefinition(code, name, workcell, family, userFor, pageNumber);
        map.put("data", list);
        map.put("max", jigService.searchJigDefinitionPage(code, name, workcell, family, userFor));
        return map;
    }

    /**
     * 获取单个JigDefinition对象
     *
     * @param id jig_definition表id
     * @return 查询到的JigDefinition对象
     */
    @RequestMapping("get_simple_jig_definition")
    public JigDefinition getSimpleJigDefinition(@RequestParam(value = "id") String id) {
        return jigService.getSimpleJigDefinition(id);
    }

    /**
     * 获取出库申请
     *
     * @return 出库申请
     */
    @RequestMapping("get_outgoing_submit")
    public List<OutgoSubmit> getOutgoingSubmit() {
        return jigService.getOutgoingSubmit();
    }

    /**
     * 过去工夹具位置
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @return 位置
     */
    @RequestMapping("get_position")
    public Position getPosition(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id) {
        return jigService.getPosition(code, seq_id);
    }

    /**
     * 工夹具出库
     *
     * @param id     outgo_submit表id
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     * @return 字符串；出库成功
     */
    @RequestMapping("outgo_jig")
    public String outgoJig(@RequestParam(value = "id") String id, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "rec_id") String rec_id) {
        jigService.outgoJig(id, code, seq_id, rec_id);
        return "出库成功！";
    }

    /**
     * 获取需要入库的工夹具信息
     *
     * @return 需要入库的工夹具信息
     */
    @RequestMapping("get_outgoing_jig")
    public List<OutgoingJig> getOutgoingJig() {
        return jigService.getOutgoingJig();
    }

    /**
     * 工夹具入库
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     * @param id     outgoing_jig表id
     * @return 字符串；入库成功
     */
    @RequestMapping("return_jig")
    public String returnJig(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "rec_id") String rec_id, @RequestParam(value = "id") String id) {
        jigService.returnJig(id, code, seq_id, rec_id);
        return "入库成功";
    }

    /**
     * 添加采购入库申请
     *
     * @param submit_id          申请人id
     * @param bill_no            订单号
     * @param production_line_id 产线id
     * @param codes              工夹具代码
     * @param counts             数量
     * @return 添加成功，否则服务器异常
     */
    @RequestMapping(value = "add_shoplist", method = RequestMethod.GET)
    public String addShoplist(@RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "bill_no") String bill_no,
                              @RequestParam(value = "production_line_id") String production_line_id, @RequestParam(value = "code") String codes,
                              @RequestParam(value = "count") String counts) {
        try {
            jigService.addShoplist(submit_id, bill_no, production_line_id, codes, counts);
        } catch (Exception e) {
            return "服务器异常";
        }
        return "添加成功";
    }

    /**
     * 获取产线列表
     *
     * @return 产线列表
     */
    @RequestMapping("get_production_line_list")
    public List<ProductionLine> getProductionLineList() {
        return jigService.getProductionLineList();
    }

    /**
     * 获取工夹具代码列表
     *
     * @return 工夹具代码列表
     */
    @RequestMapping("get_code_list")
    public List<String> getCodeList() {
        return jigService.getCodeList();
    }

    /**
     * 获取采购入库申请列表
     *
     * @return 采购入库申请列表
     */
    @RequestMapping("get_purchase_income_submit_list")
    public Map<String, Object> getPurchaseIncomeSubmitList(@RequestParam(value = "page_number")int page_number) {
        Map<String, Object> map = new HashMap<>();
        map.put("data",jigService.getPurchaseIncomeSubmitList(page_number));
        map.put("max", jigService.getPurchaseIncomeSubmitListPage(page_number));
        return map;
    }
    @RequestMapping("update_purchase_income_submit")
    public String updatePurchaseIncomeSubmit(@RequestParam(value = "id")String id,@RequestParam(value = "code")String code,
                                             @RequestParam(value = "count") String count,
                                             @RequestParam("production_line_id")String  production_line_id){
        try{
            jigService.updatePurchaseIncomeSubmit(id,code,count,production_line_id);
        }catch (Exception e){
            return "服务器错误";
        }
        return "修改成功";
    }
}
