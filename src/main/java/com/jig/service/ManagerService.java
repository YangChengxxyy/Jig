package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.ManagerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerService {
    @Autowired
    private ManagerMapper managerMapper;

    //获取经理模块下的采购管理下的采购审批清单及其页数
    public List<PurchaseIncomeSubmit> get_manager_purchase_submit_list(String user_id, int page_number, int page_size, String workcell_id) {
        return managerMapper.get_manager_purchase_submit_list(user_id, page_number, page_size, workcell_id);
    }

    public int get_manager_purchase_submit_list_pages(String user_id, String workcell_id) {
        return managerMapper.get_manager_purchase_submit_list_pages(user_id, workcell_id);
    }

    //经理模式下获取单个采购申请明细（弃用）
    public PurchaseIncomeSubmit get_manager_purchase_detail(String id) {
        return managerMapper.get_manager_purchase_detail(id);
    }

    //经理模式下审批通过采购单
    public int manager_pass_purchase_submit(String id, String status, User user, String field, String old_value, String new_value) {
        return managerMapper.manager_pass_purchase_submit(id, status, user, field, old_value, new_value);
    }

    //经理模式采购审批的终审不通过的提交
    public int manager_no_pass_purchase_submit(String id, String status, String final_reason, User user, String field, String old_value, String new_value) {
        return managerMapper.manager_no_pass_purchase_submit(id, status, final_reason, user, field, old_value, new_value);
    }

    //
    public List<JigDefinition> get_manager_jig_info_list(int page_number, int page_size) {
        return managerMapper.get_manager_jig_info_list(page_number, page_size);
    }

    public int get_manager_jig_info_list_pages() {
        int a = managerMapper.get_manager_jig_info_list_pages();
        return (int) Math.ceil(a / 5.0);
    }

    public int get_manager_jig_info_all() {
        return managerMapper.get_manager_jig_info_list_pages();
    }

    //获取经理模块下的历史采购记录显示及其页数
    public List<PurchaseIncomeSubmit> get_manager_purchase_submit_list_history(String bill_no, String submit_name, String start_date, String end_date, String status, int page_number, int page_size, String workcell_id) {
        return managerMapper.get_manager_purchase_submit_list_history(bill_no, submit_name, start_date, end_date, status, page_number, page_size, workcell_id);
    }

    public int get_manager_purchase_submit_list_history_pages(String bill_no, String submit_name, String start_date, String end_date, String status, String workcell_id) {
        return managerMapper.get_manager_purchase_submit_list_history_pages(bill_no, submit_name, start_date, end_date, status, workcell_id);
    }

    //获取经理模块下/历史采购记录/查看历史操作记录
    public List<Operate> manager_get_purchase_submit_history_operate(String submit_id, String workcell_id) {
        return managerMapper.manager_get_purchase_submit_history_operate(submit_id, workcell_id);
    }

    //获取左侧菜单栏的通知消息数量
    public int get_manager_purchase_submit_count() {
        return managerMapper.get_manager_purchase_submit_count();
    }

    public int get_manager_scrap_submit_count() {
        return managerMapper.get_manager_scrap_submit_count();
    }

    //获取经理模式下采购统计模块下的新增采购单数量
    public int get_manager_purchase_submit_total_count(String bill_no, String submit_name, String start_date, String end_date, String status) {
        return managerMapper.get_manager_purchase_submit_list_history_pages(bill_no, submit_name, start_date, end_date, status, "7");
    }

    //获取经理模式采购统计模块下的采购员细节
    public List<PurchaseTotalSubmitManDetail> get_manager_purchase_total_submit_man(String bill_no, String submit_name, String start_date, String end_date, String status) {
        return managerMapper.get_manager_purchase_total_submit_man(bill_no, submit_name, start_date, end_date, status);
    }

    //经理模式，仓库工夹具余量; 返回类型-->
    public List<JigEntity> get_manager_store_jig_list() {
        return managerMapper.get_manager_store_jig_list();
    }

    //获取经理模块下的报废审批记录
    public List<ScrapSubmit> manager_get_scrap_submit_list(String user_id, int page_number, int page_size, String workcell_id) {
        return managerMapper.manager_get_scrap_submit_list(user_id, page_number, page_size, workcell_id);
    }

    //获取经理模块下的报废审批记录的最大页数
    public int manager_get_scrap_submit_list_pages(String user_id, String workcell_id) {
        return managerMapper.manager_get_scrap_submit_list_pages(user_id, workcell_id);
    }

    //经理模式审批的报废申请,status表示审批之后该scrap_submit的最终状态
    public int manager_pass_scrap_submit(String submit_id, String status, User user, String field, String old_value, String new_value) {
        int flag = managerMapper.manager_pass_scrap_submit(submit_id, status, user, field, old_value, new_value);
        return flag;
    }

    //经理模式/报废审批/不通过报废申请
    public int manager_no_pass_scrap_submit(String submit_id, String no_pass_reason, User user, String field, String old_value, String new_value) {
        return managerMapper.manager_no_pass_scrap_submit(submit_id, no_pass_reason, user, field, old_value, new_value);
    }


    //经理模式，历史报废审批记录list的查询显示及其页数查询
    public List<ScrapSubmit> get_manager_scrap_submit_list_history(String code, String seq_id, String start_date, String end_date, String status, String scrap_reason, int page_number, int page_size, String workcell_id) {
        return managerMapper.get_manager_scrap_submit_list_history(code, seq_id, start_date, end_date, status, scrap_reason, page_number, page_size, workcell_id);
    }

    public int get_manager_scrap_submit_list_history_pages(String code, String submit_name, String start_date, String end_date, String status, String scrap_reason, String workcell_id) {
        return managerMapper.get_manager_scrap_submit_list_history_pages(code, submit_name, start_date, end_date, status, scrap_reason, workcell_id);
    }
}
