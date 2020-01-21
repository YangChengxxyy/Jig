package com.jig.entity;

import java.util.HashMap;
import java.util.Map;

public class JigDefinition {
    private String id;
    private String name;
    private String code;
    private String model;
    private String part_no;
    private String family_id;
    private String family;
    private String upl;
    private String user_for;
    private String pm_period;
    private String owner;
    private String owner_name;
    private String rec_time;
    private String rec_by;
    private String rec_by_name;
    private String edit_time;
    private String edit_by;
    private String edit_by_name;
    private String workcell_id;
    private String workcell;
    private String remark;

//    private static final Map<String, String> DIR;
//    private static final String[] ENNAME = {
//            "id",
//            "name",
//            "code",
//            "model",
//            "part_no",
//            "family_id",
//            "family",
//            "upl",
//            "user_for",
//            "pm_period",
//            "owner",
//            "owner_name",
//            "rec_time",
//            "rec_by",
//            "rec_by_name",
//            "edit_time",
//            "edit_by",
//            "edit_by_name",
//            "workcell_id",
//            "workcell",
//            "remark"
//    };
//    private static final String[] ZHNAME = {
//            "id",
//            "工夹具名字",
//            "工夹具代码",
//            "工夹具模组",
//            "工夹具料号",
//            "类别id",
//            "类别",
//            "每条产线所需",
//            "用途",
//            "保养检点周期",
//            "责任人id",
//            "责任人",
//            "录入时间",
//            "录入人id",
//            "录入人",
//            "修改时间",
//            "修改人id",
//            "修改人",
//            "工作部门id",
//            "工作部门",
//            "备注",
//    };
//
//    static {
//        DIR = new HashMap<>();
//        for (int i = 0; i < ENNAME.length; i++) {
//            DIR.put(ENNAME[i], ZHNAME[i]);
//        }
//    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    public String getRec_by_name() {
        return rec_by_name;
    }

    public void setRec_by_name(String rec_by_name) {
        this.rec_by_name = rec_by_name;
    }

    public String getEdit_by_name() {
        return edit_by_name;
    }

    public void setEdit_by_name(String edit_by_name) {
        this.edit_by_name = edit_by_name;
    }

    public String getWorkcell_id() {
        return workcell_id;
    }

    public void setWorkcell_id(String workcell_id) {
        this.workcell_id = workcell_id;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getPart_no() {
        return part_no;
    }

    public void setPart_no(String part_no) {
        this.part_no = part_no;
    }

    public String getFamily_id() {
        return family_id;
    }

    public void setFamily_id(String family_id) {
        this.family_id = family_id;
    }

    public String getFamily() {
        return family;
    }

    public void setFamily(String family) {
        this.family = family;
    }

    public String getUpl() {
        return upl;
    }

    public void setUpl(String upl) {
        this.upl = upl;
    }

    public String getUser_for() {
        return user_for;
    }

    public void setUser_for(String user_for) {
        this.user_for = user_for;
    }

    public String getPm_period() {
        return pm_period;
    }

    public void setPm_period(String pm_period) {
        this.pm_period = pm_period;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getRec_time() {
        return rec_time;
    }

    public void setRec_time(String rec_time) {
        this.rec_time = rec_time;
    }

    public String getRec_by() {
        return rec_by;
    }

    public void setRec_by(String rec_by) {
        this.rec_by = rec_by;
    }

    public String getEdit_time() {
        return edit_time;
    }

    public void setEdit_time(String edit_time) {
        this.edit_time = edit_time;
    }

    public String getEdit_by() {
        return edit_by;
    }

    public void setEdit_by(String edit_by) {
        this.edit_by = edit_by;
    }

    public String getWorkcell() {
        return workcell;
    }

    public void setWorkcell(String workcell) {
        this.workcell = workcell;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
