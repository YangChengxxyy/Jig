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

    /**
     * 历年{code}工夹具的使用次数
     *
     * @param code
     * @return
     */
    @RequestMapping("/get_year_by_code")
    public List<Map<String, Object>> getYearByCode(@RequestParam("code") String code) {
        return reportService.getYearByCode(code);
    }

    @RequestMapping("/get_month_by_code")
    public List<Map<String, String>> getMonthByCode(@RequestParam("code") String code) {
        return reportService.getMonthByCode(code);
    }

    /**
     * 历年工夹具使用次数
     *
     * @return
     */
    @RequestMapping("/get_all_year_all_count")
    public List<Map<Object, Object>> getAllYearAllCount() {
        return reportService.getAllYearAllCount();
    }

    /**
     * {year}年夹具{code}在各个产线的使用情况
     *
     * @param code
     * @param year
     * @return
     */
    @RequestMapping("/get_year_by_code_year")
    public List<Map<Object, Object>> getYearByCodeYear(@RequestParam("code") String code, @RequestParam("year") String year) {
        return reportService.getYearByCodeYear(code, year);
    }

    /**
     * 总体寿命分布图
     *
     * @return
     */
    @RequestMapping("/get_life_total")
    public List<Map<Object, Object>> getLifeTotal() {
        //TODO:总体寿命分布图
        return null;
    }
    /**
     * 今年工夹具各个产线的使用占比
     */
    @RequestMapping("/get_every_production_count")
    public List<Map<Object, Object>> getEveryProductionCount(){
        return reportService.getEveryProductionCount();
    }

    /**
     * 历年各条产线的使用次数
     * @return
     */
    @RequestMapping("get_every_year_production_line")
    public List<Map<Object,Object>> getEveryYearProductionLine(){
        return reportService.getEveryYearProductionLine();
    }
}
