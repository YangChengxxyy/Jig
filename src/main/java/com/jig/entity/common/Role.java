package com.jig.entity.common;

public enum Role {
    common(0, "所有人", "common"),
    naive(1, "初级用户", "naive"),
    high(2, "高级用户", "high"),
    supervisor(3, "监管员", "supervisor"),
    manager(4, "经理", "manager"),
    admin(5, "管理员", "admin");
    private final int id;
    private final String name;
    private final String role;

    Role(int id, String name, String role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    @Override
    public String toString() {
        return "id:" + id + ",name:" + name;
    }
}
