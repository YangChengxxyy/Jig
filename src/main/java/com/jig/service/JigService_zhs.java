package com.jig.service;

import com.jig.entity.PurchaseIncomeSubmit;
import com.jig.mapper.JigMapper_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JigService_zhs {
    @Autowired
    JigMapper_zhs jigMapper;

    public int addShoplist(String submit_id,String bill_no,String production_line_id,String code,String number,String submit_time){
        return jigMapper.addShoplist(submit_id,bill_no,production_line_id,code,number,submit_time);
    }

    public List<PurchaseIncomeSubmit> get_manager_purchaseCheck_list(String user_id){
        return jigMapper.get_manager_purchaseCheck_list(user_id);
    }

    public PurchaseIncomeSubmit get_manager_purchase_detail(String id){
        return jigMapper.get_manager_purchase_detail(id);
    }
}
