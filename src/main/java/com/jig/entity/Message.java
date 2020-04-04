package com.jig.entity;

import java.io.Serializable;

public class Message implements Serializable {
    private static final long serialVersionUID = 930729802261586410L;
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

    private String read_time;
    /**
     * 状态：00未读 01已读（未处理） 11通过 10不通过
     */
    private Integer status;

    private String message;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

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

    public String getRead_time() {
        return read_time;
    }

    public void setRead_time(String read_time) {
        this.read_time = read_time;
    }
}