package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.HighMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class HighService {
    @Autowired
    private HighMapper highMapper;
    //high添加采购入库申请
    public void highAddShoplist(PurchaseIncomeSubmit purchaseIncomeSubmit) {
        highMapper.highAddShoplist(purchaseIncomeSubmit);
    }

    // high获取采购入库申请列表
    public List<PurchaseIncomeSubmit> highGetPurchaseIncomeSubmitList(int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return highMapper.highGetPurchaseIncomeSubmitList(page_number, page_size);
    }

    // high获取采购入库申请列表页数
    public int highGetPurchaseIncomeSubmitListPage() {
        return highMapper.highGetPurchaseIncomeSubmitListPage();
    }

    //high修改采购入库申请单
    public void highUpdatePurchaseIncomeSubmit(String id, String code, String count, String production_line_id) {
        highMapper.highUpdatePurchaseIncomeSubmit(id, code, count, production_line_id);
    }

    //high获取查询到的入库申请历史
    public List<PurchaseIncomeHistory> highSearchPurchaseIncomeHistory(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return highMapper.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number, page_size);
    }

    //high获取查询到的入库申请历史页数
    public int highSearchPurchaseIncomeHistoryPage(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date) {
        return highMapper.highSearchPurchaseIncomeHistoryPage(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
    }


    public List<PurchaseIncomeHistory> highSearchAllPurchaseIncomeHistory(String bill_no, String submit_name, String code, String production_line_id, String status, String start_date, String end_date) {
        return highMapper.highSearchAllPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
    }

    //high删除出库申请
    public void highDeletePurchaseSubmit(String id) {
        highMapper.highDeletePurchaseSubmit(id);
    }

    //high获取报修申请记录
    public List<RepairJig> highGetRepairJig(String id, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return highMapper.highGetRepairJig(id, page_number, page_size);
    }

    //high获取报修申请记录页数
    public int highGetRepairJigPage(String id) {
        return highMapper.highGetRepairJigPage(id);
    }

    //high搜索历史报修记录
    public List<RepairJigHistory> highSearchRepairHistory(String id, String code, String seq_id, String submit_name, String status, String start_date, String end_date, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return highMapper.highSearchRepairHistory(id, code, seq_id, submit_name, status, start_date, end_date, page_number, page_size);
    }

    //high搜索历史报修记录页数
    public int highSearchRepairHistoryPage(String id, String code, String seq_id, String submit_name, String status, String start_date, String end_date) {
        return highMapper.highSearchRepairHistoryPage(id, code, seq_id, submit_name, status, start_date, end_date);
    }

    //high获取报废申请
    public List<ScrapSubmit> highGetScrap(String submit_id, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return highMapper.highGetScrap(submit_id, page_number, page_size);
    }

    //high获取报废申请页数
    public int highGetScrapPage(String submit_id) {
        return highMapper.highGetScrapPage(submit_id);
    }

    //high搜索报废历史
    public List<ScrapHistory> highSearchScrapHistory(String code, String seq_id, String submit_id, String scrap_reason, String status, String start_date, String end_date, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return highMapper.highSearchScrapHistory(code, seq_id, submit_id, scrap_reason, status, start_date, end_date, page_number, page_size);
    }

    //high搜索报废历史页数
    public int highSearchScrapHistoryPage(String code, String seq_id, String submit_id, String scrap_reason, String status, String start_date, String end_date) {
        int a = highMapper.highSearchScrapHistoryPage(code, seq_id, submit_id, scrap_reason, status, start_date, end_date);
        return (int) Math.ceil(a / 5.0);
    }

    public List<ScrapHistory> highSearchAllScrapHistory(String code, String seq_id, String submit_name, String scrap_reason, String status, String start_date, String end_date) {
        return highMapper.highSearchAllScrapHistory(code, seq_id, submit_name, scrap_reason, status, start_date, end_date);
    }

    public List<RepairJigHistory> highSearchAllRepairHistory(String id, String code, String seq_id, String submit_name, String status, String start_date, String end_date) {
        return highMapper.highSearchAllRepairHistory(id, code, seq_id, submit_name, status, start_date, end_date);
    }

    //high提交报废
    public void highSubmitScrap(ScrapSubmit scrapSubmit, String pathName) {
        highMapper.highSubmitScrap(scrapSubmit, pathName);
    }

    //high删除报废
    public boolean highDeleteScrap(String id) {
        return highMapper.highDeleteScrap(id) > 0;
    }

    //high获取报修总数
    public int highGetRepairCount(String submit_id) {
        return highMapper.highGetRepairCount(submit_id);
    }

    //high报修概况
    public List<Map<String, Object>> highGetRepairBasic(String submit_id) {
        return highMapper.highGetRepairBasic(submit_id);
    }

    //high 同意或者不同意 报修申请
    public void highAgreeRepairSubmit(int id, String submit_id) {
        highMapper.highAgreeRepairSubmit(id, submit_id);
    }

    public void highDisagreeRepairSubmit(int id, String submit_id, String reason) {
        highMapper.highDisagreeRepairSubmit(id, submit_id, reason);
    }
}
