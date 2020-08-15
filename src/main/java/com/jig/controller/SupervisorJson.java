package com.jig.controller;

import com.jig.annotation.Permission;
import com.jig.entity.common.Family;
import com.jig.entity.common.Message;
import com.jig.entity.common.Role;
import com.jig.entity.common.User;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.scrap.ScrapSubmit;
import com.jig.service.CommonService;
import com.jig.service.MessageService;
import com.jig.service.SupervisorService;
import com.jig.service.UserService;
import com.jig.utils.PoiUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Permission(Role.supervisor)
@RestController
@RequestMapping("/api/supervisor/")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class SupervisorJson {
    @Autowired
    private SupervisorService supervisorService;
    @Autowired
    private CommonService commonService;
    @Autowired
    private UserService userService;
    @Autowired
    private WebSocketServer webSocketServer;
    @Autowired
    private MessageService messageService;
    @Autowired
    private PoiUtil poiUtil;

    private User getUserById(String user_id) {
        User user = new User();
        String user_name = userService.getUserName(user_id);
        user.setId(user_id);
        user.setName(user_name);
        return user;
    }

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
    public Map<Object, Object> supervisorGetJigDifinitionList(@RequestParam("family_id") String family_id,
                                                              @RequestParam("code") String code,
                                                              @RequestParam("name") String name,
                                                              @RequestParam("user_for") String user_for,
                                                              @RequestParam("workcell_id") String workcell_id,
                                                              @RequestParam("page_size") int page_size,
                                                              @RequestParam("page_number") int page_number) {


        Map<Object, Object> map = new HashMap<>();
        List<JigDefinition> list = supervisorService.supervisorGetJigDefinitionList(family_id, code, name, user_for, workcell_id, page_size, (page_number - 1) * page_size);
        int all = supervisorService.supervisorGetJigDefinitionListAll(family_id, code, name, user_for, workcell_id);
        map.put("data", list);
        map.put("all", all);
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
    @RequestMapping(value = "edit_jig_info")
    @ResponseBody
    public int supervisorEditJigInfo(@RequestParam("id") String id,
                                     @RequestParam("code") String code,
                                     @RequestParam("name") String name,
                                     @RequestParam("family_id") String family_id,
                                     @RequestParam("model") String model,
                                     @RequestParam("part_no") String part_no,
                                     @RequestParam("pm_period") String pm_period,
                                     @RequestParam("user_for") String user_for,
                                     @RequestParam("upl") String upl,
                                     @RequestParam("jig_workcell_id") String jig_workcell_id,
                                     @RequestParam("user_id") String user_id) {
        JigDefinition jig_info = new JigDefinition();
        jig_info.setId(id);
        jig_info.setCode(code);
        jig_info.setName(name);
        jig_info.setFamily_id(family_id);
        jig_info.setModel(model);
        jig_info.setPart_no(part_no);
        jig_info.setPm_period(pm_period);
        jig_info.setUser_for(user_for);
        jig_info.setUpl(upl);
        jig_info.setWorkcell_id(jig_workcell_id);

        System.out.println(jig_info);
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
        List<PurchaseIncomeSubmit> data = supervisorService.supervisorGetPurchaseSubmitList(page_number, page_size);
        int all_count = supervisorService.supervisorGetPurchaseSubmitListPages();
        int max = (int) Math.ceil(all_count / (double) page_size);

        map.put("data", data);
        map.put("max", max);
        map.put("all_count", all_count);
        return map;
    }

    //监管者模式下初审通过采购审批
    @RequestMapping(value = "pass_purchase_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorPassPurchaseSubmit(@RequestParam("id") String id,
                                            @RequestParam("status") String status,
                                            @RequestParam("user_id") String first_acceptor,
                                            @RequestParam(value = "workcell_id", defaultValue = "", required = false) String workcell_id) {
        User user = getUserById(first_acceptor);
        PurchaseIncomeSubmit purchaseIncomeSubmit = commonService.getPurchaseSubmit(id);

        String[] a = purchaseIncomeSubmit.PassSubmitInfo("2");
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];
        User submit_man = commonService.getUserByPurchaseSubmitId(id);
        int flag = supervisorService.supervisorPassPurchaseSubmit(id, status, user, field, old_value, new_value);
        if (flag > 0) {
            long now = System.currentTimeMillis();
            Message message = new Message("/purchase/my", "id", id, "监管员" + user.getName() + "通过了你的采购入库申请", now);
            webSocketServer.sendMessageToId(submit_man.getId(), message); // 发送给申请人

            Message message_to_manager = new Message("/purchase/my", "id", id, "监管员" + user.getName() + "通过了新的采购入库申请", now);
            webSocketServer.sendMessageToRole("manager", message_to_manager);

            if (!"".equals(workcell_id)) {
                messageService.idAdd(submit_man.getId(), "naive", workcell_id, "/purchase/my", "id", id, "监管员" + user.getName() + "通过了你的采购入库申请", now);
                messageService.roleAdd("manager", workcell_id,"/purchase/my", "id", id, "监管员" + user.getName() + "通过了新的采购入库申请", now);
            }
        }
        return flag;
    }

    //监管者模式下初审不通过采购审批
    @RequestMapping(value = "no_pass_purchase_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorNoPassPurchaseSubmit(@RequestParam("id") String id,
                                              @RequestParam("status") String status,
                                              @RequestParam("first_reason") String first_reason,
                                              @RequestParam("user_id") String first_acceptor,
                                              @RequestParam(value = "workcell_id", defaultValue = "", required = false) String workcell_id) {
        User user = getUserById(first_acceptor);
        PurchaseIncomeSubmit purchaseIncomeSubmit = commonService.getPurchaseSubmit(id);
        String[] a = purchaseIncomeSubmit.NoPassSubmitInfo("1", first_reason);
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];
        User submit_man = commonService.getUserByPurchaseSubmitId(id); // 申请人

        int flag = supervisorService.supervisorNoPassPurchaseSubmit(id, status, first_reason, user, field, old_value, new_value);

        if (flag > 0) {
            long now = System.currentTimeMillis();
            Message message = new Message("/purchase/my", "id", id, "监管员" + user.getName() + "拒绝了你的采购入库申请", now);
            webSocketServer.sendMessageToId(submit_man.getId(), message); // 发送给申请人

            if (!"".equals(workcell_id)) {
                messageService.idAdd(submit_man.getId(), "naive", workcell_id, "/purchase/my", "id", id, "监管员" + user.getName() + "拒绝了你的采购入库申请", now);
            }
        }
        return flag;
    }

    //监管者模式下获取历史采购记录
    @RequestMapping(value = "get_purchase_submit_list_history", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> supervisorGetPurchaseSubmitHistory(@RequestParam("bill_no") String bill_no,
                                                                  @RequestParam("submit_name") String submit_name,
                                                                  @RequestParam("start_date") String start_date,
                                                                  @RequestParam("end_date") String end_date,
                                                                  @RequestParam("status") String status,
                                                                  @RequestParam("page_number") int page_number,
                                                                  @RequestParam("page_size") int page_size,
                                                                  @RequestParam("user_id") String user_id) {
        Map<Object, Object> map = new HashMap<>();
        page_number = (page_number - 1) * page_size;
        /*String start_date = "";
        String end_date = "";
        if (submit_time != "") {
            start_date = submit_time.substring(0, 10);
            end_date = submit_time.substring(13);
        }*/

        List<PurchaseIncomeSubmit> list = supervisorService.supervisorGetPurchaseSubmitHistory(bill_no, submit_name, start_date, end_date, status, page_number, page_size, user_id);
        int all_count = supervisorService.supervisorGetPurchaseSubmitHistoryPages(bill_no, submit_name, start_date, end_date, status, user_id);

        map.put("data", list);
        map.put("all_count", all_count);
        return map;
    }

    //监管者模式下获取待处理的报废清单
    @RequestMapping(value = "get_scrap_submit_list", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> supervisorGetScrapSubmitList(@RequestParam("page_number") int page_number,
                                                            @RequestParam("page_size") int page_size,
                                                            @RequestParam("workcell_id") String workcell_id) {
        page_number = (page_number - 1) * page_size;
        Map<Object, Object> map = new HashMap<>();

        List<ScrapSubmit> list = supervisorService.supervisorGetScrapSubmitList(page_number, page_size, workcell_id);
        int all_count = supervisorService.supervisorGetScrapSubmitListPages(workcell_id);
        int max = (int) Math.ceil(all_count / (double) page_size);

        map.put("data", list);
        map.put("max", max);
        map.put("all_count", all_count);
        return map;
    }

    //监管者模式下通过待处理的报废申请
    @RequestMapping(value = "pass_scrap_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorPassScrapSubmit(@RequestParam("id") String id,
                                         @RequestParam("user_id") String user_id,
                                         @RequestParam(value = "workcell_id", defaultValue = "", required = false) String workcell_id) {
        User user = getUserById(user_id);
        ScrapSubmit scrapSubmit = commonService.getScrapSubmit(id);

        String[] a = scrapSubmit.PassSubmitInfo("2");
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];
        User submit_man = commonService.getUserByScrapSubmitId(id); // 审批申请人(high)
        int flag = supervisorService.supervisorPassScrapSubmit(id, user, field, old_value, new_value);
        if (flag > 0) {
            long now = System.currentTimeMillis();
            Message message = new Message("/scrap/my", "id", id, "监管员" + user.getName() + "通过了你的报废申请", now);
            webSocketServer.sendMessageToId(submit_man.getId(), message); // 发送给申请人

            Message message_to_manager = new Message("/scrap/my", "id", id, "监管员" + user.getName() + "通过了新的报废申请", now);
            webSocketServer.sendMessageToRole("manager", message_to_manager); // 发送给经理

            if (!"".equals(workcell_id)) {
                messageService.idAdd(submit_man.getId(), "high", workcell_id, "/scrap/my", "id", id, "监管员" + user.getName() + "通过了你的报废申请", now);
                messageService.roleAdd("manager", workcell_id,"/scrap/my", "id", id, "监管员" + user.getName() + "通过了新的报废申请", now);
            }
        }
        return flag;
    }

    @RequestMapping(value = "no_pass_scrap_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public int supervisorNoPassScrapSubmit(@RequestParam("id") String id,
                                           @RequestParam("no_pass_reason") String no_pass_reason,
                                           @RequestParam("user_id") String user_id,
                                           @RequestParam(value = "workcell_id", defaultValue = "", required = false) String workcell_id) {
        User user = getUserById(user_id);
        ScrapSubmit scrapSubmit = commonService.getScrapSubmit(id);

        String[] a = scrapSubmit.NoPassSubmitInfo("1", no_pass_reason);
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];
        User submit_man = commonService.getUserByScrapSubmitId(id);
        int flag = supervisorService.supervisorNoPassScrapSubmit(id, no_pass_reason, user, field, old_value, new_value);
        if (flag > 0) {
            long now = System.currentTimeMillis();
            Message message = new Message("/scrap/my", "id", id, "监管员" + user.getName() + "拒绝了你的报废申请", now);
            webSocketServer.sendMessageToId(submit_man.getId(), message); // 发送给申请人

            if (!"".equals(workcell_id)) {
                messageService.idAdd(submit_man.getId(), "high", workcell_id, "/scrap/my", "id", id, "监管员" + user.getName() + "拒绝了你的报废申请", now);
            }
        }
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
                                                                   @RequestParam("page_size") int page_size,
                                                                   @RequestParam("workcell_id") String workcell_id) {
        Map<Object, Object> map = new HashMap<>();
        page_number = (page_number - 1) * page_size;

        /*String start_date = "";
        String end_date = "";
        if (submit_time != "") {
            start_date = submit_time.substring(0, 10);
            end_date = submit_time.substring(13);
        }*/


        List<ScrapSubmit> list = supervisorService.supervisorGetScrapSubmitListHistory(code, seq_id, start_date, end_date, status, scrap_reason, page_number, page_size, workcell_id);
        int all_count = supervisorService.supervisorGetScrapSubmitListHistoryPages(code, seq_id, start_date, end_date, status, scrap_reason, workcell_id);
        int max = (int) Math.ceil(all_count / (double) page_size);

        map.put("data", list);
        map.put("max", max);
        map.put("all_count", all_count);
        return map;
    }

    @RequestMapping("download_one_purchase_submit")
    public void downloadOnePurchaseSubmit(@RequestParam("page_number") int page_number,
                                          @RequestParam("page_size") int page_size,
                                          @RequestParam("file_name") String file_name,
                                          HttpServletResponse response) {
        poiUtil.outputFile(response, file_name, supervisorService.supervisorGetPurchaseSubmitList(page_number, page_size));
    }

    @RequestMapping("download_all_purchase_submit")
    public void downloadAllPurchaseSubmit(HttpServletResponse response, @RequestParam("file_name") String file_name) throws Exception {
        List<PurchaseIncomeSubmit> list = supervisorService.supervisorGetAllPurchaseSubmitList();
        poiUtil.outputFile(response, file_name, list);
    }

    @RequestMapping("download_one_purchase_submit_history")
    public void downloadOnePurchaseSubmitHistory(@RequestParam("bill_no") String bill_no,
                                                 @RequestParam("submit_name") String submit_name,
                                                 @RequestParam("start_date") String start_date,
                                                 @RequestParam("end_date") String end_date,
                                                 @RequestParam("status") String status,
                                                 @RequestParam("page_number") int page_number,
                                                 @RequestParam("page_size") int page_size,
                                                 @RequestParam("user_id") String user_id,
                                                 @RequestParam("file_name") String file_name,
                                                 HttpServletResponse response) {
        page_number = (page_number - 1) * page_size;
        List<PurchaseIncomeSubmit> list = supervisorService.supervisorGetPurchaseSubmitHistory(bill_no, submit_name, start_date, end_date, status, page_number, page_size, user_id);
        poiUtil.outputFile(response, file_name, list);
    }

    @RequestMapping("download_all_purchase_submit_history")
    public void downloadAllPurchaseSubmitHistory(@RequestParam("bill_no") String bill_no,
                                                 @RequestParam("submit_name") String submit_name,
                                                 @RequestParam("start_date") String start_date,
                                                 @RequestParam("end_date") String end_date,
                                                 @RequestParam("status") String status,
                                                 @RequestParam("user_id") String user_id,
                                                 @RequestParam("file_name") String file_name,
                                                 HttpServletResponse response) {
        List<PurchaseIncomeSubmit> list = supervisorService.supervisorGetAllPurchaseSubmitHistoryList(bill_no, submit_name, start_date, end_date, status, user_id);
        poiUtil.outputFile(response, file_name, list);
    }

    @RequestMapping("download_one_scrap_history")
    public void downloadOneScrapHistory(HttpServletResponse response,
                                        @RequestParam("code") String code,
                                        @RequestParam("seq_id") String seq_id,
                                        @RequestParam("start_date") String start_date,
                                        @RequestParam("end_date") String end_date,
                                        @RequestParam("status") String status,
                                        @RequestParam("scrap_reason") String scrap_reason,
                                        @RequestParam("page_number") int page_number,
                                        @RequestParam("page_size") int page_size,
                                        @RequestParam("workcell_id") String workcell_id,
                                        @RequestParam("file_name") String file_name) {
        page_number = (page_number - 1) * page_size;
        List<ScrapSubmit> list = supervisorService.supervisorGetScrapSubmitListHistory(code, seq_id, start_date, end_date, status, scrap_reason, page_number, page_size, workcell_id);
        poiUtil.outputFile(response, file_name, list);
    }

    @RequestMapping("download_all_scrap_history")
    public void downloadAllScrapHistory(HttpServletResponse response,
                                        @RequestParam("code") String code,
                                        @RequestParam("seq_id") String seq_id,
                                        @RequestParam("start_date") String start_date,
                                        @RequestParam("end_date") String end_date,
                                        @RequestParam("status") String status,
                                        @RequestParam("scrap_reason") String scrap_reason,
                                        @RequestParam("workcell_id") String workcell_id,
                                        @RequestParam("file_name") String file_name) {
        List<ScrapSubmit> list = supervisorService.supervisorGetAllScrapSubmitListHistory(code, seq_id, start_date, end_date, status, scrap_reason, workcell_id);
        poiUtil.outputFile(response, file_name, list);
    }

}
