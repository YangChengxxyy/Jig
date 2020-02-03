package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.JigMapper;
import com.jig.util.StringUtil;
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

    public List<OutgoSubmit> getOutgoingSubmit() {
        return jigMapper.getOutgoSubmit();
    }

    public Position getPosition(String code, String seq_id) {
        return jigMapper.getPosition(code, seq_id);
    }

    public void outgoJig(String id, String code, String seq_id, String rec_id) {
        jigMapper.outgoJig(id, code, seq_id, rec_id);
        jigMapper.deleteOutgoSubmit(id);
    }

    public List<OutgoingJig> getOutgoingJig() {
        return jigMapper.getOutgoingJig();
    }

    public void returnJig(String id, String code, String seq_id, String rec_id) {
        jigMapper.returnJig(id, code, seq_id, rec_id);
        jigMapper.deleteOutgoingJig(id);
    }

    public void addShoplist(String submit_id, String bill_no, String production_line_id, String[] codes, Integer[] counts) {
        String code = StringUtil.combination(codes, "|");
        String count = StringUtil.combination(counts, "|");
        jigMapper.addShoplist(submit_id, bill_no, production_line_id, code, count);
    }

    public List<ProductionLine> getProductionLineList() {
        return jigMapper.getProductionLineList();
    }

    public List<String> getCodeList() {
        return jigMapper.getCodeList();
    }

    public List<PurchaseIncomeSubmit> getPurchaseIncomeSubmitList() {
        return jigMapper.getPurchaseIncomeSubmitList();
    }
}
