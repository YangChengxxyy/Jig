package com.jig.service;

import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.jig.entity.common.Message;
import com.jig.utils.RedisUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
    @Autowired
    private RedisUtil redisUtil;

    public boolean add(String id, Message message) {
        String str = redisUtil.get("message-" + id);
        List<Message> messages;
        if (str == null || "".equals(str)) {
            messages = new ArrayList<>();
        } else {
            messages = JSON.parseArray(str, Message.class);
        }
        messages.add(message);
        for (int i = 0; i < messages.size(); i++) {
            if (messages.get(i).getDate() - System.currentTimeMillis() >= 7 * 24 * 60 * 60 * 1000) {
                messages.remove(i);
                i--;
            }
        }
        redisUtil.set("message-" + id, JSON.toJSONString(messages));
        return true;
    }

    public boolean removeToOldMessage(String id) {
        List<Message> messages = JSON.parseArray(redisUtil.get("message-" + id), Message.class);
        for (int i = 0; i < messages.size(); i++) {
            if (messages.get(i).getDate() - System.currentTimeMillis() >= 7 * 24 * 60 * 60 * 1000) {
                messages.remove(i);
                i--;
            }
        }
        redisUtil.set("message-" + id, JSON.toJSONString(messages));
        return true;
    }
}