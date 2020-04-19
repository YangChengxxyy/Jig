package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.JigMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author yc
 */
@Service
public class JigService {
    @Autowired
    private JigMapper jigMapper;

    public List<JigDefinition> naiveSearchJigDefinition(String code, String name, String workcell, String family, String userFor, int pageNumber,int page_size) {
        pageNumber = (pageNumber - 1) * page_size;
        return jigMapper.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber,page_size);
    }

    public int naiveSearchJigDefinitionPage(String code, String name, String workcell, String family, String userFor) {
        return jigMapper.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor);

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
        int a = jigMapper.getOutgoingJigPage();
        return (int) Math.ceil(a / 5.0);
    }

    public void naiveReturnJig(String id, String code, String seq_id, String rec_id) {
        jigMapper.naiveReturnJig(id, code, seq_id, rec_id);
        jigMapper.naiveDeleteOutgoingJig(id);
    }

    /*public void highAddShoplist(String submit_id, String bill_no, String production_line_id, String code, String count) {
        jigMapper.highAddShoplist(submit_id, bill_no, production_line_id, code, count);
    }*/

    public void highAddShoplist(PurchaseIncomeSubmit purchaseIncomeSubmit){
        jigMapper.highAddShoplist(purchaseIncomeSubmit);
    }

    public List<ProductionLine> getProductionLineList() {
        return jigMapper.getProductionLineList();
    }

    public List<String> getCodeList() {
        return jigMapper.getCodeList();
    }

    public List<PurchaseIncomeSubmit> highGetPurchaseIncomeSubmitList(int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return jigMapper.highGetPurchaseIncomeSubmitList(page_number,page_size);
    }

    public int highGetPurchaseIncomeSubmitListPage() {
        return jigMapper.highGetPurchaseIncomeSubmitListPage();
    }

    public void highUpdatePurchaseIncomeSubmit(String id, String code, String count, String production_line_id) {
        jigMapper.highUpdatePurchaseIncomeSubmit(id, code, count, production_line_id);
    }

    public List<PurchaseIncomeHistory> highSearchPurchaseIncomeHistory(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date, int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return jigMapper.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number,page_size);
    }

    public int highSearchPurchaseIncomeHistoryPage(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date) {
        return jigMapper.highSearchPurchaseIncomeHistoryPage(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
    }

    public List<PurchaseIncomeHistory> highSearchAllPurchaseIncomeHistory(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date) {
        return jigMapper.highSearchAllPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
    }

    public void highDeletePurchaseSubmit(String id) {
        jigMapper.highDeletePurchaseSubmit(id);
    }

    public List<RepairJig> highGetRepairJig(String id,int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return jigMapper.highGetRepairJig(id,page_number,page_size);
    }

    public int highGetRepairJigPage(String id) {
        return jigMapper.highGetRepairJigPage(id);
    }

    public List<RepairJigHistory> highSearchRepairHistory(String id,String code, String seq_id, String submit_name, String status, String start_date, String end_date, int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return jigMapper.highSearchRepairHistory(id,code, seq_id, submit_name, status, start_date, end_date, page_number,page_size);
    }

    public int highSearchRepairHistoryPage(String id,String code, String seq_id, String submit_name, String status, String start_date, String end_date) {
        return jigMapper.highSearchRepairHistoryPage(id,code, seq_id, submit_name, status, start_date, end_date);
    }

    public List<ScrapSubmit> highGetScrap(String submit_id, int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return jigMapper.highGetScrap(submit_id, page_number,page_size);
    }

    public int highGetScrapPage(String submit_id) {
        return jigMapper.highGetScrapPage(submit_id);
    }

    public List<ScrapHistory> highSearchScrapHistory(String code, String seq_id, String submit_id, String scrap_reason, String status, String start_date, String end_date, int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return jigMapper.highSearchScrapHistory(code, seq_id, submit_id, scrap_reason, status, start_date, end_date, page_number,page_size);
    }

    public int highSearchScrapHistoryPage(String code, String seq_id, String submit_id, String scrap_reason, String status, String start_date, String end_date) {
        int a = jigMapper.highSearchScrapHistoryPage(code, seq_id, submit_id, scrap_reason, status, start_date, end_date);
        return (int) Math.ceil(a / 5.0);
    }

    public List<ScrapHistory> highSearchAllScrapHistory(String code, String seq_id, String submit_name, String scrap_reason, String status, String start_date, String end_date) {
        return jigMapper.highSearchAllScrapHistory(code, seq_id, submit_name, scrap_reason, status, start_date, end_date);
    }

    public List<RepairJigHistory> highSearchAllRepairHistory(String id, String code, String seq_id, String submit_name, String status, String start_date, String end_date) {
        return jigMapper.highSearchAllRepairHistory(id, code, seq_id, submit_name, status, start_date, end_date);
    }

    public void highSubmitScrap(ScrapSubmit scrapSubmit,String pathName) {
        jigMapper.highSubmitScrap(scrapSubmit, pathName);
    }

    public boolean highDeleteScrap(String id) {
        return jigMapper.highDeleteScrap(id) > 0;
    }

    public List<String> codeGetSeqId(String code) {
        return jigMapper.codeGetSeqId(code);
    }

    public List<RepairJig> naiveGetRepairList(String submit_id, int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.naiveGetRepairList(submit_id, page_number);
    }

    public int naiveGetRepairListPage(String submit_id) {
        int a = jigMapper.naiveGetRepairListPage(submit_id);
        return (int) Math.ceil(a / 5.0);
    }

    public void naiveSubmitRepair(String code, String seq_id, String submit_id, String repair_reason, String pathName) {
        jigMapper.naiveSubmitRepair(code, seq_id, submit_id, repair_reason, pathName);
    }

    public List<RepairJigHistory> naiveGetRepairHistory(String submit_id, int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.naiveGetRepairHistory(submit_id, page_number);
    }

    public int naiveGetRepairHistoryPage(String submit_id) {
        int a = jigMapper.naiveGetRepairHistoryPage(submit_id);
        return (int) Math.ceil(a / 5.0);
    }

    public int highGetRepairCount(String submit_id) {
        return jigMapper.highGetRepairCount(submit_id);
    }

    public List<Map<String, Object>> highGetRepairBasic(String submit_id) {
        return jigMapper.highGetRepairBasic(submit_id);
    }

    public void highAgreeRepairSubmit(int id, String submit_id) {
        jigMapper.highAgreeRepairSubmit(id,submit_id);
    }

    public void highDisagreeRepairSubmit(int id, String submit_id, String reason) {
        jigMapper.highDisagreeRepairSubmit(id,submit_id,reason);
    }

    public List<String> codeGetInSeqId(String code) {
        return jigMapper.codeGetInSeqId(code);
    }
}
