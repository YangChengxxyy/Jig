package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
import com.jig.entity.Position;
import com.jig.entity.ProductionLine;
import com.jig.service.JigService;
import org.jetbrains.annotations.NotNull;
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

    @NotNull
    private Map<String, Object> getStringObjectMap(List<?> data, int max) {
        Map<String, Object> map = new HashMap<>(2);
        map.put("data", data);
        map.put("max", max);
        return map;
    }

    @RequestMapping(value = "get_demo_list", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<String, Object> getDemoList(@RequestParam(value = "page_number") int pageNumber) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < pageNumber; i++) {
            a.add(people);
        }
        return getStringObjectMap(a, 11);
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
    @RequestMapping("naive_search_jig_definition")
    public Map<String, Object> naiveSearchJigDefinition(@RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber) throws Exception {
        return getStringObjectMap(jigService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber), jigService.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor));
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
    @RequestMapping("naive_get_outgoing_submit")
    public Map<String, Object> getOutgoingSubmit(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.naiveGetOutgoingSubmit(page_number), jigService.naiveGetOutgoingSubmitPage());
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
     * naive工夹具出库
     *
     * @param id     outgo_submit表id
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     * @return 是否出库成功
     */
    @RequestMapping("naive_outgo_jig")
    public boolean naiveOutgoJig(@RequestParam(value = "id") String id, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "rec_id") String rec_id) {
        try {
            jigService.naiveOutgoJig(id, code, seq_id, rec_id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * naive获取需要入库的工夹具信息
     *
     * @return 需要入库的工夹具信息
     */
    @RequestMapping("naive_get_outgoing_jig")
    public Map<String, Object> naiveGetOutgoingJig(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.naiveGetOutgoingJig(page_number), jigService.naiveGetOutgoingJigPage());
    }

    /**
     * naive工夹具入库
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     * @param id     outgoing_jig表id
     * @return 是否入库成功
     */
    @RequestMapping("naive_return_jig")
    public boolean naiveReturnJig(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "rec_id") String rec_id, @RequestParam(value = "id") String id) {
        try {
            jigService.naiveReturnJig(id, code, seq_id, rec_id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * high添加采购入库申请
     *
     * @param submit_id          申请人id
     * @param bill_no            订单号
     * @param production_line_id 产线id
     * @param codes              工夹具代码
     * @param counts             数量
     * @return 添加成功，否则服务器异常
     */
    @RequestMapping(value = "high_add_shoplist", method = RequestMethod.GET)
    public boolean highAddShoplist(@RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "bill_no") String bill_no,
                                   @RequestParam(value = "production_line_id") String production_line_id, @RequestParam(value = "code") String codes,
                                   @RequestParam(value = "count") String counts) {
        try {
            jigService.highAddShoplist(submit_id, bill_no, production_line_id, codes, counts);
            return true;
        } catch (Exception e) {
            return false;
        }
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
     * high获取采购入库申请列表
     *
     * @param page_number 页码
     * @return 采购入库申请列表
     */
    @RequestMapping("high_get_purchase_income_submit_list")
    public Map<String, Object> highGetPurchaseIncomeSubmitList(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highGetPurchaseIncomeSubmitList(page_number), jigService.highGetPurchaseIncomeSubmitListPage());
    }

    /**
     * high修改采购入库申请单
     *
     * @param id                 purchase_income_submit表id
     * @param code               工夹具代码
     * @param count              数量
     * @param production_line_id 产线id
     * @return 是否修改成功
     */
    @RequestMapping("high_update_purchase_income_submit")
    public boolean highUpdatePurchaseIncomeSubmit(@RequestParam(value = "id") String id, @RequestParam(value = "code") String code,
                                                  @RequestParam(value = "count") String count,
                                                  @RequestParam("production_line_id") String production_line_id) {
        try {
            jigService.highUpdatePurchaseIncomeSubmit(id, code, count, production_line_id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * high获取查询到的入库申请历史
     *
     * @param bill_no            单据号
     * @param submit_name        申请人
     * @param code               工夹具代码
     * @param production_line_id 产线id
     * @param status             状态
     * @param start_date         最早日期
     * @param end_date           最晚日期
     * @param page_number        页码
     * @return 查询到的入库申请历史
     */
    @RequestMapping("high_search_purchase_income_history")
    public Map<String, Object> highSearchPurchaseIncomeHistory(@RequestParam(value = "bill_no") String bill_no, @RequestParam(value = "submit_name") String submit_name,
                                                               @RequestParam(value = "code") String code, @RequestParam(value = "production_line_id") String production_line_id,
                                                               @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                                               @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number),
                jigService.highSearchPurchaseIncomeHistoryPage(bill_no, submit_name, code, production_line_id, status, start_date, end_date));
    }

    /**
     * high删除出库申请
     *
     * @param id purchase_income_submit表id
     * @return 是否成功
     */
    @RequestMapping("high_delete_purchase_submit")
    public boolean highDeletePurchaseSubmit(@RequestParam(value = "id") String id) {
        try {
            jigService.highDeletePurchaseSubmit(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * high获取报修申请记录
     *
     * @return 获取报修申请记录
     */
    @RequestMapping("high_get_repair_jig")
    public Map<String, Object> highGetRepairJig(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highGetRepairJig(page_number), jigService.highGetRepairJigPage());
    }

    /**
     * high搜索历史报修记录
     *
     * @param code        工夹具代码
     * @param seq_id      工夹具序列号
     * @param submit_name 申请时间
     * @param status      状态
     * @param start_date  最早时间
     * @param end_date    最晚时间
     * @param page_number 页码
     * @return 搜索到历史报修记录
     */
    @RequestMapping("high_search_repair_history")
    public Map<String, Object> highSearchRepairHistory(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_name") String submit_name, @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date, @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highSearchRepairHistory(code, seq_id, submit_name, status, start_date, end_date, page_number)
                , jigService.highSearchRepairHistoryPage(code, seq_id, submit_name, status, start_date, end_date));
    }

    /**
     * high获取报废申请
     *
     * @param submit_id   申请人id
     * @param page_number 页码
     * @return 报废申请
     */
    @RequestMapping("high_get_scrap")
    public Map<String, Object> highGetScrap(@RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highGetScrap(submit_id, page_number)
                , jigService.highGetScrapPage(submit_id));
    }

    /**
     * high搜索报废历史
     *
     * @param code        工夹具代码
     * @param seq_id      工夹具序列号
     * @param submit_name 申请人id
     * @param status      状态
     * @param start_date  最早日期
     * @param end_date    最晚日期
     * @param page_number 页码
     * @return 搜索到的报废历史
     */
    @RequestMapping("high_search_scrap_history")
    public Map<String, Object> highSearchScrapHistory(@RequestParam(value = "code") String code,
                                                      @RequestParam(value = "seq_id") String seq_id,
                                                      @RequestParam(value = "submit_name") String submit_name,
                                                      @RequestParam(value = "status") String status,
                                                      @RequestParam(value = "start_date") String start_date,
                                                      @RequestParam(value = "end_date") String end_date,
                                                      @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highSearchScrapHistory(code, seq_id, submit_name, status, start_date, end_date, page_number)
                , jigService.highSearchScrapHistoryPage(code, seq_id, submit_name, status, start_date, end_date));
    }
}
