package com.jig.entity.repair;

import java.util.ArrayList;
import java.util.List;

public class MaintenanceSubmit {
    private String id;
    private String code;
    private String seq_id;
    private String reason; // 检点类型,具体描述对应在maintencance_type表,多个用|多开
    private List<String> reason_description = new ArrayList<String>();
    private String check_id; // 检点人id
    private String check_name;
    private String check_time;
    private int is_repair; // 是否需要进行报修，是：1，否：0

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

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getCheck_id() {
        return check_id;
    }

    public void setCheck_id(String check_id) {
        this.check_id = check_id;
    }

    public String getCheck_name() {
        return check_name;
    }

    public void setCheck_name(String check_name) {
        this.check_name = check_name;
    }

    public String getCheck_time() {
        return check_time;
    }

    public void setCheck_time(String check_time) {
        this.check_time = check_time;
    }

    public int getIs_repair() {
        return is_repair;
    }

    public void setIs_repair(int is_repair) {
        this.is_repair = is_repair;
    }

    public List<String> getReason_description() {
        return reason_description;
    }

    public void setReason_description(List<String> reason_description) {
        this.reason_description = reason_description;
    }

    @Override
    public String toString() {
        return "MaintenanceSubmit{" +
                "code='" + code + '\'' +
                ", seq_id='" + seq_id + '\'' +
                ", reason='" + reason + '\'' +
                ", check_id='" + check_id + '\'' +
                '}';
    }
}
