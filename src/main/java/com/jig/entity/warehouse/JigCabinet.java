package com.jig.entity.warehouse;

import java.util.List;

public class JigCabinet {
    private int id;
    private String jig_cabinet_id; //
    private List<JigLocation> location_id_list;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJig_cabinet_id() {
        return jig_cabinet_id;
    }

    public void setJig_cabinet_id(String jig_cabinet_id) {
        this.jig_cabinet_id = jig_cabinet_id;
    }

    public List<JigLocation> getLocation_id_list() {
        return location_id_list;
    }

    public void setLocation_id_list(List<JigLocation> location_id_list) {
        this.location_id_list = location_id_list;
    }

    @Override
    public String toString() {
        return "JigCabinet{" +
                "id=" + id +
                ", jig_cabinet_id='" + jig_cabinet_id + '\'' +
                ", location_id_list=" + location_id_list +
                '}';
    }
}
