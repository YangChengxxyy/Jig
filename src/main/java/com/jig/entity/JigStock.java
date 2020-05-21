package com.jig.entity;

import java.util.List;

public class JigStock {
    private String code;
    private String name;
    private int count;
    private List<JigEntity> jig_entity_list;

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

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<JigEntity> getJig_entity_list() {
        return jig_entity_list;
    }

    public void setJig_entity_list(List<JigEntity> jig_entity_list) {
        this.jig_entity_list = jig_entity_list;
    }

    @Override
    public String toString() {
        return "JigStock{" +
                "code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", count=" + count +
                ", jig_entity_list=" + jig_entity_list +
                '}';
    }
}
