package com.jig.controller;

import com.jig.entity.*;
import com.jig.service.JigService;
import com.jig.utils.PoiUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

@Controller
public class JigWeb {
    @Autowired
    private JigService jigService;


    private void outputFile(HttpServletResponse response, String fileName, List<?> list) throws Exception {
        if (list.size() == 0) {
            return;
        }
        HSSFWorkbook excel = PoiUtil.getExcel(list);
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream;charset=utf-8");
        response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
        OutputStream os = null;
        try {
            os = response.getOutputStream();
            excel.write(os);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @RequestMapping(value = "show_demo", method = {RequestMethod.POST, RequestMethod.GET})
    public String showDemo(Model model) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        a.add(people);
        model.addAttribute("peoples", a);
        return "demo";
    }

    @RequestMapping("show_login")
    public String login() {
        return "login";
    }

    @RequestMapping("test_naive")
    public String naive(HttpServletRequest request) {
        return "naive";
    }

    @RequestMapping("test_high")
    public String high(HttpServletRequest request) {
        return "high";
    }

    @RequestMapping("naive/download_one_search")
    public void naiveDownloadOneSearch(HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = jigService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber);
        if (list.size() == 0) {
            return;
        }
        outputFile(response, fileName, list);
    }

    @RequestMapping("naive/download_all_search")
    public void naiveDownloadAllSearch(HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = jigService.searchAllJigDefinition(code, name, workcell, family, userFor);
        outputFile(response, fileName, list);
    }

    @RequestMapping("high/download_one_purchase_history")
    public void highDownloadOnePurchaseHistory(HttpServletResponse response, @RequestParam(value = "bill_no") String bill_no, @RequestParam(value = "submit_name") String submit_name,
                                               @RequestParam(value = "code") String code, @RequestParam(value = "production_line_id") String production_line_id,
                                               @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                               @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<PurchaseIncomeHistory> list = jigService.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number);
        outputFile(response, file_name, list);
    }

    @RequestMapping("high/download_all_purchase_history")
    public void highDownloadAllPurchaseHistory(HttpServletResponse response, @RequestParam(value = "bill_no") String bill_no, @RequestParam(value = "submit_name") String submit_name,
                                               @RequestParam(value = "code") String code, @RequestParam(value = "production_line_id") String production_line_id,
                                               @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                               @RequestParam(value = "end_date") String end_date, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<PurchaseIncomeHistory> list = jigService.highSearchAllPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
        outputFile(response, file_name, list);
    }


    @RequestMapping("high/download_one_repair_history")
    public void highDownloadOneRepairHistory(HttpServletResponse response,@RequestParam("id")String id, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_name") String submit_name, @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date, @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<RepairJig> list = jigService.highSearchRepairHistory(id,code, seq_id, submit_name, status, start_date, end_date, page_number);
        outputFile(response, file_name, list);
    }

    @RequestMapping("high/download_all_repair_history")
    public void highDownloadAllRepairHistory(HttpServletResponse response,@RequestParam("id")String id, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_name") String submit_name, @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date, @RequestParam(value = "end_date") String end_date, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<RepairJig> list = jigService.highSearchAllRepairHistory(id, code, seq_id, submit_name, status, start_date, end_date);
        outputFile(response, file_name, list);
    }

    @RequestMapping("high/download_one_scrap_history")
    public void highDownloadOneScrapHistory(HttpServletResponse response, @RequestParam(value = "code") String code,
                                            @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id,
                                            @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                            @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number,
                                            @RequestParam(value = "scrap_reason") String scrap_reason,
                                            @RequestParam(value = "file_name") String file_name) throws Exception {
        List<ScrapHistory> list = jigService.highSearchScrapHistory(code, seq_id, submit_id, scrap_reason, status, start_date, end_date, page_number);
        outputFile(response, file_name, list);
    }

    @RequestMapping("high/download_all_scrap_history")
    public void highDownloadAllScrapHistory(HttpServletResponse response, @RequestParam(value = "code") String code,
                                            @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id,
                                            @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                            @RequestParam(value = "scrap_reason") String scrap_reason,
                                            @RequestParam(value = "end_date") String end_date, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<ScrapHistory> list = jigService.highSearchAllScrapHistory(code, seq_id, submit_id, scrap_reason, status, start_date, end_date);
        outputFile(response, file_name, list);
    }

    @RequestMapping("show_phone_upload_file")
    public String showPhoneUploadFile(@RequestParam(value = "token") String token, Model model) {
        model.addAttribute("token", token);
        JigJson.phoneUploadMap.get(token).setScan(true);
        return "phone_upload_file";
    }

    @RequestMapping("phone_upload_success")
    public String phoneUploadSuccess() {
        return "phone_upload_success";
    }
}
