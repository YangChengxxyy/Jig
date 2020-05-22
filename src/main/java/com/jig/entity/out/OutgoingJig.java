package com.jig.entity.out;

public class OutgoingJig {
    private String id;
    private String code;
    private String name;
    private String seq_id;
    private String user_id;
    private String user_name;
    private String submit_time;
    private String outgo_time;
    private String jig_cabinet_id;
    private String location_id;
    private String bin;

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

    public String getSeq_id() {
        return seq_id;
    }

    public void setSeq_id(String seq_id) {
        this.seq_id = seq_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getSubmit_time() {
        return submit_time;
    }

    public void setSubmit_time(String submit_time) {
        this.submit_time = submit_time;
    }

    public String getOutgo_time() {
        return outgo_time;
    }

    public void setOutgo_time(String outgo_time) {
        this.outgo_time = outgo_time;
    }

    public String getJig_cabinet_id() {
        return jig_cabinet_id;
    }

    public void setJig_cabinet_id(String jig_cabinet_id) {
        this.jig_cabinet_id = jig_cabinet_id;
    }

    public String getLocation_id() {
        return location_id;
    }

    public void setLocation_id(String location_id) {
        this.location_id = location_id;
    }

    public String getBin() {
        return bin;
    }

    public void setBin(String bin) {
        this.bin = bin;
    }
}
