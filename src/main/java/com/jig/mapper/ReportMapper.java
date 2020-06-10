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
}
