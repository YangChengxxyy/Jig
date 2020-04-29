package com.jig.controller;

import com.jig.entity.*;
import com.jig.service.AdminService;
import com.jig.utils.PoiUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("admin")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class AdminJson {
    @Autowired
    private AdminService adminService;
    @Autowired
    private PoiUtil poiUtil;

    @RequestMapping("search_user_information")
    public Map<String, Object> searchUserInformation(@RequestParam("submit_id") String submit_id, @RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size,
                                                     @RequestParam("id") String id, @RequestParam("name") String name, @RequestParam("workcell_id") String workcell_id,
                                                     @RequestParam("start_date") String start_date, @RequestParam("end_date") String end_date) {
        Map<String, Object> map = new HashMap<>(2);
        map.put("data", adminService.searchUserInformation(submit_id, page_number, page_size, id, name, workcell_id, start_date, end_date));
        int all = adminService.searchUserInformationPage(submit_id, id, name, workcell_id, start_date, end_date);
        map.put("max", (int) Math.ceil(all / (double) page_size));
        map.put("all", all);
        return map;
    }

    @RequestMapping("get_workcell_list")
    public List<Workcell> getWorkcellList() {
        return adminService.getWorkcellList();
    }

    @RequestMapping("change_user")
    public boolean changeUser(@ModelAttribute User user) {
        return adminService.changeUser(user) >= 1;
    }

    @RequestMapping("del_user")
    public boolean delUser(@RequestParam("id") String id) {
        return adminService.delUser(id) >= 1;
    }

    @RequestMapping("download_one_user_info")
    public void downloadOneUserInfo(HttpServletResponse response, @RequestParam("submit_id") String submit_id, @RequestParam("page_number") int page_number,
                                    @RequestParam("page_size") int page_size,
                                    @RequestParam("id") String id, @RequestParam("name") String name, @RequestParam("workcell_id") String workcell_id,
                                    @RequestParam("start_date") String start_date, @RequestParam("end_date") String end_date, @RequestParam("file_name") String file_name) throws Exception {
        List<User> userList = adminService.searchUserInformation(submit_id, page_number, page_size, id, name, workcell_id, start_date, end_date);
        poiUtil.outputFile(response, file_name, userList);
    }

    @RequestMapping("download_all_user_info")
    public void downloadAllUserInfo(HttpServletResponse response, @RequestParam("submit_id") String submit_id,
                                    @RequestParam("id") String id, @RequestParam("name") String name, @RequestParam("workcell_id") String workcell_id,
                                    @RequestParam("start_date") String start_date, @RequestParam("end_date") String end_date, @RequestParam("file_name") String file_name) throws Exception {
        List<User> usersList = adminService.searchAllUserInformation(submit_id, id, name, workcell_id, start_date, end_date);
        poiUtil.outputFile(response, file_name, usersList);
    }

    @RequestMapping("get_part")
    public List<JigPart> getPart() {
        return adminService.getPart();
    }

    @RequestMapping("get_model")
    public List<JigModel> getModel() {
        return adminService.getModel();
    }

    @RequestMapping("get_cn_en")
    public List<CnEn> getCnEn() {
        return adminService.getCnEn();
    }
}
