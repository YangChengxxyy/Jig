package com.jig.service;

import com.jig.mapper.ReportMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return reportMapper.getYearByCodeYear(code, year);
    }

    public List<Map<Object, Object>> getEveryProductionCount() {
        return reportMapper.getEveryProductionCount();
    }

    public List<Map<Object, Object>> getEveryYearProductionLine() {
        return reportMapper.getEveryYearProductionLine();
    }

    public List<Map<Object, Object>> getLifeTotal() {
        return reportMapper.getLifeTotal();
    }

    public List<Map<Object, Object>> getRepairReason() {
        return reportMapper.getRepairReason();
    }

    public List<Map<Object, Object>> getRepairManufacturer() {
        return reportMapper.getRepairManufacturer();
    }

    public List<Map<Object, Object>> getManufacturerCount() {
        return reportMapper.getManufacturerCount();
    }

    public List<Map<Object, Object>> getManufacturerInformation(int id) {
        return reportMapper.getManufacturerInformation(id);
    }

    public List<Map<Object, Object>> getManufacturerHistoryCount(int id) {
        return reportMapper.getManufacturerHistoryCount(id);
    }
}
