package com.jig.entity;

import java.io.Serializable;

/**
 * (User)实体类
 *
 * @author yc
 * @since 2020-03-07 10:07:10
 */
public class User implements Serializable {
    private static final long serialVersionUID = -19801996641498749L;
    
    private String id;
    
    private String name;
    
    private String password;
    
    private Integer workcell_id;

    private String workcell;
    
    private String type;
    
    private String email;
    
    private String phone;
    
    private String position;
    /**
    * 入职时间
    */
    private String entry_date;
    /**
    * 头像路径
    */
    private String avatar_url;


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

    public Integer getWorkcell_id() {
        return workcell_id;
    }

    public void setWorkcell_id(Integer workcell_id) {
        this.workcell_id = workcell_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getEntry_date() {
        return entry_date;
    }

    public void setEntry_date(String entry_date) {
        this.entry_date = entry_date;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    public String getWorkcell() {
        return workcell;
    }

    public void setWorkcell(String workcell) {
        this.workcell = workcell;
    }
}