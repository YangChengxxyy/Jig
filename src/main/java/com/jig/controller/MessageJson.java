package com.jig.controller;

import com.jig.entity.Message;
import com.jig.service.MessageService;
import com.jig.utils.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;

@RestController
public class MessageJson {
    @Autowired
    private MessageService messageService;

    @RequestMapping("get_message")
    public List<Message> getMessage(@RequestParam("id") String id) {
        List<Message> messages = messageService.getMessage(id);
        for (Message message : messages) {
            if (message.getGenerate_time() != null) {
                try {
                    message.setGenerate_time(TimeUtil.nowLocalFormat(message.getAccept_time(), "yyyy-MM-dd HH:mm:ss"));
                } catch (ParseException e) {
                    e.printStackTrace();
                }

            }
        }
        return messages;
    }
}
