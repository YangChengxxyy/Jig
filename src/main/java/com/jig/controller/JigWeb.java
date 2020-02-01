package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
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
    public String showSu(HttpServletRequest request) {
        PoiUtil.getIpAddress(request);
        User user = new User();
        user.setName("Xianghai Zhang");
        user.setId("1215072");
        HttpSession httpSession = request.getSession();
        httpSession.setAttribute("user",user);
        return "naive";
    }

    @RequestMapping("naive_download_search_one_excel")
    public void naiveDownloadSearchOneExcel(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = jigService.searchJigDefinition(code, name, workcell, family, userFor, pageNumber);
        outputFile(response, fileName, list);
    }

    @RequestMapping("naive_download_search_all_excel")
    public void naiveDownloadSearchAllExcel(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "file_name") String fileName) throws Exception {
        List<JigDefinition> list = jigService.searchAllJigDefinition(code, name, workcell, family, userFor);
        outputFile(response, fileName, list);
    }

    private void outputFile(HttpServletResponse response, String fileName, List<JigDefinition> list) throws Exception {
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
}
