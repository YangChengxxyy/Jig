package com.jig.service;

import com.jig.entity.JigDefinition;
import com.jig.mapper.JigMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JigService {
    @Autowired
    private JigMapper jigMapper;

    public List<JigDefinition> searchJigDefinition(String code, String name, String workcell, String family, String user_for, int page_number) {
        return jigMapper.searchJigDefinition(code, name, workcell, family, user_for, page_number);
    }

    public int searchJigDefinitionPage(String code, String name, String workcell, String family, String user_for) {
        int a = jigMapper.searchJigDefinitionPage(code, name, workcell, family, user_for);
        return (int) Math.ceil(a / 5.0);
    }

    public JigDefinition getSimpleJigDefinition(String id) {
        return jigMapper.getSimpleJigDefinition(id);
    }
}
