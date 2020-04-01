package com.jig.entity;

import java.util.Arrays;

public class OperateUpdateInfo {
    private String id;
    private String update_code;//多个用 | 分开
    private String update_count;//多个用 | 分开
    private String update_first_time;//初审时间
    private String update_first_acceptor;//初审人id
    private String update_first_reason;//初审不通过的原因
    private String update_final_time;//终审时间
    private String update_final_acceptor;//终审人id
    private String update_final_reason;//终审不通过的原因
    private String update_status;//审核状态 :0待审核 1初审未通过 2初审通过 3终审未通过 4终审通过
    private String update_production_line_id;//产线id
    private String update_bill_no;//单据号
    private String update_tool_photo_url;//工夹具照片路径

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUpdate_code() {
        return update_code;
    }

    public void setUpdate_code(String update_code) {
        this.update_code = update_code;
    }

    public String getUpdate_count() {
        return update_count;
    }

    public void setUpdate_count(String update_count) {
        this.update_count = update_count;
    }

    public String getUpdate_first_time() {
        return update_first_time;
    }

    public void setUpdate_first_time(String update_first_time) {
        this.update_first_time = update_first_time;
    }

    public String getUpdate_first_acceptor() {
        return update_first_acceptor;
    }

    public void setUpdate_first_acceptor(String update_first_acceptor) {
        this.update_first_acceptor = update_first_acceptor;
    }

    public String getUpdate_first_reason() {
        return update_first_reason;
    }

    public void setUpdate_first_reason(String update_first_reason) {
        this.update_first_reason = update_first_reason;
    }

    public String getUpdate_final_time() {
        return update_final_time;
    }

    public void setUpdate_final_time(String update_final_time) {
        this.update_final_time = update_final_time;
    }

    public String getUpdate_final_acceptor() {
        return update_final_acceptor;
    }

    public void setUpdate_final_acceptor(String update_final_acceptor) {
        this.update_final_acceptor = update_final_acceptor;
    }

    public String getUpdate_final_reason() {
        return update_final_reason;
    }

    public void setUpdate_final_reason(String update_final_reason) {
        this.update_final_reason = update_final_reason;
    }

    public String getUpdate_status() {
        return update_status;
    }

    public void setUpdate_status(String update_status) {
        this.update_status = update_status;
    }

    public String getUpdate_production_line_id() {
        return update_production_line_id;
    }

    public void setUpdate_production_line_id(String update_production_line_id) {
        this.update_production_line_id = update_production_line_id;
    }

    public String getUpdate_bill_no() {
        return update_bill_no;
    }

    public void setUpdate_bill_no(String update_bill_no) {
        this.update_bill_no = update_bill_no;
    }

    public String getUpdate_tool_photo_url() {
        return update_tool_photo_url;
    }

    public void setUpdate_tool_photo_url(String update_tool_photo_url) {
        this.update_tool_photo_url = update_tool_photo_url;
    }

    @Override
    public String toString() {
        return "OperateUpdateInfo{" +
                "update_code='" + update_code + '\'' +
                ", update_count='" + update_count + '\'' +
                ", update_first_time='" + update_first_time + '\'' +
                ", update_first_acceptor='" + update_first_acceptor + '\'' +
                ", update_first_reason='" + update_first_reason + '\'' +
                ", update_final_time='" + update_final_time + '\'' +
                ", update_final_acceptor='" + update_final_acceptor + '\'' +
                ", update_final_reason='" + update_final_reason + '\'' +
                ", update_status='" + update_status + '\'' +
                ", update_production_line_id='" + update_production_line_id + '\'' +
                ", update_bill_no='" + update_bill_no + '\'' +
                ", update_tool_photo_url='" + update_tool_photo_url + '\'' +
                '}';
    }
}
