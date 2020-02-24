package com.jig.entity;

import java.util.ArrayList;
import java.util.List;

public class PurchaseTotalJigDetail {
    private String code;
    private int count;
    private List<PurchaseIncomeSubmit> about_purchase_submit_list = new ArrayList<>();//相关订单

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<PurchaseIncomeSubmit> getAbout_purchase_submit_list() {
        return about_purchase_submit_list;
    }

    public void setAbout_purchase_submit_list(List<PurchaseIncomeSubmit> about_purchase_submit_list) {
        this.about_purchase_submit_list = about_purchase_submit_list;
    }

    public String toString() {
        return "code:" + code + ",count:" + count + "\n";
    }

    public String about_submit_toString() {
        String str = "";
        for (PurchaseIncomeSubmit p : about_purchase_submit_list) {
            str += p.getBill_no() + ",";
        }
        return str;
    }
}
