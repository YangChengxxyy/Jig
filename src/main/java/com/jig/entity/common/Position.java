package com.jig.entity.common;

public class Position {
    private String jig_cabinet_id;
    private String location_id;
    private String bin;
    private String status;

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
}
