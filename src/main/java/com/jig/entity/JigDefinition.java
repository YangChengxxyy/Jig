package com.jig.entity;


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

    @Override
    public String toString() {
        return "JigDefinition{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", code='" + code + '\'' +
                ", model='" + model + '\'' +
                ", part_no='" + part_no + '\'' +
                ", family_id='" + family_id + '\'' +
                ", workcell='" + workcell + '\'' +
                '}';
    }

    public String[] compareTo(JigDefinition jig_info) {//this是未修改的,jig_info是修改后的
        String[] a = new String[3];//0表示field，1-old_value,2-new_value
        for (int i = 0; i < 3; i++) {
            a[i] = "";
        }
        if (!this.code.equals(jig_info.code)) {
            a[0] += "code";
            a[1] += this.code;
            a[2] += jig_info.code;
        }
        if (!this.name.equals(jig_info.name)) {
            if (a[0].equals("")) {
                a[0] += "name";
                a[1] += this.name;
                a[2] += jig_info.name;
            } else {
                a[0] += "~name";
                a[1] += "~" + this.name;
                a[2] += "~" + jig_info.name;
            }
        }
        if (!this.model.equals(jig_info.model)) {
            if (a[0].equals("")) {
                a[0] += "model";
                a[1] += this.model;
                a[2] += jig_info.model;
            } else {
                a[0] += "~name";
                a[1] += "~" + this.model;
                a[2] += "~" + jig_info.model;
            }
        }
        if (!this.workcell_id.equals(jig_info.workcell_id)) {
            if (a[0].equals("")) {
                a[0] += "workcell_id";
                a[1] += this.workcell_id;
                a[2] += jig_info.workcell_id;
            } else {
                a[0] += "~workcell_id";
                a[1] += "~" + this.workcell_id;
                a[2] += "~" + jig_info.workcell_id;
            }
        }
        if (!this.family_id.equals(jig_info.family_id)) {
            if (a[0].equals("")) {
                a[0] += "family_id";
                a[1] += this.family_id;
                a[2] += jig_info.family_id;
            } else {
                a[0] += "~family_id";
                a[1] += "~" + this.family_id;
                a[2] += "~" + jig_info.family_id;
            }
        }
        if (!this.part_no.equals(jig_info.part_no)) {
            if (a[0].equals("")) {
                a[0] += "part_no";
                a[1] += this.part_no;
                a[2] += jig_info.part_no;
            } else {
                a[0] += "~part_no";
                a[1] += "~" + this.part_no;
                a[2] += "~" + jig_info.part_no;
            }
        }
        if (!this.user_for.equals(jig_info.user_for)) {
            if (a[0].equals("")) {
                a[0] += "user_for";
                a[1] += this.user_for;
                a[2] += jig_info.user_for;
            } else {
                a[0] += "~user_for";
                a[1] += "~" + this.user_for;
                a[2] += "~" + jig_info.user_for;
            }
        }
        if (!this.upl.equals(jig_info.upl)) {
            if (a[0].equals("")) {
                a[0] += "upl";
                a[1] += this.upl;
                a[2] += jig_info.upl;
            } else {
                a[0] += "~upl";
                a[1] += "~" + this.upl;
                a[2] += "~" + jig_info.upl;
            }
        }
        if (!this.pm_period.equals(jig_info.pm_period)) {
            if (a[0].equals("")) {
                a[0] += "pm_period";
                a[1] += this.pm_period;
                a[2] += jig_info.pm_period;
            } else {
                a[0] += "~pm_period";
                a[1] += "~" + this.pm_period;
                a[2] += "~" + jig_info.pm_period;
            }
        }
        return a;
    }

}
