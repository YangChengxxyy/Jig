package com.jig.controller;

import com.jig.entity.User;
import com.jig.entity.Workcell;
import com.jig.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("admin")
public class AdminJson {
    @Autowired
    private AdminService adminService;

    @RequestMapping("get_user_information")
    public Map<String, Object> getUserInformation(@RequestParam("id") String id, @RequestParam("page_number") int page_number) {
        Map<String, Object> map = new HashMap<>(2);
        map.put("data", adminService.getUserInformation(id, page_number));
        map.put("max", adminService.getUserInformationPage(id));
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
}
