package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
import com.jig.entity.PurchaseIncomeHistory;
import com.jig.entity.User;
import com.jig.service.JigService;
import com.jig.util.PoiUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

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

    @RequestMapping("show_login")
    public String login() {
        return "login";
    }

    @RequestMapping("test_naive")
    public String naive(HttpServletRequest request) {
        PoiUtil.getIpAddress(request);
        User user = new User();
        user.setName("Xianghai Zhang");
        user.setId("1215072");
        HttpSession httpSession = request.getSession();
        httpSession.setAttribute("user", user);
        return "naive";
    }

    @RequestMapping("test_high")
    public String high(HttpServletRequest request) {
        PoiUtil.getIpAddress(request);
        User user = new User();
        user.setName("Xianghai Zhang");
        user.setId("1215072");
        HttpSession httpSession = request.getSession();
        httpSession.setAttribute("user", user);
        return "high";
    }

    @RequestMapping("naive_download_one_search")
    public void naiveDownloadOneSearch(HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = jigService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber);
        if (list.size() == 0) {
            return;
        }
        outputFile(response, fileName, list);
    }

    @RequestMapping("naive_download_all_search")
    public void naiveDownloadAllSearch(HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = jigService.searchAllJigDefinition(code, name, workcell, family, userFor);
        outputFile(response, fileName, list);
    }

    @RequestMapping("high_download_one_purchase_history")
    public void highDownloadOnePurchaseHistory(HttpServletResponse response, @RequestParam(value = "bill_no") String bill_no, @RequestParam(value = "submit_name") String submit_name,
                                               @RequestParam(value = "code") String code, @RequestParam(value = "production_line_id") String production_line_id,
                                               @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                               @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<PurchaseIncomeHistory> list = jigService.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number);
        outputFile(response, file_name, list);
    }

    @RequestMapping("high_download_all_purchase_history")
    public void highDownloadAllPurchaseHistory(HttpServletResponse response, @RequestParam(value = "bill_no") String bill_no, @RequestParam(value = "submit_name") String submit_name,
                                               @RequestParam(value = "code") String code, @RequestParam(value = "production_line_id") String production_line_id,
                                               @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                               @RequestParam(value = "end_date") String end_date, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<PurchaseIncomeHistory> list = jigService.highSearchAllPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date);
        outputFile(response, file_name, list);
    }


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

    @RequestMapping(value = "high_submit_repair", method = RequestMethod.POST)
    public @ResponseBody String high_submit_repair(HttpServletRequest request, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id) throws IOException, ServletException {

        return "success";
    }
}
