package com.jig.entity;

public class User {
    private String id;
    private String name;
    private String password;
    private String workcell_id;
    private String type;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getWorkcell_id() {
        return workcell_id;
    }

    public void setWorkcell_id(String workcell_id) {
        this.workcell_id = workcell_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
