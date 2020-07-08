package com.jig.entity.common;

import java.util.Map;

/**
 * @author YC
 */
public class Message {
    private String path;
    private Map<String,Object> params;

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Map<String, Object> getParams() {
        return params;
    }

    public void setParams(Map<String, Object> params) {
        this.params = params;
    }
}
