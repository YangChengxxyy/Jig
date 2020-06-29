package com.jig.service;

import com.jig.entity.common.Family;
import com.jig.entity.common.User;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.scrap.ScrapSubmit;
import com.jig.mapper.SupervisorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupervisorService {
    @Autowired
    private SupervisorMapper supervisorMapper;

    //监管者模式的工夹具信息管理的获取工夹具类别family
    public List<Family> supervisorGetJigFamily() {
        return supervisorMapper.supervisorGetJigFamily();
    }

    //监管者模式的工夹具信息管理的获取所有工夹具信息List
    public List<JigDefinition> supervisorGetAllJigInfoList() {
        return supervisorMapper.supervisorGetAllJigInfoList();
    }

    //监管者模式添加工夹具类别
    public int supervisorAddJigFamily(String family) {
        return supervisorMapper.supervisorAddJigFamily(family);
    }

    //监管者模式下获取与 要被删除的工夹具类别相关的 工夹具信息数量 -》（防止误删）
    public int supervisorGetDeleteJigFamilyCount(String jig_family_id) {
        return supervisorMapper.supervisorGetDeleteJigFamilyCount(jig_family_id);
    }

    //监管者模式下删除工夹具类别
    public int supervisorDeleteJigFamily(String id) {
        return supervisorMapper.supervisorDeleteJigFamily(id);
    }

    //
    public List<JigDefinition> supervisorGetJigDefinitionList(String family_id, String code, String name, String user_for, String workcell_id, int page_size, int page_number) {
        return supervisorMapper.supervisorGetJigDefinitionList(family_id, code, name, user_for, workcell_id, page_size, page_number);
    }

    public int supervisorGetJigDefinitionListAll(String family_id, String code, String name, String user_for, String workcell_id) {
        return supervisorMapper.supervisorGetJigDefinitionListAll(family_id, code, name, user_for, workcell_id);
    }

    //监管者模式下搜索工夹具信息
    public List<JigDefinition> supervisorSelectJigInfo(String jig_code, String jig_name, String jig_model, String jig_workcell) {
        return supervisorMapper.supervisorSelectJigInfo(jig_code, jig_name, jig_model, jig_workcell);
    }

    //监管者模式下编辑更改工夹具信息
    public int supervisorEditJigInfo(JigDefinition jig_info, String user_id, String field, String old_value, String new_value) {
        return supervisorMapper.supervisorEditJigInfo(jig_info, user_id, field, old_value, new_value);
    }

    //监管者模式下获取我的采购审批
    public List<PurchaseIncomeSubmit> supervisorGetPurchaseSubmitList(int page_number, int page_size) {
        return supervisorMapper.supervisorGetPurchaseSubmitList(page_number, page_size);
    }

    //监管者模式下获取我的采购审批的最大页数
    public int supervisorGetPurchaseSubmitListPages() {
        return supervisorMapper.supervisorGetPurchaseSubmitListPages();
    }

    //监管者模式下初审通过我的采购审批
    public int supervisorPassPurchaseSubmit(String id, String status, User user, String field, String old_value, String new_value) {
        return supervisorMapper.supervisorPassPurchaseSubmit(id, status, user, field, old_value, new_value);
    }

    //监管者模式下初审不通过采购审批
    public int supervisorNoPassPurchaseSubmit(String id, String status, String first_reason, User user, String field, String old_value, String new_value) {
        return supervisorMapper.supervisorNoPassPurchaseSubmit(id, status, first_reason, user, field, old_value, new_value);
    }

    //监管者模式下获取历史采购记录及其最大页数
    public List<PurchaseIncomeSubmit> supervisorGetPurchaseSubmitHistory(String bill_no, String submit_name, String start_date, String end_date, String status, int page_number, int page_size, String user_id) {
        return supervisorMapper.supervisorGetPurchaseSubmitHistory(bill_no, submit_name, start_date, end_date, status, page_number, page_size, user_id);
    }

    public int supervisorGetPurchaseSubmitHistoryPages(String bill_no, String submit_name, String start_date, String end_date, String status, String user_id) {
        return supervisorMapper.supervisorGetPurchaseSubmitHistoryPages(bill_no, submit_name, start_date, end_date, status, user_id);
    }

    //监管者模式下获取待处理的报废清单及其最大页数
    public List<ScrapSubmit> supervisorGetScrapSubmitList(int page_number, int page_size, String workcell_id) {
        return supervisorMapper.supervisorGetScrapSubmitList(page_number, page_size, workcell_id);
    }

    public int supervisorGetScrapSubmitListPages(String workcell_id) {
        return supervisorMapper.supervisorGetScrapSubmitListPages(workcell_id);
    }

    //监管者模式下审批待处理的报废申请
    public int supervisorPassScrapSubmit(String id, User user, String field, String old_value, String new_value) {
        return supervisorMapper.supervisorPassScrapSubmit(id, user, field, old_value, new_value);
    }

    public int supervisorNoPassScrapSubmit(String id, String no_pass_reason, User user, String field, String old_value, String new_value) {
        return supervisorMapper.supervisorNoPassScrapSubmit(id, no_pass_reason, user, field, old_value, new_value);
    }

    //监管者模式下获取历史报废记录
    public List<ScrapSubmit> supervisorGetScrapSubmitListHistory(String code, String seq_id, String start_date, String end_date, String status, String scrap_reason, int page_number, int page_size, String workcell_id) {
        return supervisorMapper.supervisorGetScrapSubmitListHistory(code, seq_id, start_date, end_date, status, scrap_reason, page_number, page_size, workcell_id);
    }

    public int supervisorGetScrapSubmitListHistoryPages(String code, String seq_id, String start_date, String end_date, String status, String scrap_reason, String workcell_id) {
        return supervisorMapper.supervisorGetScrapSubmitListHistoryPages(code, seq_id, start_date, end_date, status, scrap_reason, workcell_id);

    }

    public List<PurchaseIncomeSubmit> supervisorGetAllPurchaseSubmitList() {
        return supervisorMapper.supervisorGetAllPurchaseSubmitList();
    }

    public List<PurchaseIncomeSubmit> supervisorGetAllPurchaseSubmitHistoryList(String bill_no, String submit_name, String start_date, String end_date, String status, String user_id) {
        return supervisorMapper.supervisorGetAllPurchaseSubmitHistoryList(bill_no, submit_name, start_date, end_date, status, user_id);
    }

    public List<ScrapSubmit> supervisorGetAllScrapSubmitListHistory(String code, String seq_id, String start_date, String end_date, String status, String scrap_reason, String workcell_id) {
        return supervisorMapper.supervisorGetAllScrapSubmitListHistory(code, seq_id, start_date, end_date, status, scrap_reason, workcell_id);
    }
}
