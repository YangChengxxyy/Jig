package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.PurchaseIncomeSubmit;
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
    @RequestMapping(value = "get_stu_list",method = {RequestMethod.POST, RequestMethod.GET})
    public Map<Object,Object> getStuList(@RequestParam(value = "ask") int ask){
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("zhs");
        people.setSex("男");
        people.setStu_no("189050539");
        for(int i=0;i<ask;i++){
            a.add(people);
        }
        Map<Object, Object> map = new HashMap<>();
        map.put("data",a);
        return map;
    }

    @RequestMapping(value = "add_shoplist",method = {RequestMethod.POST,RequestMethod.GET})
    public String addShoplist(@RequestParam(value = "submit_id") String submit_id,
                                          @RequestParam(value = "bill_no") String bill_no,
                                          @RequestParam(value = "production_line_id") String production_line_id,
                                          @RequestParam(value = "code1") String code1,
                                          @RequestParam(value = "code2") String code2,
                                          @RequestParam(value = "code3") String code3,
                                          @RequestParam(value = "code4") String code4,
                                          @RequestParam(value = "number1") String number1,
                                          @RequestParam(value = "number2") String number2,
                                          @RequestParam(value = "number3") String number3,
                                          @RequestParam(value = "number4") String number4,
                                          @RequestParam(value = "submit_time") String submit_time){
        String result = "";
        String code = "";
        String number = "";
        if(code1!="" && number1!=""){
            code+=code1;
            number+=number1;
        }
        if(code2!="" && number2!=""){
            code+="|"+code2;
            number+="|"+number2;
        }
        if(code3!="" && number3!=""){
            code+="|"+code3;
            number+="|"+number3;
        }
        if(code4!="" && number4!=""){
            code+="|"+code4;
            number+="|"+number4;
        }
        if(code=="" || number == ""){
            return "工夹具代码或夹具数量不得为空！";
        }
        int flag = jigService.addShoplist(submit_id,bill_no,production_line_id,code,number,submit_time);
        if(flag<0){
            return "添加失败！";
        }
        return "添加成功！";
    }

    @RequestMapping(value = "get_manager_purchaseCheck_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<PurchaseIncomeSubmit> getManagerPurchaseCheckList(@RequestParam(value = "user_id") String user_id){
        return jigService.get_manager_purchaseCheck_list(user_id);
    }

    @RequestMapping(value = "get_manager_purchase_detail",method = {RequestMethod.GET,RequestMethod.POST})
    public PurchaseIncomeSubmit get_manager_purchase_detail(@RequestParam(value = "id") String id){
        return jigService.get_manager_purchase_detail(id);
    }

}
