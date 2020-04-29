package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.JigMapper_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JigService_zhs {
    @Autowired
    JigMapper_zhs jigMapper;

    //通用
    public List<Workcell> get_workcell_list() {
        return jigMapper.get_workcell_list();
    }

    public List<Family> get_family_list() {
        return jigMapper.get_family_list();
    }

    public List<Model> get_model_list() {
        return jigMapper.get_model_list();
    }

    public List<PartNo> get_part_no_list() {
        return jigMapper.get_part_no_list();
    }

    public JigDefinition get_jig_info(String id) {
        return jigMapper.get_jig_info(id);
    }

    public PurchaseIncomeSubmit get_purchase_submit(String id) {
        return jigMapper.get_purchase_submit(id);
    }

    public ScrapSubmit get_scrap_submit(String id) {
        return jigMapper.get_scrap_submit(id);
    }

    //获取经理模块下的采购管理下的采购审批清单及其页数
    public List<PurchaseIncomeSubmit> get_manager_purchase_submit_list(String user_id, int page_number, String workcell_id) {
        return jigMapper.get_manager_purchase_submit_list(user_id, page_number, workcell_id);
    }

    public int get_manager_purchase_submit_list_pages(String workcell_id) {
        return jigMapper.get_manager_purchase_submit_list_pages(workcell_id);
    }

    //经理模式下获取单个采购申请明细（弃用）
    public PurchaseIncomeSubmit get_manager_purchase_detail(String id) {
        return jigMapper.get_manager_purchase_detail(id);
    }

    //经理模式下审批通过采购单
    public int manager_check_purchase_submit(String id, String pass, String user_id, String field, String old_value, String new_value) {
        return jigMapper.manager_check_purchase_submit(id, pass, user_id, field, old_value, new_value);
    }

    //经理模式采购审批的终审不通过的提交
    public int manager_dont_pass_purchase_submit(String id, String status, String final_reason, String user_id, String field, String old_value, String new_value) {
        return jigMapper.manager_dont_pass_purchase_submit(id, status, final_reason, user_id, field, old_value, new_value);
    }

    //
    public List<JigDefinition> get_manager_jig_info_list(int page_number, int page_size) {
        return jigMapper.get_manager_jig_info_list(page_number, page_size);
    }

    public int get_manager_jig_info_list_pages() {
        int a = jigMapper.get_manager_jig_info_list_pages();
        return (int) Math.ceil(a / 5.0);
    }

    //获取经理模块下的历史采购记录显示及其页数
    public List<PurchaseIncomeSubmit> get_manager_purchase_submit_list_history(String bill_no, String submit_name, String start_date, String end_date, String status, int page_number, String workcell_id) {
        return jigMapper.get_manager_purchase_submit_list_history(bill_no, submit_name, start_date, end_date, status, page_number, workcell_id);
    }

    public int get_manager_purchase_submit_list_history_pages(String bill_no, String submit_name, String start_date, String end_date, String status, String workcell_id) {
        return jigMapper.get_manager_purchase_submit_list_history_pages(bill_no, submit_name, start_date, end_date, status, workcell_id);
    }

    //获取经理模块下/历史采购记录/查看历史操作记录
    public List<Operate> manager_get_purchase_submit_history_operate(String submit_id, String workcell_id) {
        return jigMapper.manager_get_purchase_submit_history_operate(submit_id, workcell_id);
    }

    //获取左侧菜单栏的通知消息数量
    public int get_manager_purchase_submit_count() {
        return jigMapper.get_manager_purchase_submit_count();
    }

    public int get_manager_scrap_submit_count() {
        return jigMapper.get_manager_scrap_submit_count();
    }

    //获取经理模式下采购统计模块下的新增采购单数量
    public int get_manager_purchase_submit_total_count(String bill_no, String submit_name, String start_date, String end_date, String status) {
        return jigMapper.get_manager_purchase_submit_list_history_pages(bill_no, submit_name, start_date, end_date, status, "7");
    }

    //获取经理模式采购统计模块下的采购员细节
    public List<PurchaseTotalSubmitManDetail> get_manager_purchase_total_submit_man(String bill_no, String submit_name, String start_date, String end_date, String status) {
        return jigMapper.get_manager_purchase_total_submit_man(bill_no, submit_name, start_date, end_date, status);
    }

    //经理模式，仓库工夹具余量; 返回类型-->
    public List<JigEntity> get_manager_store_jig_list() {
        return jigMapper.get_manager_store_jig_list();
    }

    //获取经理模块下的报废审批记录
    public List<ScrapSubmit> get_manager_scrap_submit_list(int page_number, String workcell_id) {
        return jigMapper.get_manager_scrap_submit_list(page_number, workcell_id);
    }

    //获取经理模块下的报废审批记录的最大页数
    public int get_manager_scrap_submit_list_pages(String workcell_id) {
        return jigMapper.get_manager_scrap_submit_list_pages(workcell_id);
    }

    //经理模式审批的报废申请,status表示审批之后该scrap_submit的最终状态
    public int check_manager_scrap_submit(String submit_id, String status, String user_id, String field, String old_value, String new_value) {
        int flag = jigMapper.check_manager_scrap_submit(submit_id, status, user_id, field, old_value, new_value);
        return flag;
    }

    //经理模式/报废审批/不通过报废申请
    public int manager_no_pass_submit(String submit_id, String no_pass_reason, String user_id, String field, String old_value, String new_value) {
        return jigMapper.manager_no_pass_submit(submit_id, no_pass_reason, user_id, field, old_value, new_value);
    }


    //经理模式，历史报废审批记录list的查询显示及其页数查询
    public List<ScrapSubmit> get_manager_scrap_submit_list_history(String code, String submit_name, String start_date, String end_date, String status, String scrap_reason, int page_number, String workcell_id) {
        return jigMapper.get_manager_scrap_submit_list_history(code, submit_name, start_date, end_date, status, scrap_reason, page_number, workcell_id);
    }

    public int get_manager_scrap_submit_list_history_pages(String code, String submit_name, String start_date, String end_date, String status, String scrap_reason, String workcell_id) {
        return jigMapper.get_manager_scrap_submit_list_history_pages(code, submit_name, start_date, end_date, status, scrap_reason, workcell_id);
    }


    //监管者
    //监管者模式的工夹具信息管理的获取工夹具类别family
    public List<Family> get_supervisor_jig_family() {
        return jigMapper.get_supervisor_jig_family();
    }

    //监管者模式的工夹具信息管理的获取所有工夹具信息List
    public List<JigDefinition> get_supervisor_all_jig_info_list() {
        return jigMapper.get_supervisor_all_jig_info_list();
    }

    //监管者模式添加工夹具类别
    public int add_supervisor_jig_family(String family) {
        return jigMapper.add_supervisor_jig_family(family);
    }

    //监管者模式下获取与 要被删除的工夹具类别相关的 工夹具信息数量 -》（防止误删）
    public int supervisor_get_delete_jig_family_count(String jig_family_id) {
        return jigMapper.supervisor_get_delete_jig_family_count(jig_family_id);
    }

    //监管者模式下删除工夹具类别
    public int supervisor_delete_jig_family(String id) {
        return jigMapper.supervisor_delete_jig_family(id);
    }

    //监管者模式下搜索工夹具信息
    public List<JigDefinition> supervisor_select_jig_info(String jig_code, String jig_name, String jig_model, String jig_workcell) {
        return jigMapper.supervisor_select_jig_info(jig_code, jig_name, jig_model, jig_workcell);
    }

    //监管者模式下编辑更改工夹具信息
    public int supervisor_edit_jig_info(JigDefinition jig_info, String user_id, String field, String old_value, String new_value) {
        return jigMapper.supervisor_edit_jig_info(jig_info, user_id, field, old_value, new_value);
    }

    //监管者模式下获取我的采购审批
    public List<PurchaseIncomeSubmit> supervisor_get_purchase_submit_list(int page_number, int page_size) {
        return jigMapper.supervisor_get_purchase_submit_list(page_number, page_size);
    }

    //监管者模式下获取我的采购审批的最大页数
    public int supervisor_get_purchase_submit_list_pages() {
        return jigMapper.supervisor_get_purchase_submit_list_pages();
    }

    //监管者模式下初审通过我的采购审批
    public int supervisor_pass_purchase_submit(String id, String status, String first_acceptor, String field, String old_value, String new_value) {
        return jigMapper.supervisor_pass_purchase_submit(id, status, first_acceptor, field, old_value, new_value);
    }

    //监管者模式下初审不通过采购审批
    public int supervisor_no_pass_purchase_submit(String id, String status, String first_reason, String first_acceptor, String field, String old_value, String new_value) {
        return jigMapper.supervisor_no_pass_purchase_submit(id, status, first_reason, first_acceptor, field, old_value, new_value);
    }

    //监管者模式下获取历史采购记录及其最大页数
    public List<PurchaseIncomeSubmit> supervisor_get_purchase_submit_list_history(String bill_no, String submit_name, String start_date, String end_date, String status, int page_number, int page_size, String user_id) {
        return jigMapper.supervisor_get_purchase_submit_list_history(bill_no, submit_name, start_date, end_date, status, page_number, page_size, user_id);
    }

    public int supervisor_get_purchase_submit_list_history_pages(String bill_no, String submit_name, String start_date, String end_date, String status, String user_id) {
        return jigMapper.supervisor_get_purchase_submit_list_history_pages(bill_no, submit_name, start_date, end_date, status, user_id);
    }

    //监管者模式下获取待处理的报废清单及其最大页数
    public List<ScrapSubmit> supervisor_get_scrap_submit_list(int page_number, int page_size, String workcell_id) {
        return jigMapper.supervisor_get_scrap_submit_list(page_number, page_size, workcell_id);
    }

    public int supervisor_get_scrap_submit_list_pages(String workcell_id) {
        return jigMapper.supervisor_get_scrap_submit_list_pages(workcell_id);
    }

    //监管者模式下审批待处理的报废申请
    public int supervisor_pass_scrap_submit(String id, String user_id, String field, String old_value, String new_value) {
        return jigMapper.supervisor_pass_scrap_submit(id, user_id, field, old_value, new_value);
    }

    public int supervisor_no_pass_scrap_submit(String id, String no_pass_reason, String user_id, String field, String old_value, String new_value) {
        return jigMapper.supervisor_no_pass_scrap_submit(id, no_pass_reason, user_id, field, old_value, new_value);
    }

    //监管者模式下获取历史报废记录
    public List<ScrapSubmit> supervisor_get_scrap_submit_list_history(String code, String submit_name, String start_date, String end_date, String status, String scrap_reason, int page_number, int page_size, String workcell_id) {
        return jigMapper.supervisor_get_scrap_submit_list_history(code, submit_name, start_date, end_date, status, scrap_reason, page_number, page_size, workcell_id);
    }

    public int supervisor_get_scrap_submit_list_history_pages(String code, String submit_name, String start_date, String end_date, String status, String scrap_reason, String workcell_id) {
        return jigMapper.supervisor_get_scrap_submit_list_history_pages(code, submit_name, start_date, end_date, status, scrap_reason, workcell_id);

    }


    public int get_manager_jig_info_all() {
        return jigMapper.get_manager_jig_info_list_pages();
    }
}
