package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
import com.jig.service.JigService;
import com.jig.util.POIUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.hibernate.validator.internal.util.StringHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
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

    @RequestMapping("test")
    public String showSu() {
        return "naive";
    }

    @RequestMapping("demo_download_excel")
    public void downExcel(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String user_for, @RequestParam(value = "page_number") int page_number, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<JigDefinition> list = jigService.searchJigDefinition(code, name, workcell, family, user_for, page_number);
        HSSFWorkbook excel = POIUtils.getExcel(list.get(0), list);
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream;charset=utf-8");
        response.setHeader("Content-Disposition", "attachment; filename=" + file_name);
        OutputStream os = null;
        try {
            os = response.getOutputStream();
            excel.write(os);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
