package com.jig.entity.common;

import java.util.HashMap;
import java.util.Map;

/**
 * @author YC
 */
public class Message {
    private int id;
    private String path;
    private Map<String, Object> params;
    private String content;
    private String title = "提示";
    private boolean read = false;

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

    public Message() {

    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Message(String path, String param, String condition, String content) {
        this.path = path;
        this.params = new HashMap<>(1);
        this.params.put(param, condition);
        this.content = content;
    }

    public Message(String path, String param, String condition, String title, String content) {
        this.path = path;
        this.params = new HashMap<>(1);
        this.params.put(param, condition);
        this.content = content;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isRead() {
        return read;
    }

    public void setRead(boolean read) {
        this.read = read;
    }
    
}
