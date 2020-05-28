package com.jig.entity.scrap;

import java.util.UUID;

public class ScrapSubmit {
    private String id;
    private String code;
    private String seq_id;
    private String submit_id;
    private String submit_name;
    private String submit_time;
    private int used_count;
    private String scrap_reason;
    private String scrap_type;
    private String scrap_photo_url;
    private String first_time;//初审时间
    private String first_acceptor;//初审人id
    private String first_acceptor_name;
    private String first_reason;
    private String final_time;//终审时间
    private String final_acceptor;//终审人id
    private String final_acceptor_name;//终审人
    private String final_reason;
    private String status;//审核状态 :0待审核 1初审未通过 2初审通过 3终审未通过 4终审通过

    public ScrapSubmit() {
        id = UUID.randomUUID().toString().replaceAll("-", "");
    }

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

    public String getSubmit_time() {
        return submit_time;
    }

    public void setSubmit_time(String submit_time) {
        this.submit_time = submit_time;
    }

    public int getUsed_count() {
        return used_count;
    }

    public void setUsed_count(int used_count) {
        this.used_count = used_count;
    }

    public String getScrap_reason() {
        return scrap_reason;
    }

    public void setScrap_reason(String scrap_reason) {
        this.scrap_reason = scrap_reason;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getScrap_photo_url() {
        return scrap_photo_url;
    }

    public void setScrap_photo_url(String scrap_photo_url) {
        this.scrap_photo_url = scrap_photo_url;
    }

    public String getFirst_reason() {
        return first_reason;
    }

    public void setFirst_reason(String first_reason) {
        this.first_reason = first_reason;
    }

    public String getFinal_reason() {
        return final_reason;
    }

    public void setFinal_reason(String final_reason) {
        this.final_reason = final_reason;
    }

    public String getScrap_type() {
        return scrap_type;
    }

    public void setScrap_type(String scrap_type) {
        this.scrap_type = scrap_type;
    }

    @Override
    public String toString() {
        return "ScrapSubmit{" +
                "id='" + id + '\'' +
                ", code='" + code + '\'' +
                ", seq_id='" + seq_id + '\'' +
                ", submit_id='" + submit_id + '\'' +
                ", submit_name='" + submit_name + '\'' +
                ", submit_time='" + submit_time + '\'' +
                ", used_count=" + used_count +
                ", scrap_reason='" + scrap_reason + '\'' +
                ", scrap_photo_url='" + scrap_photo_url + '\'' +
                ", first_time='" + first_time + '\'' +
                ", first_acceptor='" + first_acceptor + '\'' +
                ", first_acceptor_name='" + first_acceptor_name + '\'' +
                ", first_reason='" + first_reason + '\'' +
                ", final_time='" + final_time + '\'' +
                ", final_acceptor='" + final_acceptor + '\'' +
                ", final_acceptor_name='" + final_acceptor_name + '\'' +
                ", final_reason='" + final_reason + '\'' +
                ", status='" + status + '\'' +
                '}';
    }

    public String[] PassSubmitInfo(String new_status) {
        String[] a = new String[3];
        String field = "";
        String old_value = "";
        String new_value = "";
        if (!this.status.equals(new_status)) {
            field += "status";
            old_value += this.status;
            new_value += new_status;
        }
        if (first_reason != null) {
            if (field.equals("")) {
                field += "first_reason";
                old_value += first_reason;
                new_value += "";
            } else {
                field += "~first_reason";
                old_value += "~" + first_reason;
                new_value += "~";
            }

        }
        a[0] = field;
        a[1] = old_value;
        a[2] = new_value;
        //System.out.println("pass:" + Arrays.toString(a));
        return a;
    }

    public String[] NoPassSubmitInfo(String new_status, String no_pass_reason) {
        String[] a = new String[3];
        String field = "";
        String old_value = "";
        String new_value = "";
        if (!this.status.equals(new_status)) {
            field += "status";
            old_value += this.status;
            new_value += new_status;
        }
        if (field.equals("")) {
            field += "first_reason";
            old_value += first_reason == null ? "" : first_reason;
            new_value += no_pass_reason;
        } else {
            field += "~first_reason";
            old_value += "~" + (first_reason == null ? "" : first_reason);
            new_value += "~" + no_pass_reason;
        }

        a[0] = field;
        a[1] = old_value;
        a[2] = new_value;
        //System.out.println("no_pass:"+ Arrays.toString(a));
        return a;
    }
}
