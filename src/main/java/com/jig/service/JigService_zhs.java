package com.jig.service;

import com.jig.mapper.JigMapper_zhs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JigService_zhs {
    @Autowired
    JigMapper_zhs jigMapper;

    public int addShoplist(String submit_id, String bill_no, String production_line_id, String code, String number, String submit_time) {
        return jigMapper.addShoplist(submit_id, bill_no, production_line_id, code, number, submit_time);
    }
}
