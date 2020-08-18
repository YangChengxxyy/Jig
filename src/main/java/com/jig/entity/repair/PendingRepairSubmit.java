package com.jig.entity.repair;

public class PendingRepairSubmit {
    private String id;
    private String code;
    private String seq_id;
    private String submit_id;
    private String submit_time;
    private String submit_name;
    private String status;
    private String repair_photo_url;
    private String repair_reason;
    private int repair_type;
    private String repair_type_description;
    private String acceptor_id;
    private String acceptor_name;
    private String acceptor_reason;
    private String acceptor_time;
    private String repair_man_id;
    private String repair_man_name;
    private String repair_time;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRepair_type_description() {
        return repair_type_description;
    }

    public void setRepair_type_description(String repair_type_description) {
        this.repair_type_description = repair_type_description;
    }

    public String getAcceptor_time() {
        return acceptor_time;
    }

    public void setAcceptor_time(String acceptor_time) {
        this.acceptor_time = acceptor_time;
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

    public String getSubmit_time() {
        return submit_time;
    }

    public void setSubmit_time(String submit_time) {
        this.submit_time = submit_time;
    }

    public String getSubmit_name() {
        return submit_name;
    }

    public void setSubmit_name(String submit_name) {
        this.submit_name = submit_name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public int getRepair_type() {
        return repair_type;
    }

    public void setRepair_type(int repair_type) {
        this.repair_type = repair_type;
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

    public String getAcceptor_reason() {
        return acceptor_reason;
    }

    public void setAcceptor_reason(String acceptor_reason) {
        this.acceptor_reason = acceptor_reason;
    }

    public String getRepair_man_id() {
        return repair_man_id;
    }

    public void setRepair_man_id(String repair_man_id) {
        this.repair_man_id = repair_man_id;
    }

    public String getRepair_man_name() {
        return repair_man_name;
    }

    public void setRepair_man_name(String repair_man_name) {
        this.repair_man_name = repair_man_name;
    }

    public String getRepair_time() {
        return repair_time;
    }

    public void setRepair_time(String repair_time) {
        this.repair_time = repair_time;
    }
}
