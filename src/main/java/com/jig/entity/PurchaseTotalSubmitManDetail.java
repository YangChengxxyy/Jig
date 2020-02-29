package com.jig.entity;

import java.util.ArrayList;
import java.util.List;

public class PurchaseTotalSubmitManDetail {
    private String submit_id;
    private String submit_name;
    private int submit_count;
    List<PurchaseIncomeSubmit> about_purchase_submit_list = new ArrayList<>();

    public String getSubmit_id() {
        return submit_id;
    }

    public void setSubmit_id(String submit_id) {
        this.submit_id = submit_id;
    }

    public int getSubmit_count() {
        return submit_count;
    }

    public void setSubmit_count(int submit_count) {
        this.submit_count = submit_count;
    }

    public String getSubmit_name() {
        return submit_name;
    }

    public void setSubmit_name(String submit_name) {
        this.submit_name = submit_name;
    }

    public int getCount() {
        return submit_count;
    }

    public void setCount(int count) {
        this.submit_count = count;
    }

    public List<PurchaseIncomeSubmit> getAbout_purchase_submit_list() {
        return about_purchase_submit_list;
    }

    public void setAbout_purchase_submit_list(List<PurchaseIncomeSubmit> about_purchase_submit_list) {
        this.about_purchase_submit_list = about_purchase_submit_list;
    }
}
