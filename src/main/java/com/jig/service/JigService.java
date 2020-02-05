package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.JigMapper;
import com.jig.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author yc
 */
@Service
public class JigService {
    @Autowired
    private JigMapper jigMapper;

    public List<JigDefinition> searchJigDefinition(String code, String name, String workcell, String family, String userFor, int pageNumber) {
        pageNumber = (pageNumber - 1) * 5;
        return jigMapper.searchJigDefinition(code, name, workcell, family, userFor, pageNumber);
    }

    public int searchJigDefinitionPage(String code, String name, String workcell, String family, String userFor) {
        int a = jigMapper.searchJigDefinitionPage(code, name, workcell, family, userFor);
        return (int) Math.ceil(a / 5.0);
    }

    public JigDefinition getSimpleJigDefinition(String id) {
        return jigMapper.getSimpleJigDefinition(id);
    }

    public List<JigDefinition> searchAllJigDefinition(String code, String name, String workcell, String family, String userFor) {
        return jigMapper.searchAllJigDefinition(code, name, workcell, family, userFor);
    }

    public List<OutgoSubmit> getOutgoingSubmit(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.getOutgoSubmit(page_number);
    }

    public int getgetOutgoingSubmitPage() {
        int a = jigMapper.getOutgoSubmitPage();
        return (int) Math.ceil(a / 5.0);
    }

    public Position getPosition(String code, String seq_id) {
        return jigMapper.getPosition(code, seq_id);
    }

    public void outgoJig(String id, String code, String seq_id, String rec_id) {
        jigMapper.outgoJig(id, code, seq_id, rec_id);
        jigMapper.deleteOutgoSubmit(id);
    }

    public List<OutgoingJig> getOutgoingJig(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.getOutgoingJig(page_number);
    }
    public int getOutgoingJigPage(){
        return jigMapper.getOutgoingJigPage();
    }
    public void returnJig(String id, String code, String seq_id, String rec_id) {
        jigMapper.returnJig(id, code, seq_id, rec_id);
        jigMapper.deleteOutgoingJig(id);
    }

    public void addShoplist(String submit_id, String bill_no, String production_line_id, String code, String count) {
        jigMapper.addShoplist(submit_id, bill_no, production_line_id, code, count);
    }

    public List<ProductionLine> getProductionLineList() {
        return jigMapper.getProductionLineList();
    }

    public List<String> getCodeList() {
        return jigMapper.getCodeList();
    }

    public List<PurchaseIncomeSubmit> getPurchaseIncomeSubmitList(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.getPurchaseIncomeSubmitList(page_number);
    }

    public void updatePurchaseIncomeSubmit(String id, String code, String count, String production_line_id) {
        jigMapper.updatePurchaseIncomeSubmit(id, code, count, production_line_id);
    }

    public int getPurchaseIncomeSubmitListPage(int page_number) {
        int a = jigMapper.getPurchaseIncomeSubmitListPage(page_number);
        return (int) Math.ceil(a / 5.0);
    }

    public List<PurchaseIncomeHistory> searchPurchaseIncomeHistory(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date, int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.searchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number);
    }

    public int searchPurchaseIncomeHistoryPage(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date) {
        int a = jigMapper.searchPurchaseIncomeHistoryPage(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
        return (int) Math.ceil(a / 5.0);
    }


}
