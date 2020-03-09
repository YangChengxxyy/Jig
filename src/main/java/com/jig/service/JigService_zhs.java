package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.JigMapper_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
public class JigService_zhs {
    @Autowired
    JigMapper_zhs jigMapper;
    //通用
    public List<Workcell> get_workcell_list(){
        return jigMapper.get_workcell_list();
    }

    public List<Family> get_family_list(){
        return jigMapper.get_family_list();
    }

    public List<Model> get_model_list(){
        return jigMapper.get_model_list();
    }

    public List<PartNo> get_part_no_list(){
        return jigMapper.get_part_no_list();
    }


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

    //经理模式采购审批的终审不通过的提交
    public int dont_pass_manager_purchase_submit(String id,String status,String final_reason){
        return jigMapper.dont_pass_manager_purchase_submit(id,status,final_reason);
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

    //获取经理模式采购统计模块下的采购员细节
    public List<PurchaseTotalSubmitManDetail> get_manager_purchase_total_submit_man(String bill_no,String submit_name,String start_date,String end_date,String status){
        return jigMapper.get_manager_purchase_total_submit_man(bill_no,submit_name,start_date,end_date,status);
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



    //监管者
    //监管者模式的工夹具信息管理的获取工夹具类别family
    public List<Family> get_supervisor_jig_family(){
        return jigMapper.get_supervisor_jig_family();
    }

    //监管者模式的工夹具信息管理的获取所有工夹具信息List
    public List<JigDefinition> get_supervisor_all_jig_info_list(){
        return jigMapper.get_supervisor_all_jig_info_list();
    }

    //监管者模式添加工夹具类别
    public int add_supervisor_jig_family(String family){
        return jigMapper.add_supervisor_jig_family(family);
    }

    //监管者模式下获取与 要被删除的工夹具类别相关的 工夹具信息数量 -》（防止误删）
    public int supervisor_get_delete_jig_family_count(String jig_family_id){
        return jigMapper.supervisor_get_delete_jig_family_count(jig_family_id);
    }

    //监管者模式下删除工夹具类别
    public int supervisor_delete_jig_family(String id){
        return jigMapper.supervisor_delete_jig_family(id);
    }

    //监管者模式下搜索工夹具信息
    public List<JigDefinition> supervisor_select_jig_info(String jig_code,String jig_name,String jig_model,String jig_workcell){
        return jigMapper.supervisor_select_jig_info(jig_code,jig_name,jig_model,jig_workcell);
    }

    //监管者模式下编辑更改工夹具信息
    public int supervisor_edit_jig_info(JigDefinition jig_info,String user_id){
        return jigMapper.supervisor_edit_jig_info(jig_info,user_id);
    }

    //监管者模式下获取我的采购审批
    public List<PurchaseIncomeSubmit> supervisor_get_purchase_submit_list(int page_number){
        return jigMapper.supervisor_get_purchase_submit_list(page_number);
    }

    //监管者模式下获取我的采购审批的最大页数
    public int supervisor_get_purchase_submit_list_pages(){
        int max_page = jigMapper.supervisor_get_purchase_submit_list_pages();
        return (int)Math.ceil(max_page/5.0);
    }

    //监管者模式下初审通过我的采购审批
    public int supervisor_pass_purchase_submit(String id,String status,String first_acceptor){
        return jigMapper.supervisor_pass_purchase_submit(id,status,first_acceptor);
    }

    //监管者模式下初审不通过采购审批
    public int supervisor_no_pass_purchase_submit(String id,String status,String first_reason,String first_acceptor){
        return jigMapper.supervisor_no_pass_purchase_submit(id,status,first_reason,first_acceptor);
    }

    //监管者模式下获取历史采购记录及其最大页数
    public List<PurchaseIncomeSubmit> supervisor_get_purchase_submit_list_history(String bill_no,String submit_name,String start_date,String end_date,String status,int page_number,String user_id){
        return jigMapper.supervisor_get_purchase_submit_list_history(bill_no,submit_name,start_date,end_date,status,page_number,user_id);
    }

    public int supervisor_get_purchase_submit_list_history_pages(String bill_no,String submit_name,String start_date,String end_date,String status,String user_id){
        int max_page = jigMapper.supervisor_get_purchase_submit_list_history_pages(bill_no,submit_name,start_date,end_date,status,user_id);
        return (int)Math.ceil(max_page/5.0);
    }

    //监管者模式下获取待处理的报废清单及其最大页数
    public List<ScrapSubmit> supervisor_get_scrap_submit_list(int page_number,String workcell_id){
        return jigMapper.supervisor_get_scrap_submit_list(page_number,workcell_id);
    }

    public int supervisor_get_scrap_submit_list_pages(String workcell_id){
        int max_page = jigMapper.supervisor_get_scrap_submit_list_pages(workcell_id);
        return (int)Math.ceil(max_page/5.0);
    }

    //监管者模式下审批待处理的报废申请
    public int supervisor_pass_scrap_submit(String id,String user_id){
        return jigMapper.supervisor_pass_scrap_submit(id,user_id);
    }

    public int supervisor_no_pass_scrap_submit(String id,String no_pass_reason,String user_id){
        return jigMapper.supervisor_no_pass_scrap_submit(id,no_pass_reason,user_id);
    }

    //监管者模式下获取历史报废记录
    public List<ScrapSubmit> supervisor_get_scrap_submit_list_history(String code,String submit_name,String start_date,String end_date,String status,String scrap_reason,int page_number,String workcell_id){
        return jigMapper.supervisor_get_scrap_submit_list_history(code,submit_name,start_date,end_date,status,scrap_reason,page_number,workcell_id);
    }

    public int supervisor_get_scrap_submit_list_history_pages(String code,String submit_name,String start_date,String end_date,String status,String scrap_reason,String workcell_id){
        int max_page = jigMapper.supervisor_get_scrap_submit_list_history_pages(code,submit_name,start_date,end_date,status,scrap_reason,workcell_id);
        return (int)Math.ceil(max_page/5.0);
    }


}
