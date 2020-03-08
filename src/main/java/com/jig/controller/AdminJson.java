package com.jig.controller;

import com.jig.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("admin")
public class AdminJson {
    @Autowired
    private AdminService adminService;

    @RequestMapping("get_user_information")
    public Map<String,Object> getUserInformation(@RequestParam("id") String id, @RequestParam("page_number") int page_number) {
        Map<String,Object> map = new HashMap<>(2);
        map.put("data",adminService.getUserInformation(id, page_number));
        map.put("max",adminService.getUserInformationPage(id));
        return map;
    }
}
