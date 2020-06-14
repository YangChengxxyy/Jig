package com.jig.service;

import com.jig.mapper.ReportMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.Map;

@Service
public class ReportService {
    @Autowired
    private ReportMapper reportMapper;

    public List<Map<String, Object>> getYearByCode(String code) {
        return reportMapper.getYearByCode(code);
    }

    public List<Map<String, String>> getMonthByCode(String code) {
        return reportMapper.getMonthByCode(code);
    }

    public List<Map<Object, Object>> getAllYearAllCount() {
        return reportMapper.getAllYearAllCount();
    }

    public List<Map<Object, Object>> getYearByCodeYear(String code, String year) {
        return reportMapper.getYearByCodeYear(code,year);
    }

    public List<Map<Object, Object>> getEveryProductionCount() {
        return reportMapper.getEveryProductionCount();
    }

    public List<Map<Object, Object>> getEveryYearProductionLine() {
        return reportMapper.getEveryYearProductionLine();
    }
}
