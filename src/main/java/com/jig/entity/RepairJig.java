package com.jig.entity;

public class RepairJig {
    private String id;
    private String code;
    private String seq_id;
    private String submit_id;
    private String submit_name;
    private String trouble_photo_url;
    private String trouble_reason;
    private String acceptor_id;
    private String acceptor_name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSeq_id() {
        return seq_id;
    }

    public void setSeq_id(String seq_id) {
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

    public String getTrouble_photo_url() {
        return trouble_photo_url;
    }

    public void setTrouble_photo_url(String trouble_photo_url) {
        this.trouble_photo_url = trouble_photo_url;
    }

    public String getTrouble_reason() {
        return trouble_reason;
    }

    public void setTrouble_reason(String trouble_reason) {
        this.trouble_reason = trouble_reason;
    }

    public String getAcceptor_id() {
        return acceptor_id;
    }

    public void setAcceptor_id(String acceptor_id) {
        this.acceptor_id = acceptor_id;
    }

    public String getAcceptor_name() {
        return acceptor_name;
    }

    public void setAcceptor_name(String acceptor_name) {
        this.acceptor_name = acceptor_name;
    }
}
