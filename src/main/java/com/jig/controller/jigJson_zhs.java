package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
import com.jig.entity.PurchaseIncomeSubmit;
import com.jig.service.JigService;
import com.jig.service.JigService_zhs;
import org.apache.ibatis.annotations.Param;
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

//    @RequestMapping(value = "add_shoplist",method = {RequestMethod.POST,RequestMethod.GET})
//    public String addShoplist(@RequestParam(value = "submit_id") String submit_id,
//                                          @RequestParam(value = "bill_no") String bill_no,
//                                          @RequestParam(value = "production_line_id") String production_line_id,
//                                          @RequestParam(value = "code1") String code1,
//                                          @RequestParam(value = "code2") String code2,
//                                          @RequestParam(value = "code3") String code3,
//                                          @RequestParam(value = "code4") String code4,
//                                          @RequestParam(value = "number1") String number1,
//                                          @RequestParam(value = "number2") String number2,
//                                          @RequestParam(value = "number3") String number3,
//                                          @RequestParam(value = "number4") String number4,
//                                          @RequestParam(value = "submit_time") String submit_time){
//        String result = "";
//        String code = "";
//        String number = "";
//        if(code1!="" && number1!=""){
//            code+=code1;
//            number+=number1;
//        }
//        if(code2!="" && number2!=""){
//            code+="|"+code2;
//            number+="|"+number2;
//        }
//        if(code3!="" && number3!=""){
//            code+="|"+code3;
//            number+="|"+number3;
//        }
//        if(code4!="" && number4!=""){
//            code+="|"+code4;
//            number+="|"+number4;
//        }
//        if(code=="" || number == ""){
//            return "工夹具代码或夹具数量不得为空！";
//        }
//        int flag = jigService.addShoplist(submit_id,bill_no,production_line_id,code,number,submit_time);
//        if(flag<0){
//            return "添加失败！";
//        }
//        return "添加成功！";
//    }

    @RequestMapping(value = "get_manager_purchaseCheck_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<PurchaseIncomeSubmit> getManagerPurchaseCheckList(@RequestParam(value = "user_id") String user_id){
        return jigService.get_manager_purchaseCheck_list(user_id);
    }

    @RequestMapping(value = "get_manager_purchase_detail",method = {RequestMethod.GET,RequestMethod.POST})
    public PurchaseIncomeSubmit getManagerPurchaseDetail(@RequestParam(value = "id") String id){
        System.out.println(jigService.get_manager_purchase_detail(id).getSubmit_name());
        return jigService.get_manager_purchase_detail(id);
    }

    @RequestMapping(value = "manager_first_pass_purchase_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public String  managerFirstPassPurchase(@RequestParam(value = "id") String id,@RequestParam(value = "pass") String pass){
        int flag = jigService.manager_first_pass_purchase_submit(id,pass);
        if(flag<0){
            return "操作失败！";
        }
        return "操作成功！";
    }

    @RequestMapping(value = "get_manager_jig_info_list",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerJigInfoList(@RequestParam(value = "page_number") int page_number){
        page_number = (page_number-1)*5;
        Map<Object, Object> map = new HashMap<>(2);
        List<JigDefinition> list =  jigService.get_manager_jig_info_list(page_number);
        int max = jigService.get_manager_jig_info_list_pages();
        map.put("data",list);
        map.put("max",max);
        return map;
    }

    @RequestMapping(value = "get_manager_purchaselist_history",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerPurchaseList(@RequestParam(value = "bill_no") String bill_no,
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
        List<PurchaseIncomeSubmit> list = jigService.get_manager_purchaselist_history(bill_no,submit_name,start_date,end_date,status,page_number);
        int max = jigService.get_manager_purchaselist_history_pages(bill_no,submit_name,start_date,end_date,status);
        map.put("data",list);
        map.put("max",max);
        return map;
    }

}
