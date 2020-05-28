package com.jig.entity.repair;

public class RepairJig {
    private String id;
    private String code;
    private String seq_id;
    private String submit_id;
    private String submit_time;
    private String submit_name;
    private String repair_photo_url;
    private String repair_reason;
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

    public String getRepair_photo_url() {
        return repair_photo_url;
    }

    public void setRepair_photo_url(String repair_photo_url) {
        this.repair_photo_url = repair_photo_url;
    }

    public String getRepair_reason() {
        return repair_reason;
    }

    public void setRepair_reason(String repair_reason) {
        this.repair_reason = repair_reason;
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

    public String getSubmit_time() {
        return submit_time;
    }

    public void setSubmit_time(String submit_time) {
        this.submit_time = submit_time;
    }
}
