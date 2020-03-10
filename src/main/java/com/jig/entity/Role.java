package com.jig.entity;

public enum Role {
    naive(1, "初级用户"),
    high(2, "高级用户"),
    supervisor(3, "监管员"),
    manager(4, "经理"),
    admin(5, "管理员");
    private final int id;
    private final String name;

    Role(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
