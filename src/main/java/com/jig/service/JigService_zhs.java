package com.jig.service;

import com.jig.entity.JigDefinition;
import com.jig.entity.PurchaseIncomeSubmit;
import com.jig.mapper.JigMapper_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

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

    public int manager_first_pass_purchase_submit(String id,String pass){
        return jigMapper.manager_first_pass_purchase_submit(id,pass);
    }

    public List<JigDefinition> get_manager_jig_info_list(int page_number){
        return jigMapper.get_manager_jig_info_list(page_number);
    }

    public int get_manager_jig_info_list_pages(){
        int a = jigMapper.get_manager_jig_info_list_pages();
        return (int)Math.ceil(a/5.0);
    }

    public List<PurchaseIncomeSubmit> get_manager_purchaselist_history(String bill_no,String submit_name,String start_date,String end_date,String status,int page_number){
        return jigMapper.get_manager_purchaselist_history(bill_no,submit_name,start_date,end_date,status,page_number);
    }

    public int get_manager_purchaselist_history_pages(String bill_no,String submit_name,String start_date,String end_date,String status){
        int max =  jigMapper.get_manager_purchaselist_history_pages(bill_no,submit_name,start_date,end_date,status);
        return (int)Math.ceil(max/5.0);
    }
}
