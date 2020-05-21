package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.JigMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author yc
 */
@Service
public class JigService {
    @Autowired
    private JigMapper jigMapper;

    public List<JigDefinition> naiveSearchJigDefinition(String code, String name, String workcell, String family, String userFor, int pageNumber, int page_size) {
        pageNumber = (pageNumber - 1) * page_size;
        return jigMapper.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber, page_size);
    }

    public int naiveSearchJigDefinitionPage(String code, String name, String workcell, String family, String userFor) {
        return jigMapper.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor);

    }



    public List<JigDefinition> searchAllJigDefinition(String code, String name, String workcell, String family, String userFor) {
        return jigMapper.searchAllJigDefinition(code, name, workcell, family, userFor);
    }

    public List<OutgoSubmit> naiveGetOutgoingSubmit(int page_number) {
        page_number = (page_number - 1) * 5;
        return jigMapper.naiveGetOutgoingSubmit(page_number);
    }

    public int naiveGetOutgoingSubmitPage() {
        int a = jigMapper.naiveGetOutgoSubmitPage();
        return (int) Math.ceil(a / 5.0);
    }









    /*public void highAddShoplist(String submit_id, String bill_no, String production_line_id, String code, String count) {
        jigMapper.highAddShoplist(submit_id, bill_no, production_line_id, code, count);
    }*/



















}
