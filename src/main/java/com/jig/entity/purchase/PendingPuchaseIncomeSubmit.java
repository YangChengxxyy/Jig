package com.jig.entity.purchase;

public class PendingPuchaseIncomeSubmit { // 待处理的采购入库申请
    private String id;
    private String submit_id;
    private String submit_name;
    private String submit_time;
    private String code;//多个用 | 分开
    private String count;//多个用 | 分开
    private String first_time;//初审时间
    private String first_acceptor;//初审人id
    private String first_acceptor_name;
    private String first_reason;//初审不通过的原因
    private String final_time;//终审时间
    private String final_acceptor;//终审人id
    private String final_acceptor_name;//终审人
    private String final_reason;//终审不通过的原因
    private String status;//审核状态 :0待入库 1已入库
    private int production_line_id;//产线id
    private String production_line_name;
    private String bill_no;//单据号
    private String tool_photo_url;//工夹具照片路径
    private String input_man_id; // 入库人id
    private String input_man_name;
    private String input_time; // 入库时间

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

    public String getSubmit_name() {
        return submit_name;
    }

    public void setSubmit_name(String submit_name) {
        this.submit_name = submit_name;
    }

    public String getSubmit_time() {
        return submit_time;
    }

    public void setSubmit_time(String submit_time) {
        this.submit_time = submit_time;
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

    public String getFirst_acceptor() {
        return first_acceptor;
    }

    public void setFirst_acceptor(String first_acceptor) {
        this.first_acceptor = first_acceptor;
    }

    public String getFirst_acceptor_name() {
        return first_acceptor_name;
    }

    public void setFirst_acceptor_name(String first_acceptor_name) {
        this.first_acceptor_name = first_acceptor_name;
    }

    public String getFirst_reason() {
        return first_reason;
    }

    public void setFirst_reason(String first_reason) {
        this.first_reason = first_reason;
    }

    public String getFinal_time() {
        return final_time;
    }

    public void setFinal_time(String final_time) {
        this.final_time = final_time;
    }

    public String getFinal_acceptor() {
        return final_acceptor;
    }

    public void setFinal_acceptor(String final_acceptor) {
        this.final_acceptor = final_acceptor;
    }

    public String getFinal_acceptor_name() {
        return final_acceptor_name;
    }

    public void setFinal_acceptor_name(String final_acceptor_name) {
        this.final_acceptor_name = final_acceptor_name;
    }

    public String getFinal_reason() {
        return final_reason;
    }

    public void setFinal_reason(String final_reason) {
        this.final_reason = final_reason;
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

    public String getProduction_line_name() {
        return production_line_name;
    }

    public void setProduction_line_name(String production_line_name) {
        this.production_line_name = production_line_name;
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

    public String getInput_man_id() {
        return input_man_id;
    }

    public void setInput_man_id(String input_man_id) {
        this.input_man_id = input_man_id;
    }

    public String getInput_time() {
        return input_time;
    }

    public void setInput_time(String input_time) {
        this.input_time = input_time;
    }

    public String getInput_man_name() {
        return input_man_name;
    }

    public void setInput_man_name(String input_man_name) {
        this.input_man_name = input_man_name;
    }
}
