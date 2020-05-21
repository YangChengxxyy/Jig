package com.jig.entity;

import java.util.List;

public class JigPosition {
    private String jig_cabinet_id;
    private List<String> location_id;

    public String getJig_cabinet_id() {
        return jig_cabinet_id;
    }

    public void setJig_cabinet_id(String jig_cabinet_id) {
        this.jig_cabinet_id = jig_cabinet_id;
    }

    public List<String> getLocation_id() {
        return location_id;
    }

    public void setLocation_id(List<String> location_id) {
        this.location_id = location_id;
    }

    @Override
    public String toString() {
        return "JigPosition{" +
                "jig_cabinet_id='" + jig_cabinet_id + '\'' +
                ", location_id=" + location_id +
                '}';
    }
}
