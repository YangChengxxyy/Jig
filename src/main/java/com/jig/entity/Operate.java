package com.jig.entity;

import org.apache.ibatis.annotations.Insert;

import java.util.List;
import java.util.UUID;

public class Operate {
    //提醒:？？？写插入operate记录时如果修改的是code那么要把count记录同时加入(想不出来)
    private String id;
    private String operate_man_id;//操作人id
    private String operate_man_name;
    private String operate_man_type;//操作人职位
    private String operate_key_id;//要查询的记录外键id
    private String operate_time;
    private String table;
    private String field;
    private String type;
    private String old_value;
    private String new_value;
    private String to_string;
    private PurchaseIncomeSubmit purchase_submit;
    private List<String> field_list;


    public Operate(){
        id = UUID.randomUUID().toString().replaceAll("-","");
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOperate_man_name() {
        return operate_man_name;
    }

    public void setOperate_man_name(String operate_man_name) {
        this.operate_man_name = operate_man_name;
    }

    public String getOperate_time() {
        return operate_time;
    }

    public void setOperate_time(String operate_time) {
        this.operate_time = operate_time;
    }

    public String getTable() {
        return table;
    }

    public void setTable(String table) {
        this.table = table;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getOperate_man_id() {
        return operate_man_id;
    }

    public void setOperate_man_id(String operate_man_id) {
        this.operate_man_id = operate_man_id;
    }

    public String getOperate_man_type() {
        return operate_man_type;
    }

    public void setOperate_man_type(String operate_man_type) {
        this.operate_man_type = operate_man_type;
    }

    public String getOperate_key_id() {
        return operate_key_id;
    }

    public void setOperate_key_id(String operate_key_id) {
        this.operate_key_id = operate_key_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOld_value() {
        return old_value;
    }

    public void setOld_value(String old_value) {
        this.old_value = old_value;
    }

    public String getNew_value() {
        return new_value;
    }

    public void setNew_value(String new_value) {
        this.new_value = new_value;
    }

    public String getTo_string() {
        return to_string;
    }

    public void setTo_string(String to_string) {
        this.to_string = to_string;
    }

    public PurchaseIncomeSubmit getPurchase_submit() {
        return purchase_submit;
    }

    public void setPurchase_submit(PurchaseIncomeSubmit purchase_submit) {
        this.purchase_submit = purchase_submit;
    }

    public void setPurchase_submit(){
        this.purchase_submit = new PurchaseIncomeSubmit();
        if(this.field != null && this.field != ""){
            String[] field_list = this.field.split("~");
            String[] value_list = this.new_value.split("~");
            for(int i=0;i<field_list.length;i++) {
                switch (field_list[i]) {
                    case "id":
                        this.purchase_submit.setId(value_list[i]);
                        break;
                    case "submit_id":
                        this.purchase_submit.setSubmit_id(value_list[i]);
                        break;
                    case "code":
                        this.purchase_submit.setCode(value_list[i]);
                        break;
                    case "count":
                        this.purchase_submit.setCount(value_list[i]);
                        break;
                    case "submit_time":
                        this.purchase_submit.setSubmit_time(value_list[i]);
                        break;
                    case "production_line_id":
                        this.purchase_submit.setProduction_line_id(Integer.valueOf(value_list[i]));
                        break;
                    case "bill_no":
                        this.purchase_submit.setBill_no(value_list[i]);
                        break;
                }
            }
        }
    }

    public OperateUpdateInfo setOperateUpdateInfo(){
        OperateUpdateInfo updateInfo = new OperateUpdateInfo();
        if(this.field != null && this.field !=  "" && this.old_value != null && this.old_value !=  "") {
            //存在隐患,如果old_value不为null，而new_value是null,现在先不考虑

            String[] field_list = this.field.split("~");
            String[] old_value_list = this.old_value.split("~");
            String[] new_value_list = this.new_value.split("~");

            for(int i=0;i<field_list.length;i++) {
                switch (field_list[i]) {
                    case "code":
                        updateInfo.setUpdate_code(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "count":
                        updateInfo.setUpdate_count(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "first_time":
                        updateInfo.setUpdate_first_time(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "first_acceptor":
                        updateInfo.setUpdate_first_acceptor(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "first_reason":
                        updateInfo.setUpdate_first_reason(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "final_time":
                        updateInfo.setUpdate_final_time(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "final_acceptor":
                        updateInfo.setUpdate_final_acceptor(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "final_reason":
                        updateInfo.setUpdate_final_reason(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "production_line_id":
                        updateInfo.setUpdate_production_line_id(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                    case "status":
                        String old_status = old_value_list[i];
                        String new_status = new_value_list[i];

                        switch (old_value_list[i]){
                            case "0":
                                old_status = "待审批";
                                break;
                            case "1":
                                old_status = "初审不通过";
                                break;
                            case "2":
                                old_status = "初审通过";
                                break;
                            case "3":
                                old_status = "终审不通过";
                                break;
                            case "4":
                                old_status = "终审不通过";
                                break;
                        }

                        switch (new_value_list[i]){
                            case "0":
                                new_status = "待审批";
                                break;
                            case "1":
                                new_status = "初审不通过";
                                break;
                            case "2":
                                new_status = "初审通过";
                                break;
                            case "3":
                                new_status = "终审不通过";
                                break;
                            case "4":
                                new_status = "终审不通过";
                                break;
                        }
                        updateInfo.setUpdate_status(old_status + "~" + new_status);
                        break;
                    case "bill_no":
                        updateInfo.setUpdate_bill_no(old_value_list[i] + "~" + new_value_list[i]);
                        break;
                }
            }
        }


        return updateInfo;
    }

    public String toString(){
        String str = "";
        if(this.field != null && this.field !=  "") {
            String[] field_arr = this.field.split("/|");
        }
        /*if(field_arr.length>0) {
            //String table = tablefield[0];//获取修该的记录所在的表
            //String[] field = tablefield[1].split("/|");
        }*/
        String strType = "";
        if(type.equals("delete")){
            strType = "删除申请";
        }else if (type.equals("update")){
            if(old_value.equals("0")){
                if(new_value.equals("1")){
                    strType = "初审不通过";
                }else if(new_value.equals("2")){
                    strType = "初审通过";
                }
            }else if(old_value.equals("2")){
                if(new_value.equals("3")){
                    strType = "终审不通过";
                }else if(new_value.equals("4")){
                    strType = "终审通过";
                }
            }else {
                strType = "修改申请信息";
            }
        }else if(type.equals("insert")){
            strType = "提交申请";
        }
        String str_operate_type = "";
        if(operate_man_type.equals("naive")){
            str_operate_type = "初级用户";
        }else if(operate_man_type.equals("high")){
            str_operate_type = "高级用户";
        }else if (operate_man_type.equals("manager")){
            str_operate_type = "经理";
        }else if(operate_man_type.equals("supervisor")){
            str_operate_type = "监管员";
        }
        str+=str_operate_type+" "+operate_man_name+"  "+strType;
        this.setTo_string(str);
        this.setPurchase_submit();
        return str;
    }
}
