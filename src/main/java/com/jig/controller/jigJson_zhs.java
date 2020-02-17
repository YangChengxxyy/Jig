package com.jig.controller;

import com.jig.entity.*;
import com.jig.service.JigService_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.*;
import java.util.*;

@RestController
public class jigJson_zhs {
    @Autowired
    private JigService_zhs jigService;

    @RequestMapping(value = "get_stu_list", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<Object, Object> getStuList(@RequestParam(value = "ask") int ask) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("zhs");
        people.setSex("男");
        people.setStu_no("189050539");
        for (int i = 0; i < ask; i++) {
            a.add(people);
        }
        Map<Object, Object> map = new HashMap<>();
        map.put("data", a);
        return map;
    }

    //获取经理模块下的采购审批记录
    @RequestMapping(value = "get_manager_purchase_submit_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<PurchaseIncomeSubmit> getManagerPurchaseSubmitList(@RequestParam(value = "user_id") String user_id){
        return jigService.get_manager_purchase_submit_list(user_id);
    }

    //查看经理模块下的采购审批细节
    @RequestMapping(value = "get_manager_purchase_detail",method = {RequestMethod.GET,RequestMethod.POST})
    public PurchaseIncomeSubmit getManagerPurchaseDetail(@RequestParam(value = "id") String id){
        //System.out.println(jigService.get_manager_purchase_detail(id).getSubmit_name());
        return jigService.get_manager_purchase_detail(id);
    }

    //经理模块下的终审审批，@RequestParam pass 相当于经过终审审批后的采购审批单的状态
    @RequestMapping(value = "manager_check_purchase_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public String  managerCheckPurchase(@RequestParam(value = "id") String id,@RequestParam(value = "pass") String pass){
        int flag = jigService.manager_check_purchase_submit(id,pass);
        if(flag<0){
            return "操作失败！";
        }
        return "操作成功！";
    }

    @RequestMapping(value = "get_manager_jig_info_list",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerJigInfoList(@RequestParam(value = "now_page_number") int page_number){
        page_number = (page_number-1)*5;
        Map<Object, Object> map = new HashMap<>(2);
        List<JigDefinition> list =  jigService.get_manager_jig_info_list(page_number);
        int max = jigService.get_manager_jig_info_list_pages();
        map.put("data",list);
        map.put("max",max);
        return map;
    }

    //获取经理模块下的历史采购记录显示
    @RequestMapping(value = "get_manager_purchase_submit_list_history",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerPurchaseSubmitListHistory(@RequestParam(value = "bill_no") String bill_no,
                                                     @RequestParam(value = "submit_name") String submit_name,
                                                     @RequestParam(value = "submit_time") String submit_time,
                                                     @RequestParam(value = "status") String status,
                                                     @RequestParam(value = "page_number") int page_number){
        page_number = (page_number-1)*5;
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }

        Map<Object, Object> map = new HashMap<>(2);
        List<PurchaseIncomeSubmit> list = jigService.get_manager_purchase_submit_list_history(bill_no,submit_name,start_date,end_date,status,page_number);
        int max = jigService.get_manager_purchase_submit_list_history_pages(bill_no,submit_name,start_date,end_date,status);
        map.put("data",list);
        map.put("max",max);
        return map;
    }

    //获取经理模块的采购统计功能中的各大板块数据显示
    @RequestMapping(value = "get_manager_purchase_submit_count",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object, Object> getManagerPurchaseSubmitCount(){
        Map<Object,Object> map = new HashMap<>();
        int purchase_submit_count = jigService.get_manager_purchase_submit_count();
        map.put("purchase_submit_count",purchase_submit_count);
        return map;
    }

    //获取经理采购管理模块下的采购统计的显示数据
    @RequestMapping(value = "get_manager_purchase_total_data",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerPurchaseTotalData(@RequestParam(value = "user_id") String user_id,
                                                          @RequestParam(value = "bill_no") String bill_no,
                                                          @RequestParam(value = "submit_name") String submit_name,
                                                          @RequestParam(value = "submit_time") String submit_time){
        Map<Object, Object> map = new HashMap<>();
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }
        List<PurchaseIncomeSubmit> list = jigService.get_manager_purchase_submit_list_history(bill_no,submit_name,start_date,end_date,"4",-1);
        int purchase_submit_count = jigService.get_manager_purchase_submit_total_count(bill_no,submit_name,start_date,end_date,"4");
        Map<String,Integer> jig_map = new HashMap<>();
        List<PurchaseTotalJigDetail> jig_list = new ArrayList<>();//显示采购统计中新增工夹具板块查看更多工夹具的细节
        int jig_count = 0;

        for(PurchaseIncomeSubmit submit : list){
            String[] code = submit.getCode().split("\\|");
            String[] count = submit.getCount().split("\\|");
            for(int i=0;i<code.length;i++){
                if(jig_map.containsKey(code[i])){
                    jig_map.put(code[i],jig_map.get(code[i])+Integer.valueOf(count[i]));
                }else {
                    jig_map.put(code[i], Integer.valueOf(count[i]));
                }
                jig_count+=Integer.valueOf(count[i]);
            }
        }
        Iterator iter = jig_map.entrySet().iterator();
        while (iter.hasNext()){
            PurchaseTotalJigDetail pj = new PurchaseTotalJigDetail();
            Map.Entry entry = (Map.Entry)iter.next();
            pj.setCode(entry.getKey().toString());
            pj.setCount(Integer.valueOf(entry.getValue().toString()));
            jig_list.add(pj);
        }
        map.put("jig_detail_list",jig_list);
        map.put("jig_count",jig_count);
        map.put("purchase_submit_count",purchase_submit_count);
        return map;
    }

    //获取经理报废管理模块下的报废审批list
    @RequestMapping(value = "get_manager_scrap_submit_list",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerScrapSubmitList(@RequestParam(value = "page_number") int page_number){
        List<ScrapSubmit> list = jigService.get_manager_scrap_submit_list(page_number);
        int scrap_submit_max_page = jigService.get_manager_scrap_submit_list_pages();
        Map<Object,Object> map = new HashMap<>(2);
        map.put("data",list);
        map.put("max",scrap_submit_max_page);
        return map;
    }

    @RequestMapping(value = "check_manager_scrap_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public String checkManagerScrapSubmit(@RequestParam(value = "submit_id") String submit_id,@RequestParam("status") String status){
        int flag = jigService.check_manager_scrap_submit(submit_id,status);
        if(flag<0){
            return "服务器异常!";
        }
        return "审批成功！";
    }

    @RequestMapping(value = "get_manager_scrap_submit_list_history",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerScrapSubmitListHistory(@RequestParam("code") String code,
                                                               @RequestParam("submit_name") String submit_name,
                                                               @RequestParam("submit_time") String submit_time,
                                                               @RequestParam("status") String status,
                                                               @RequestParam("scrap_reason") String scrap_reason,
                                                               @RequestParam("page_number") int page_number){
        Map<Object,Object> map = new HashMap<>(2);
        page_number = (page_number-1)*5;
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }
        List<ScrapSubmit> list = jigService.get_manager_scrap_submit_list_history(code,submit_name,start_date,end_date,status,scrap_reason,page_number);
        int max_page = jigService.get_manager_scrap_submit_list_history_pages(code,submit_name,start_date,end_date,status,scrap_reason);

        map.put("data",list);
        map.put("max",max_page);
        return map;
    }

}

