package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
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
        System.out.println(PoiUtil.getIpAddress(request));
        return "naive";
    }

    /**
     * @param request     request
     * @param response    response
     * @param code        工夹具代码
     * @param name        工夹具名字
     * @param workcell    工作部门
     * @param family      类别
     * @param user_for    用途
     * @param page_number 页码
     * @param file_name   文件名
     * @throws Exception Exception
     */
    @RequestMapping("naive_download_search_one_excel")
    public void naiveDownloadSearchOneExcel(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String user_for, @RequestParam(value = "page_number") int page_number, @RequestParam(value = "file_name") String file_name) throws Exception {
        List<JigDefinition> list = jigService.searchJigDefinition(code, name, workcell, family, user_for, page_number);
        HSSFWorkbook excel = PoiUtil.getExcel( list);
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
    @RequestMapping("naive_download_search_all_excel")
    public void naiveDownloadSearchAllExcel(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String user_for, @RequestParam(value = "file_name") String file_name) throws Exception{
        List<JigDefinition> list = jigService.searchAllJigDefinition(code, name, workcell, family, user_for);
        HSSFWorkbook excel = PoiUtil.getExcel(list);
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
