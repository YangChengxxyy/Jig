package com.jig.controller;

import com.jig.service.CommonService;
import com.jig.service.JigService_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class jigJson_zhs {
    @Autowired
    private JigService_zhs jigService;
    private CommonService commonService;


    //通用


    //获取经理模式采购统计模块下的采购员细节数据
    /*@RequestMapping(value = "get_manager_purchase_total_submit_man",method = {RequestMethod.POST,RequestMethod.GET},)
    public Map<Object,Object> getMangerPurchaseTotalSubmitMan(@RequestParam(value = "user_id") String user_id,
                                                              @RequestParam(value = "bill_no") String bill_no,
                                                              @RequestParam(value = "submit_name") String submit_name,
                                                              @RequestParam(value = "submit_time") String submit_time){
        Map<Object,Object> map = new HashMap<>();
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }
        List<PurchaseTotalSubmitManDetail> submit_man_list = jigService.get_manager_purchase_total_submit_man(user_id,bill_no,submit_name,start_date,end_date,"4");

        return map;
    }*/


    //监管者


    //初级用户


}

