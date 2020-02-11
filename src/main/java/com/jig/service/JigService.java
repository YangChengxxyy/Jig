package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.JigMapper;
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

    public List<JigDefinition> naiveSearchJigDefinition(String code, String name, String workcell, String family, String userFor, int pageNumber) {
        pageNumber = (pageNumber - 1) * 5;
        return jigMapper.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber);
    }

    public int naiveSearchJigDefinitionPage(String code, String name, String workcell, String family, String userFor) {
        int a = jigMapper.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor);
        return (int) Math.ceil(a / 5.0);
    }

    public JigDefinition getSimpleJigDefinition(String id) {
        return jigMapper.getSimpleJigDefinition(id);
    }

    public List<JigDefinition> searchAllJigDefinition(String code, String name, String workcell, String family, String userFor) {
        return jigMapper.searchAllJigDefinition(code, name, workcell, family, userFor);
    }

    public List<OutgoSubmit> naiveGetOutgoingSubmit(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.naiveGetOutgoingSubmit(page_number);
    }

    public int naiveGetOutgoingSubmitPage() {
        int a = jigMapper.naiveGetOutgoSubmitPage();
        return (int) Math.ceil(a / 5.0);
    }

    public Position getPosition(String code, String seq_id) {
        return jigMapper.getPosition(code, seq_id);
    }

    public void naiveOutgoJig(String id, String code, String seq_id, String rec_id) {
        jigMapper.naiveOutgoJig(id, code, seq_id, rec_id);
        jigMapper.naiveDeleteOutgoSubmit(id);
    }

    public List<OutgoingJig> naiveGetOutgoingJig(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.naiveGetOutgoingJig(page_number);
    }

    public int naiveGetOutgoingJigPage() {
        return jigMapper.getOutgoingJigPage();
    }

    public void naiveReturnJig(String id, String code, String seq_id, String rec_id) {
        jigMapper.naiveReturnJig(id, code, seq_id, rec_id);
        jigMapper.naiveDeleteOutgoingJig(id);
    }

    public void highAddShoplist(String submit_id, String bill_no, String production_line_id, String code, String count) {
        jigMapper.highAddShoplist(submit_id, bill_no, production_line_id, code, count);
    }

    public List<ProductionLine> getProductionLineList() {
        return jigMapper.getProductionLineList();
    }

    public List<String> getCodeList() {
        return jigMapper.getCodeList();
    }

    public List<PurchaseIncomeSubmit> highGetPurchaseIncomeSubmitList(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.highGetPurchaseIncomeSubmitList(page_number);
    }

    public int highGetPurchaseIncomeSubmitListPage() {
        int a = jigMapper.highGetPurchaseIncomeSubmitListPage();
        return (int) Math.ceil(a / 5.0);
    }

    public void highUpdatePurchaseIncomeSubmit(String id, String code, String count, String production_line_id) {
        jigMapper.highUpdatePurchaseIncomeSubmit(id, code, count, production_line_id);
    }

    public List<PurchaseIncomeHistory> highSearchPurchaseIncomeHistory(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date, int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number);
    }

    public int highSearchPurchaseIncomeHistoryPage(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date) {
        int a = jigMapper.highSearchPurchaseIncomeHistoryPage(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
        return (int) Math.ceil(a / 5.0);
    }

    public List<PurchaseIncomeHistory> highSearchAllPurchaseIncomeHistory(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date) {
        return jigMapper.highSearchAllPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
    }

    public void highDeletePurchaseSubmit(String id) {
        jigMapper.highDeletePurchaseSubmit(id);
    }

    public List<RepairJig> highGetRepairJig(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.highGetRepairJig(page_number);
    }

    public int highGetRepairJigPage() {
        int a = jigMapper.highGetRepairJigPage();
        return (int) Math.ceil(a / 5.0);
    }

    public List<RepairJig> highSearchRepairHistory(String code, String seq_id, String submit_name, String status, String start_date, String end_date, int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.highSearchRepairHistory(code, seq_id, submit_name, status, start_date, end_date, page_number);
    }

    public int highSearchRepairHistoryPage(String code, String seq_id, String submit_name, String status, String start_date, String end_date) {
        return jigMapper.highSearchRepairHistoryPage(code, seq_id, submit_name, status, start_date, end_date);
    }
}
