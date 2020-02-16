package com.jig.entity;

public class ScrapSubmit {
    private int id;
    private String code;
    private int seq_id;
    private String submit_id;//申请人id
    private String submit_name;//申请人名字
    private String submit_time;//申请时间
    private String status;
    private String used_count;//寿命计数
    private String scrap_reason;//报废原因
    private String first_acceptor;//初审接受人id
    private String first_acceptor_name;
    private String first_time;//初审接受时间
    private String final_acceptor;//终审接受人id
    private String final_acceptor_name;
    private String final_time;//终审接受时间
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getSeq_id() {
        return seq_id;
    }

    public void setSeq_id(int seq_id) {
        this.seq_id = seq_id;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUsed_count() {
        return used_count;
    }

    public void setUsed_count(String used_count) {
        this.used_count = used_count;
    }

    public String getScrap_reason() {
        return scrap_reason;
    }

    public void setScrap_reason(String scrap_reason) {
        this.scrap_reason = scrap_reason;
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

    public String getFirst_time() {
        return first_time;
    }

    public void setFirst_time(String first_time) {
        this.first_time = first_time;
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

    public String getFinal_time() {
        return final_time;
    }

    public void setFinal_time(String final_time) {
        this.final_time = final_time;
    }
}
