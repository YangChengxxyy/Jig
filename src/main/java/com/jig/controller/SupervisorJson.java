package com.jig.controller;

import com.jig.entity.common.Family;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.scrap.ScrapSubmit;
import com.jig.service.CommonService;
import com.jig.service.SupervisorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/supervisor/")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class SupervisorJson {
    @Autowired
    private SupervisorService supervisorService;
    @Autowired
    private CommonService commonService;

    //监管者模式的工夹具信息管理的获取工夹具类别family
    @RequestMapping(value = "get_jig_family", method = {RequestMethod.GET, RequestMethod.POST})
    public List<Family> supervisorGetJigFamily() {
        return supervisorService.supervisorGetJigFamily();
    }

    //监管者模式的工夹具信息管理的获取所有工夹具信息List
    @RequestMapping(value = "get_all_jig_info_list", method = {RequestMethod.GET, RequestMethod.POST})
    public List<JigDefinition> supervisorGetAllJigInfoList() {
        return supervisorService.supervisorGetAllJigInfoList();
    }

    @RequestMapping(value = "add_jig_family", method = {RequestMethod.GET, RequestMethod.POST})
    public String supervisorAddJigFamily(@RequestParam("family") String family) {
        int flag = supervisorService.supervisorAddJigFamily(family);
        if (flag < 0) {
            return "添加失败!";
        }
        return "添加成功";
    }

    //监管者模式删除工夹具类别（删除时判断有无工夹具是该类别）
    @RequestMapping(value = "delete_jig_family", method = {RequestMethod.GET, RequestMethod.POST})
    public String supervisorDeleteJigFamily(@RequestParam("jig_family_id") String jig_family_id,
                                            @RequestParam("jig_family") String jig_family) {

        int this_family_count = supervisorService.supervisorGetDeleteJigFamilyCount(jig_family_id);
        System.out.print(jig_family_id);
        if (this_family_count > 0) {
            return "该类别还有工夹具信息存在，无法修改!";
        }
        int flag = supervisorService.supervisorDeleteJigFamily(jig_family_id);
        if (flag < 0) {
            return "服务器异常！";
        }
        return "删除成功!";
    }

    //通过jig_family和搜索条件 选择工夹具定义list
    @RequestMapping(value = "get_jig_definition_list")
    public Map<Object,Object> supervisorGetJigDifinitionList(@RequestParam("family_id") String family_id,
                                                              @RequestParam("code") String code,
                                                              @RequestParam("name") String name,
                                                              @RequestParam("user_for") String user_for,
                                                              @RequestParam("workcell_id") String workcell_id,
                                                              @RequestParam("page_size") int page_size,
                                                              @RequestParam("page_number") int page_number){
        Map<Object,Object> map = new HashMap<>();
        List<JigDefinition> list = supervisorService.supervisor_get_jig_definition_list(family_id,code,name,user_for,workcell_id,page_size,(page_number - 1)*page_size);
        int all = supervisorService.supervisor_get_jig_definition_list_all(family_id,code,name,user_for,workcell_id);
        map.put("list",list);
        map.put("all",all);
        return map;
    }

    //监管者模式下搜索工夹具信息
    @RequestMapping(value = "select_jig_info", method = {RequestMethod.GET, RequestMethod.POST})
    public List<JigDefinition> supervisorSelectJigInfo(@RequestParam("jig_code") String jig_code,
                                                       @RequestParam("jig_name") String jig_name,
                                                       @RequestParam("jig_model") String jig_model,
                                                       @RequestParam("jig_workcell") String jig_workcell) {
        return supervisorService.supervisorSelectJigInfo(jig_code, jig_name, jig_model, jig_workcell);
    }

    //监管者模式下编辑更改工夹具信息
    @ResponseBody
    @RequestMapping(value = "edit_jig_info")
    public int supervisorEditJigInfo(JigDefinition jig_info) {
        String user_id = "123456";
        System.out.println(jig_info.getId());
        JigDefinition old_jig_info = commonService.get_jig_info(jig_info.getId());

        String[] a = old_jig_info.compareTo(jig_info);

        int flag = supervisorService.supervisorEditJigInfo(jig_info, user_id, a[0], a[1], a[2]);
        return flag;
    }

    //监管者模式下获取我的采购审批List
    @RequestMapping(value = "get_purchase_submit_list")
    public Map<Object, Object> supervisorGetPurchaseSubmitList(@RequestParam("page_number") int page_number,
                                                               @RequestParam("page_size") int page_size) {
        page_number = (page_number - 1) * page_size;
        Map<Object, Object> map = new HashMap<>();
        List<PurchaseIncomeSubmit> list = supervisorService.supervisorGetPurchaseSubmitList(page_number, page_size);
        int all_count = supervisorService.supervisorGetPurchaseSubmitListPages();
        int max = (int) Math.ceil(all_count / (double) page_size);

        map.put("list", list);
        map.put("max", max);
        map.put("all_count", all_count);
        return map;
    }

    //监管者模式下初审通过采购审批
    @RequestMapping(value = "pass_purchase_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorPassPurchaseSubmit(@RequestParam("id") String id,
                                            @RequestParam("status") String status) {
        String first_acceptor = "123456";
        PurchaseIncomeSubmit purchaseIncomeSubmit = commonService.getPurchaseSubmit(id);

        String[] a = purchaseIncomeSubmit.PassSubmitInfo("2");
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];

        return supervisorService.supervisorPassPurchaseSubmit(id, status, first_acceptor, field, old_value, new_value);
    }

    //监管者模式下初审不通过采购审批
    @RequestMapping(value = "no_pass_purchase_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorNoPassPurchaseSubmit(@RequestParam("id") String id,
                                              @RequestParam("status") String status,
                                              @RequestParam("first_reason") String first_reason) {
        String fisrt_acceptor = "123456";
        PurchaseIncomeSubmit purchaseIncomeSubmit = commonService.getPurchaseSubmit(id);
        String[] a = purchaseIncomeSubmit.NoPassSubmitInfo("1", first_reason);
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];

        return supervisorService.supervisorNoPassPurchaseSubmit(id, status, first_reason, fisrt_acceptor, field, old_value, new_value);
    }

    //监管者模式下获取历史采购记录
    @RequestMapping(value = "get_purchase_submit_list_history", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> supervisorGetPurchaseSubmitHistory(@RequestParam("bill_no") String bill_no,
                                                                  @RequestParam("submit_name") String submit_name,
                                                                  @RequestParam("start_date") String start_date,
                                                                  @RequestParam("end_date") String end_date,
                                                                  @RequestParam("status") String status,
                                                                  @RequestParam("page_number") int page_number,
                                                                  @RequestParam("page_size") int page_size) {
        Map<Object, Object> map = new HashMap<>();
        page_number = (page_number - 1) * page_size;
        /*String start_date = "";
        String end_date = "";
        if (submit_time != "") {
            start_date = submit_time.substring(0, 10);
            end_date = submit_time.substring(13);
        }*/

        String user_id = "123456";
        List<PurchaseIncomeSubmit> list = supervisorService.supervisorGetPurchaseSubmitHistory(bill_no, submit_name, start_date, end_date, status, page_number, page_size, user_id);
        int all_count = supervisorService.supervisorGetPurchaseSubmitHistoryPages(bill_no, submit_name, start_date, end_date, status, user_id);

        map.put("list", list);
        map.put("all_count", all_count);
        return map;
    }

    //监管者模式下获取待处理的报废清单
    @RequestMapping(value = "get_scrap_submit_list", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> supervisorGetScrapSubmitList(@RequestParam("page_number") int page_number,
                                                            @RequestParam("page_size") int page_size) {
        page_number = (page_number - 1) * page_size;
        Map<Object, Object> map = new HashMap<>();

        String user_id = "123456";
        String workcell_id = "7";

        List<ScrapSubmit> list = supervisorService.supervisorGetScrapSubmitList(page_number, page_size, workcell_id);
        int all_count = supervisorService.supervisorGetScrapSubmitListPages(workcell_id);
        int max = (int) Math.ceil(all_count / (double) page_size);

        map.put("list", list);
        map.put("max", max);
        map.put("all_count", all_count);
        return map;
    }

    //监管者模式下审批待处理的报废申请
    @RequestMapping(value = "pass_scrap_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorPassScrapSubmit(@RequestParam("id") String id) {
        String workcell = "7";
        String user_id = "123456";

        ScrapSubmit scrapSubmit = commonService.getScrapSubmit(id);

        String[] a = scrapSubmit.PassSubmitInfo("2");
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];

        int flag = supervisorService.supervisorPassScrapSubmit(id, user_id, field, old_value, new_value);
        return flag;
    }

    @RequestMapping(value = "no_pass_scrap_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorNoPassScrapSubmit(@RequestParam("id") String id,
                                           @RequestParam("no_pass_reason") String no_pass_reason) {
        String user_id = "123456";

        ScrapSubmit scrapSubmit = commonService.getScrapSubmit(id);

        String[] a = scrapSubmit.NoPassSubmitInfo("1", no_pass_reason);
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];

        int flag = supervisorService.supervisorNoPassScrapSubmit(id, no_pass_reason, user_id, field, old_value, new_value);
        return flag;
    }

    //监管者模式下获取历史报废记录
    @RequestMapping(value = "get_scrap_submit_list_history", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> supervisorGetScrapSubmitListHistory(@RequestParam("code") String code,
                                                                   @RequestParam("seq_id") String seq_id,
                                                                   @RequestParam("start_date") String start_date,
                                                                   @RequestParam("end_date") String end_date,
                                                                   @RequestParam("status") String status,
                                                                   @RequestParam("scrap_reason") String scrap_reason,
                                                                   @RequestParam("page_number") int page_number,
                                                                   @RequestParam("page_size") int page_size) {
        Map<Object, Object> map = new HashMap<>();
        page_number = (page_number - 1) * page_size;

        /*String start_date = "";
        String end_date = "";
        if (submit_time != "") {
            start_date = submit_time.substring(0, 10);
            end_date = submit_time.substring(13);
        }*/
        String workcell_id = "7";

        List<ScrapSubmit> list = supervisorService.supervisorGetScrapSubmitListHistory(code, seq_id, start_date, end_date, status, scrap_reason, page_number, page_size, workcell_id);
        int all_count = supervisorService.supervisorGetScrapSubmitListHistoryPages(code, seq_id, start_date, end_date, status, scrap_reason, workcell_id);
        int max = (int) Math.ceil(all_count / (double) page_size);

        map.put("list", list);
        map.put("max", max);
        map.put("all_count", all_count);
        return map;
    }
}
