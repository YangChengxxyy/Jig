package com.jig.controller;

import com.jig.annotation.Permission;
import com.jig.entity.common.Role;
import com.jig.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Permission({Role.common})
@RequestMapping("/api/report")
@RestController
public class ReportJson {
    @Autowired
    private ReportService reportService;

    @RequestMapping("/get_year_by_code")
    public List<Map<String, Object>> getYearByCode(@RequestParam("code") String code) {
        return reportService.getYearByCode(code);
    }
    @RequestMapping("/get_month_by_code")
    public List<Map<String, String>> getMonthByCode(@RequestParam("code")String code){
        return reportService.getMonthByCode(code);
    }
}
