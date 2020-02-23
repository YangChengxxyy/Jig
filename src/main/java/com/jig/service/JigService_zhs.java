package com.jig.service;

import com.jig.entity.JigDefinition;
import com.jig.entity.JigEntity;
import com.jig.entity.PurchaseIncomeSubmit;
import com.jig.entity.ScrapSubmit;
import com.jig.mapper.JigMapper_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JigService_zhs {
    @Autowired
    JigMapper_zhs jigMapper;

    public int addShoplist(String submit_id, String bill_no, String production_line_id, String code, String number, String submit_time) {
        return jigMapper.addShoplist(submit_id, bill_no, production_line_id, code, number, submit_time);
    }
    //获取经理模块下的采购管理下的采购审批清单
    public List<PurchaseIncomeSubmit> get_manager_purchase_submit_list(String user_id,int page_number){
        return jigMapper.get_manager_purchase_submit_list(user_id,page_number);
    }

    public int get_manager_purchase_submit_list_pages(){
        int max = jigMapper.get_manager_purchase_submit_list_pages();
        return (int)Math.ceil(max/5.0);
    }

    public PurchaseIncomeSubmit get_manager_purchase_detail(String id){
        return jigMapper.get_manager_purchase_detail(id);
    }

    public int manager_check_purchase_submit(String id,String pass){
        return jigMapper.manager_check_purchase_submit(id,pass);
    }

    public List<JigDefinition> get_manager_jig_info_list(int page_number){
        return jigMapper.get_manager_jig_info_list(page_number);
    }

    public int get_manager_jig_info_list_pages(){
        int a = jigMapper.get_manager_jig_info_list_pages();
        return (int)Math.ceil(a/5.0);
    }

    public List<PurchaseIncomeSubmit> get_manager_purchase_submit_list_history(String bill_no,String submit_name,String start_date,String end_date,String status,int page_number){
        return jigMapper.get_manager_purchase_submit_list_history(bill_no,submit_name,start_date,end_date,status,page_number);
    }

    public int get_manager_purchase_submit_list_history_pages(String bill_no,String submit_name,String start_date,String end_date,String status){
        int max =  jigMapper.get_manager_purchase_submit_list_history_pages(bill_no,submit_name,start_date,end_date,status);
        return (int)Math.ceil(max/5.0);
    }
    //获取左侧菜单栏的通知消息数量
    public int get_manager_purchase_submit_count(){
        return jigMapper.get_manager_purchase_submit_count();
    }
    public int get_manager_scrap_submit_count(){return jigMapper.get_manager_scrap_submit_count();}

    //获取经理模式下采购统计模块下的新增采购单数量
    public int get_manager_purchase_submit_total_count(String bill_no,String submit_name,String start_date,String end_date,String status){
        return jigMapper.get_manager_purchase_submit_list_history_pages(bill_no,submit_name,start_date,end_date,status);
    }

    //经理模式，仓库工夹具余量; 返回类型-->
    public List<JigEntity> get_manager_store_jig_list(){
        return jigMapper.get_manager_store_jig_list();
    }

    //获取经理模块下的报废审批记录
    public List<ScrapSubmit> get_manager_scrap_submit_list(int page_number){
        return jigMapper.get_manager_scrap_submit_list(page_number);
    }
    //获取经理模块下的报废审批记录的最大页数
    public int get_manager_scrap_submit_list_pages(){
        int max_page = jigMapper.get_manager_scrap_submit_list_pages();
        return (int)Math.ceil(max_page/5.0);
    }

    //经理模式审批的报废申请,status表示审批之后该scrap_submit的最终状态
    public int check_manager_scrap_submit(String submit_id,String status){
        int flag = jigMapper.check_manager_scrap_submit(submit_id,status);
        return flag;
    }

    //经理模式，历史审批记录list的查询显示及其页数查询
    public List<ScrapSubmit> get_manager_scrap_submit_list_history(String code,String submit_name,String start_date,String end_date,String status,String scrap_reason,int page_number){
        return jigMapper.get_manager_scrap_submit_list_history(code,submit_name,start_date,end_date,status,scrap_reason,page_number);
    }

    public int get_manager_scrap_submit_list_history_pages(String code,String submit_name,String start_date,String end_date,String status,String scrap_reason){
        int max_page = jigMapper.get_manager_scrap_submit_list_history_pages(code,submit_name,start_date,end_date,status,scrap_reason);
        return (int)Math.ceil(max_page/5.0);
    }
}
