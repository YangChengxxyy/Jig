package com.jig.entity;

public class PurchaseTotalJigDetail {
    private String code;
    private int count;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String toString(){
        return "code:" + code +",count:"+count;
    }
}
