package com.jig.entity.jig;

import com.jig.entity.out.OutgoSubmit;
import com.jig.entity.repair.MaintenanceSubmit;

import java.util.List;

public class JigEntity {
    private String id;
    private String bill_no;
    private String code;
    private String name;
    private String seq_id;
    private String jig_cabinet_id;
    private String location_id;
    private String bin;
    private String status;
    private int used_count;
    private String reg_date;
    private int count;
    private String last_time;
    private String pm_period;
    private String user_for;
    private double life_percent;
    private List<OutgoSubmit> out_and_in_history_list;
    private List<MaintenanceSubmit> maintenance_history_list; // 历史检点记录

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getBill_no() {
        return bill_no;
    }

    public void setBill_no(String bill_no) {
        this.bill_no = bill_no;
    }

    public int getUsed_count() {
        return used_count;
    }

    public void setUsed_count(int used_count) {
        this.used_count = used_count;
    }

    public String getReg_date() {
        return reg_date;
    }

    public void setReg_date(String reg_date) {
        this.reg_date = reg_date;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getUser_for() {
        return user_for;
    }

    public void setUser_for(String user_for) {
        this.user_for = user_for;
    }

    public String getLast_time() {
        return last_time;
    }

    public void setLast_time(String last_time) {
        this.last_time = last_time;
    }

    public String getPm_period() {
        return pm_period;
    }

    public void setPm_period(String pm_period) {
        this.pm_period = pm_period;
    }

    public List<OutgoSubmit> getOut_and_in_history_list() {
        return out_and_in_history_list;
    }

    public void setOut_and_in_history_list(List<OutgoSubmit> out_and_in_history_list) {
        this.out_and_in_history_list = out_and_in_history_list;
    }

    public List<MaintenanceSubmit> getMaintenance_history_list() {
        return maintenance_history_list;
    }

    public void setMaintenance_history_list(List<MaintenanceSubmit> maintenance_history_list) {
        this.maintenance_history_list = maintenance_history_list;
    }

    @Override
    public String toString() {
        return "JigEntity{" +
                "id='" + id + '\'' +
                ", code='" + code + '\'' +
                ", seq_id='" + seq_id + '\'' +
                ", out_and_in_history_list=" + out_and_in_history_list +
                ", maintenance_history_list=" + maintenance_history_list +
                '}';
    }

    public double getLife_percent() {
        return life_percent;
    }

    public void setLife_percent(double life_percent) {
        this.life_percent = life_percent;
    }
}
