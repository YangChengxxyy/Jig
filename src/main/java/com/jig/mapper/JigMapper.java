package com.jig.mapper;

import com.jig.entity.JigDefinition;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface JigMapper {
    List<JigDefinition> searchJigDefinition(String code, String name, String workcell, String family, String user_for,int page_number);

    int searchJigDefinitionPage(String code, String name, String workcell, String family, String user_for);

    JigDefinition getSimpleJigDefinition(String id);
}
