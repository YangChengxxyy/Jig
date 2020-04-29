package com.jig.entity;

public class Message {
    /**
     * UUID生成
     */
    private String id;

    private String generate_id;

    private String generate_name;

    private String generate_time;

    private String accept_id;

    private String accept_name;

    private String accept_time;

    private String read_user;
    /**
     * 状态：00未读 11通过 10不通过
     */
    private Integer status;

    private String message;

    private String tab_id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGenerate_id() {
        return generate_id;
    }

    public void setGenerate_id(String generate_id) {
        this.generate_id = generate_id;
    }

    public String getGenerate_name() {
        return generate_name;
    }

    public void setGenerate_name(String generate_name) {
        this.generate_name = generate_name;
    }

    public String getGenerate_time() {
        return generate_time;
    }

    public void setGenerate_time(String generate_time) {
        this.generate_time = generate_time;
    }

    public String getAccept_id() {
        return accept_id;
    }

    public void setAccept_id(String accept_id) {
        this.accept_id = accept_id;
    }

    public String getAccept_name() {
        return accept_name;
    }

    public void setAccept_name(String accept_name) {
        this.accept_name = accept_name;
    }

    public String getAccept_time() {
        return accept_time;
    }

    public void setAccept_time(String accept_time) {
        this.accept_time = accept_time;
    }

    public String getRead_user() {
        return read_user;
    }

    public void setRead_user(String read_user) {
        this.read_user = read_user;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTab_id() {
        return tab_id;
    }

    public void setTab_id(String tab_id) {
        this.tab_id = tab_id;
    }
}