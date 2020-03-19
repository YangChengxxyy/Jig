package com.jig.controller;

import com.jig.entity.*;
import com.jig.service.JigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

import static com.jig.utils.PoiUtils.outputFile;

@Controller
public class JigWeb {
    @Autowired
    private JigService jigService;

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

    @RequestMapping("/")
    public String main(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        LoginState loginState = (LoginState) session.getAttribute("loginState");
        model.addAttribute("loginState", loginState);
        return loginState.getData().getType();
    }

    @RequestMapping("login")
    public String login() {
        return "login";
    }


    @RequestMapping("log_out")
    public String logOut(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.removeAttribute("loginState");
        return "redirect:login";
    }

    @RequestMapping("naive/download_one_search")
    public void naiveDownloadOneSearch(HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber, @RequestParam("page_size") int page_size, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = jigService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber, page_size);
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
                                               @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number,
                                               @RequestParam(value = "file_name") String file_name, @RequestParam("page_size") int page_size) throws Exception {
        List<PurchaseIncomeHistory> list = jigService.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number, page_size);
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
    public void highDownloadOneRepairHistory(HttpServletResponse response, @RequestParam("id") String id, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_name") String submit_name, @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date, @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number, @RequestParam(value = "file_name") String file_name,@RequestParam("page_size")int page_size) throws Exception {
        List<RepairJigHistory> list = jigService.highSearchRepairHistory(id, code, seq_id, submit_name, status, start_date, end_date, page_number,page_size);
        outputFile(response, file_name, list);
    }

    @RequestMapping("high/download_all_repair_history")
    public void highDownloadAllRepairHistory(HttpServletResponse response, @RequestParam("id") String id, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_name") String submit_name, @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date, @RequestParam(value = "end_date") String end_date, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<RepairJigHistory> list = jigService.highSearchAllRepairHistory(id, code, seq_id, submit_name, status, start_date, end_date);
        outputFile(response, file_name, list);
    }

    @RequestMapping("high/download_one_scrap_history")
    public void highDownloadOneScrapHistory(HttpServletResponse response, @RequestParam(value = "code") String code,
                                            @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id,
                                            @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                            @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number,
                                            @RequestParam("page_size") int page_size, @RequestParam(value = "scrap_reason") String scrap_reason,
                                            @RequestParam(value = "file_name") String file_name) throws Exception {
        List<ScrapHistory> list = jigService.highSearchScrapHistory(code, seq_id, submit_id, scrap_reason, status, start_date, end_date, page_number, page_size);
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
