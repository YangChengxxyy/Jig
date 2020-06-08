package com.jig.entity.warehouse;

import java.util.ArrayList;
import java.util.List;

public class JigLocation {
    private int id;
    private String location_id; //
    private List<String> free_bin_list = new ArrayList<>();
    private List<String> full_bin_list;
    private int free_bin_count;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation_id() {
        return location_id;
    }

    public void setLocation_id(String location_id) {
        this.location_id = location_id;
    }

    public List<String> getFree_bin_list() {
        return free_bin_list;
    }

    public void setFree_bin_list(List<String> free_bin_list) {
        for (String bin : free_bin_list) {
            this.free_bin_list.add(bin);
        }
    }

    public List<String> getFull_bin_list() {
        return full_bin_list;
    }

    public void setFull_bin_list(List<String> full_bin_list) {
        this.full_bin_list = full_bin_list;
    }

    public int getFree_bin_count() {
        return free_bin_count;
    }

    public void setFree_bin_count(int free_bin_count) {
        this.free_bin_count = free_bin_count;
    }

    @Override
    public String toString() {
        return "JigLocation{" +
                "id=" + id +
                ", location_id='" + location_id + '\'' +
                ", free_bin_list=" + free_bin_list +
                ", full_bin_list=" + full_bin_list +
                ", free_bin_count=" + free_bin_count +
                '}';
    }
}
