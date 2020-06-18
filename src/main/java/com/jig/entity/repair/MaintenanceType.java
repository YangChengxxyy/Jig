package com.jig.entity.repair;

public class MaintenanceType {
    private String id;
    private String description;
    private String wrong_description; // 发生问题时的描述

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWrong_description() {
        return wrong_description;
    }

    public void setWrong_description(String wrong_description) {
        this.wrong_description = wrong_description;
    }

    @Override
    public String toString() {
        return "MaintenanceType{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", wrong_description='" + wrong_description + '\'' +
                '}';
    }
}
