package com.jig.controller;

import java.util.List;

import com.alibaba.fastjson.JSON;
import com.jig.entity.common.Message;
import com.jig.utils.RedisUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
public class MessageJson {
    @Autowired
    private RedisUtil redisUtil;

    private final static String MESSAGE = "message-";

    @RequestMapping("/get_message")
    public List<Message> getAllMmessage(@RequestParam("id") String id) {
        String jsonStr = redisUtil.get(MESSAGE + id);
        List<Message> messages = JSON.parseArray(jsonStr, Message.class);
        return messages;
    }

    @RequestMapping("read_message")
    public boolean readMessage(@RequestParam("id") String id, @RequestParam("message_id") int message_id) {
        List<Message> messages = JSON.parseArray(redisUtil.get(MESSAGE + id), Message.class);
        for (Message message : messages) {
            if (message.getId() == message_id) {
                message.setRead(true);
            }
        }
        redisUtil.set(MESSAGE + id, JSON.toJSONString(messages));
        return true;
    }
}