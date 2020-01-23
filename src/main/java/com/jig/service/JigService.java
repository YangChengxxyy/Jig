package com.jig.service;

import com.jig.entity.JigDefinition;
import com.jig.mapper.JigMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author yc
 */
@Service
public class JigService {
    @Autowired
    private JigMapper jigMapper;

    public List<JigDefinition> searchJigDefinition(String code, String name, String workcell, String family, String userFor, int pageNumber) {
        return jigMapper.searchJigDefinition(code, name, workcell, family, userFor, pageNumber);
    }

    public int searchJigDefinitionPage(String code, String name, String workcell, String family, String userFor) {
        int a = jigMapper.searchJigDefinitionPage(code, name, workcell, family, userFor);
        return (int) Math.ceil(a / 5.0);
    }

    public JigDefinition getSimpleJigDefinition(String id) {
        return jigMapper.getSimpleJigDefinition(id);
    }

    public List<JigDefinition> searchAllJigDefinition(String code, String name, String workcell, String family, String userFor) {
        return jigMapper.searchAllJigDefinition(code, name, workcell, family, userFor);
    }
}
