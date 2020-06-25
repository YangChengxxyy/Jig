package com.jig.controller;

import com.jig.annotation.Permission;
import com.jig.entity.common.Role;
import com.jig.entity.common.User;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.operate.Operate;
import com.jig.entity.operate.OperateUpdateInfo;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.scrap.ScrapSubmit;
import com.jig.service.CommonService;
import com.jig.service.ManagerService;
import com.jig.service.UserService;
import com.jig.utils.LoginStatusUtil;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Permission(Role.manager)
@RestController
@RequestMapping("/api/manager")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class ManagerJson {
    @Autowired
    private ManagerService managerService;
    @Autowired
    private CommonService commonService;
    @Autowired
    private UserService userService;

    //获取经理模块下的采购审批记录
    @RequestMapping(value = "get_purchase_submit_list", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> getManagerPurchaseSubmitList(@RequestParam("page_number") int page_number,
                                                            @RequestParam("page_size") int page_size,
                                                            @RequestParam("user_id") String user_id,
                                                            @RequestParam("workcell_id") String workcell_id) {

        page_number = (page_number - 1) * page_size;
        List<PurchaseIncomeSubmit> list = managerService.get_manager_purchase_submit_list(user_id, page_number, page_size, workcell_id);
        int all_count = managerService.get_manager_purchase_submit_list_pages(user_id, workcell_id);

        Map<Object, Object> map = new HashMap<>();
        map.put("list", list);
        map.put("all_count", all_count);
        return map;
    }

    //查看经理模块下的采购审批细节
    /*@RequestMapping(value = "get_manager_purchase_detail",method = {RequestMethod.GET,RequestMethod.POST})
    public PurchaseIncomeSubmit getManagerPurchaseDetail(@RequestParam(value = "id") String id){
        return jigService.get_manager_purchase_detail(id);
    }*/

    //经理模块下的终审审批，@RequestParam pass 相当于经过终审审批后的采购审批单的状态
    @RequestMapping(value = "pass_purchase_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public String managerCheckPurchase(@RequestParam("id") String id,
                                       @RequestParam("user_id") String user_id) {
        User user = new User();
        user.setId(user_id);
        user.setName(userService.getUserName(user_id));
        PurchaseIncomeSubmit purchaseIncomeSubmit = commonService.getPurchaseSubmit(id);
        String[] a = purchaseIncomeSubmit.PassSubmitInfo("4");
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];

        int flag = managerService.manager_pass_purchase_submit(id, "4", user, field, old_value, new_value);
        if (flag < 0) {
            return "操作失败！";
        }
        return "操作成功！";
    }

    //经理模块下终审不通过 采购单 操作
    @RequestMapping(value = "no_pass_purchase_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public String dontPassManagerPurchaseSubmit(HttpServletRequest request,
                                                @RequestParam(value = "id") String id,
                                                @RequestParam(value = "final_reason") String final_reason,
                                                @RequestParam("user_id") String user_id) {
        User user = new User();
        user.setId(user_id);
        user.setName(userService.getUserName(user_id));

        PurchaseIncomeSubmit purchaseIncomeSubmit = commonService.getPurchaseSubmit(id);
        String[] a = purchaseIncomeSubmit.NoPassSubmitInfo("3", final_reason);
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];
        int flag = managerService.manager_no_pass_purchase_submit(id, "3", final_reason, user, field, old_value, new_value);
        if (flag < 0) {
            return "服务器异常!";
        }
        return "审批成功!";
    }

    @RequestMapping(value = "get_jig_info_list", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> getManagerJigInfoList(@RequestParam(value = "page_number") int page_number, @RequestParam("page_size") int page_size) {
        page_number = (page_number - 1) * page_size;
        Map<Object, Object> map = new HashMap<>(2);
        List<JigDefinition> list = managerService.get_manager_jig_info_list(page_number, page_size);
        int max = managerService.get_manager_jig_info_list_pages();
        int all = managerService.get_manager_jig_info_all();
        map.put("data", list);
        map.put("max", max);
        map.put("all", all);
        return map;
    }

    //获取经理模块下的历史采购记录显示
    @RequestMapping(value = "get_purchase_submit_list_history", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> getManagerPurchaseSubmitListHistory(HttpServletRequest request,
                                                                   @RequestParam(value = "bill_no") String bill_no,
                                                                   @RequestParam(value = "submit_name") String submit_name,
                                                                   @RequestParam(value = "start_date") String start_date,
                                                                   @RequestParam(value = "end_date") String end_date,
                                                                   @RequestParam(value = "status") String status,
                                                                   @RequestParam(value = "page_number") int page_number,
                                                                   @RequestParam(value = "page_size") int page_size,
                                                                   @RequestParam(value = "workcell_id") String workcell_id) {

        page_number = (page_number - 1) * page_size;


        Map<Object, Object> map = new HashMap<>();
        List<PurchaseIncomeSubmit> list = managerService.get_manager_purchase_submit_list_history(bill_no, submit_name, start_date, end_date, status, page_number, page_size, workcell_id);
        int all_count = managerService.get_manager_purchase_submit_list_history_pages(bill_no, submit_name, start_date, end_date, status, workcell_id);

        map.put("list", list);
        map.put("all_count", all_count);
        return map;
    }

    //获取经理模块下/历史采购记录/查看历史操作记录
    @RequestMapping("get_purchase_submit_history_operate")
    public Map<Object, Object> ManagerGetPurchaseSubmitHistoryOperate(@RequestParam("submit_id") String submit_id) {
        String workcell_id = "7";
        Map<Object, Object> map = new HashMap<>();
        List<Operate> operates = managerService.manager_get_purchase_submit_history_operate(submit_id, workcell_id);
        List<PurchaseIncomeSubmit> purchase_submit_list = new ArrayList<>();
        List<OperateUpdateInfo> update_info_list = new ArrayList<>();

        /*for (int i = 0; i < operates.size(); i++) {
            operates.get(i).toString();
            purchase_submit_list.add(operates.get(i).getPurchase_submit());
            update_info_list.add(operates.get(i).setOperateUpdateInfo());
        }*/

        /*for (PurchaseIncomeSubmit purchaseIncomeSubmit:purchase_submit_list){
            System.out.println(purchaseIncomeSubmit);
        }*/
        /*for (OperateUpdateInfo updateInfo : update_info_list) {
            System.out.println(updateInfo);
        }*/
        map.put("update_info_list", update_info_list);
        map.put("operate_list", operates);
        map.put("purchase_submit_list", purchase_submit_list);
        return map;
    }

    //获取左侧菜单栏的通知消息数量
    @RequestMapping(value = "get_left_message_submit_count", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> getManagerPurchaseSubmitCount() {
        Map<Object, Object> map = new HashMap<>();

        int purchase_submit_count = managerService.get_manager_purchase_submit_count();
        int scrap_submit_count = managerService.get_manager_scrap_submit_count();

        map.put("purchase_submit_count", purchase_submit_count);
        map.put("scrap_submit_count", scrap_submit_count);
        return map;
    }

    //获取经理采购管理模块下的采购统计的显示数据
    /*@RequestMapping(value = "manager/get_purchase_total_data", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> getManagerPurchaseTotalData(@RequestParam(value = "user_id") String user_id,
                                                           @RequestParam(value = "bill_no") String bill_no,
                                                           @RequestParam(value = "submit_name") String submit_name,
                                                           @RequestParam(value = "submit_time") String submit_time) {
        Map<Object, Object> map = new HashMap<>();
        String start_date = "";
        String end_date = "";
        if (submit_time != "") {
            start_date = submit_time.substring(0, 10);
            end_date = submit_time.substring(13);
        }
        List<PurchaseIncomeSubmit> jig_list = managerService.get_manager_purchase_submit_list_history(bill_no, submit_name, start_date, end_date, "4", -1, "7");
        int purchase_submit_count = managerService.get_manager_purchase_submit_total_count(bill_no, submit_name, start_date, end_date, "4");
        List<JigEntity> jig_entity_list = managerService.get_manager_store_jig_list();
        List<PurchaseTotalSubmitManDetail> submit_man_list =
                managerService.get_manager_purchase_total_submit_man(bill_no, submit_name, start_date, end_date, "4");//采购员细节list--包含采购员名+申请成功的采购单数量

        for (PurchaseTotalSubmitManDetail submit_man : submit_man_list) {//获取采购员list内各个采购员的相关采购单
            for (PurchaseIncomeSubmit submit : jig_list) {
                if (submit.getSubmit_id().equals(submit_man.getSubmit_id())) {
                    submit_man.getAbout_purchase_submit_list().add(submit);
                }
            }
        }

        int store_jig_count = 0;//库存共夹具数量

        for (JigEntity jigEntity : jig_entity_list) {
            store_jig_count += jigEntity.getCount();
        }

        Map<String, Integer> jig_map = new HashMap<>();
        List<PurchaseTotalJigDetail> jig_detail_list = new ArrayList<>();//显示采购统计中新增工夹具板块查看更多工夹具的细节
        int jig_count = 0;

        for (PurchaseIncomeSubmit submit : jig_list) {//将采购单记录按code分组，放入map中
            String[] code = submit.getCode().split("\\|");
            String[] count = submit.getCount().split("\\|");
            for (int i = 0; i < code.length; i++) {
                if (jig_map.containsKey(code[i])) {
                    jig_map.put(code[i], jig_map.get(code[i]) + Integer.valueOf(count[i]));
                } else {
                    jig_map.put(code[i], Integer.valueOf(count[i]));
                }
                jig_count += Integer.valueOf(count[i]);
            }
        }

        Iterator iter = jig_map.entrySet().iterator();
        while (iter.hasNext()) {//将map遍历，放入工夹具细节List中
            PurchaseTotalJigDetail pj = new PurchaseTotalJigDetail();
            Map.Entry entry = (Map.Entry) iter.next();
            pj.setCode(entry.getKey().toString());
            pj.setCount(Integer.valueOf(entry.getValue().toString()));
            jig_detail_list.add(pj);
        }

        for (PurchaseTotalJigDetail pd : jig_detail_list) {//获取jig_detail中包含该工夹具代码的相关订单
            for (PurchaseIncomeSubmit submit : jig_list) {
                String[] code = submit.getCode().split("\\|");
                for (int i = 0; i < code.length; i++) {
                    if (code[i].equals(pd.getCode()) && !pd.getAbout_purchase_submit_list().contains(submit)) {
                        pd.getAbout_purchase_submit_list().add(submit);
                    }
                }
            }
        }

        List<String> echart_jig_code_list = new ArrayList<>();
        List<Integer> echart_jig_count_list = new ArrayList<>();
        List<Integer> store_jig_count_list = new ArrayList<>();

        for (PurchaseTotalJigDetail p : jig_detail_list) {//获取与新增工夹具代码对应的库存工夹具清单
            echart_jig_code_list.add(p.getCode());
            echart_jig_count_list.add(p.getCount());
            for (JigEntity j : jig_entity_list) {//算法可优化
                if (p.getCode().equals(j.getCode())) {
                    store_jig_count_list.add(j.getCount());
                }
            }
        }
        map.put("echart_store_jig_count_list", store_jig_count_list);
        map.put("echart_jig_code_list", echart_jig_code_list);
        map.put("echart_jig_count_list", echart_jig_count_list);
        map.put("jig_detail_list", jig_detail_list);
        map.put("jig_count", jig_count);
        map.put("purchase_submit_count", purchase_submit_count);
        map.put("store_jig_count", store_jig_count);
        map.put("submit_man_list", submit_man_list);//采购员细节
        map.put("new_jig_list", jig_list);
        return map;
    }*/

    //获取经理报废管理模块下的报废审批list
    @RequestMapping(value = "get_scrap_submit_list", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> getManagerScrapSubmitList(HttpServletRequest request,
                                                         @RequestParam("page_number") int page_number,
                                                         @RequestParam("page_size") int page_size,
                                                         @RequestParam("user_id") String user_id,
                                                         @RequestParam("workcell_id") String workcell_id) {
        List<ScrapSubmit> list = managerService.manager_get_scrap_submit_list(user_id, (page_number - 1) * page_size, page_size, workcell_id);
        int all_count = managerService.manager_get_scrap_submit_list_pages(user_id, workcell_id);

        Map<Object, Object> map = new HashMap<>();
        map.put("list", list);
        map.put("all_count", all_count);
        return map;
    }

    //经理模式下审批通过 报废申请 操作
    @RequestMapping(value = "pass_scrap_submit", method = {RequestMethod.GET, RequestMethod.POST})
    public String checkManagerScrapSubmit(@RequestParam(value = "id") String id,
                                          @RequestParam(value = "user_id") String user_id) {
        User user = new User();
        user.setId(user_id);
        user.setName(userService.getUserName(user_id));

        ScrapSubmit scrapSubmit = commonService.getScrapSubmit(id);
        String[] a = scrapSubmit.PassSubmitInfo("4");
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];

        int flag = managerService.manager_pass_scrap_submit(id, "4", user, field, old_value, new_value);
        if (flag < 0) {
            return "服务器异常!";
        }
        return "审批成功！";
    }

    //经理模式/报废审批/不通过报废申请
    @RequestMapping(value = "no_pass_scrap_submit")
    public String managerNoPassSubmit(@RequestParam("id") String id,
                                      @RequestParam("no_pass_reason") String no_pass_reason,
                                      @RequestParam("user_id") String user_id) {
        User user = new User();
        user.setId(user_id);
        user.setName(userService.getUserName(user_id));

        ScrapSubmit scrapSubmit = commonService.getScrapSubmit(id);
        String[] a = scrapSubmit.NoPassSubmitInfo("3", no_pass_reason);
        String field = a[0];
        String old_value = a[1];
        String new_value = a[2];
        int flag = managerService.manager_no_pass_scrap_submit(id, no_pass_reason, user, field, old_value, new_value);
        if (flag < 0) {
            return "服务器异常!";
        }
        return "审批成功";
    }

    @RequestMapping(value = "get_scrap_submit_list_history", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<Object, Object> getManagerScrapSubmitListHistory(HttpServletRequest request,
                                                                @RequestParam("code") String code,
                                                                @RequestParam("seq_id") String seq_id,
                                                                @RequestParam("start_date") String start_date,
                                                                @RequestParam("end_date") String end_date,
                                                                @RequestParam("status") String status,
                                                                @RequestParam("scrap_reason") String scrap_reason,
                                                                @RequestParam("page_number") int page_number,
                                                                @RequestParam("page_size") int page_size,
                                                                @RequestParam("workcell_id") String workcell_id) {

        Map<Object, Object> map = new HashMap<>(2);
        page_number = (page_number - 1) * page_size;

        List<ScrapSubmit> list = managerService.get_manager_scrap_submit_list_history(code, seq_id, start_date, end_date, status, scrap_reason, page_number, page_size, workcell_id);
        int all_count = managerService.get_manager_scrap_submit_list_history_pages(code, seq_id, start_date, end_date, status, scrap_reason, workcell_id);

        map.put("list", list);
        map.put("all_count", all_count);
        return map;
    }

}
