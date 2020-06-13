package com.jig.entity.out;

/**
 * @author YC
 */
public class OutgoSubmit {
    private String id;
    private String code;
    private String name;
    private String seq_id;
    private String submit_id;
    private String submit_name;
    private String user_for;
    private String outgo_time;
    private String count;
    private String rec_id; // 借出人(仓管员)
    private String rec_name;
    private String production_line_id;
    private String production_line_name;
    private String status; // 状态,出: 0, 入: 1

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getUser_for() {
        return user_for;
    }

    public void setUser_for(String user_for) {
        this.user_for = user_for;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }

    public String getSeq_id() {
        return seq_id;
    }

    public void setSeq_id(String seq_id) {
        this.seq_id = seq_id;
    }

    public String getOutgo_time() {
        return outgo_time;
    }

    public void setOutgo_time(String outgo_time) {
        this.outgo_time = outgo_time;
    }

    public String getRec_id() {
        return rec_id;
    }

    public void setRec_id(String rec_id) {
        this.rec_id = rec_id;
    }

    public String getProduction_line_id() {
        return production_line_id;
    }

    public void setProduction_line_id(String production_line_id) {
        this.production_line_id = production_line_id;
    }

    public String getProduction_line_name() {
        return production_line_name;
    }

    public void setProduction_line_name(String production_line_name) {
        this.production_line_name = production_line_name;
    }

    public String getRec_name() {
        return rec_name;
    }

    public void setRec_name(String rec_name) {
        this.rec_name = rec_name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
