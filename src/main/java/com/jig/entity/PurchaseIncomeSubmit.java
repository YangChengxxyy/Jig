package com.jig.entity;

public class PurchaseIncomeSubmit {
    private String id;
    private String submit_id;
    private String code;//多个用 | 分开
    private String count;//多个用 | 分开
    private String first_time;//初审时间
    private String first_result;//初审结果
    private String first_acceptor;//初审人
    private String final_time;//终审时间
    private String final_result;//终审结果
    private String final_acceptor;//终审人
    private String status;//审核状态 ,0初审未通过 ,1初审通过,2 终审未通过, 3终审通过
    private int production_line_id;//产线id
    private String bill_no;//单据号
    private String tool_photo_url;//工夹具照片路径

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSubmit_id() {
        return submit_id;
    }

    public void setSubmit_id(String submit_id) {
        this.submit_id = submit_id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }

    public String getFirst_time() {
        return first_time;
    }

    public void setFirst_time(String first_time) {
        this.first_time = first_time;
    }

    public String getFirst_result() {
        return first_result;
    }

    public void setFirst_result(String first_result) {
        this.first_result = first_result;
    }

    public String getFirst_acceptor() {
        return first_acceptor;
    }

    public void setFirst_acceptor(String first_acceptor) {
        this.first_acceptor = first_acceptor;
    }

    public String getFinal_time() {
        return final_time;
    }

    public void setFinal_time(String final_time) {
        this.final_time = final_time;
    }

    public String getFinal_result() {
        return final_result;
    }

    public void setFinal_result(String final_result) {
        this.final_result = final_result;
    }

    public String getFinal_acceptor() {
        return final_acceptor;
    }

    public void setFinal_acceptor(String final_acceptor) {
        this.final_acceptor = final_acceptor;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getProduction_line_id() {
        return production_line_id;
    }

    public void setProduction_line_id(int production_line_id) {
        this.production_line_id = production_line_id;
    }

    public String getBill_no() {
        return bill_no;
    }

    public void setBill_no(String bill_no) {
        this.bill_no = bill_no;
    }

    public String getTool_photo_url() {
        return tool_photo_url;
    }

    public void setTool_photo_url(String tool_photo_url) {
        this.tool_photo_url = tool_photo_url;
    }
}
