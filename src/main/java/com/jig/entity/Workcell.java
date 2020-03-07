package com.jig.entity;

import java.io.Serializable;

/**
 * (Workcell)实体类
 *
 * @author makejava
 * @since 2020-03-07 09:15:19
 */
public class Workcell implements Serializable {
    private static final long serialVersionUID = -19861262688919759L;
    
    private String id;
    
    private String workcell;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWorkcell() {
        return workcell;
    }

    public void setWorkcell(String workcell) {
        this.workcell = workcell;
    }

}