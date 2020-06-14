package com.jig.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface ReportMapper {
    List<Map<String, Object>> getYearByCode(@Param("code") String code);

    List<Map<String, String>> getMonthByCode(@Param("code") String code);

    List<Map<Object, Object>> getAllYearAllCount();

    List<Map<Object, Object>> getYearByCodeYear(@Param("code") String code, @Param("year") String year);

    List<Map<Object, Object>> getEveryProductionCount();

    List<Map<Object, Object>> getEveryYearProductionLine();
}
