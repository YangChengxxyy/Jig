package com.jig.controller;

import com.jig.entity.Message;
import com.jig.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessageJson {
    @Autowired
    private MessageService messageService;

    @RequestMapping("get_message")
    public List<Message> getMessage(@RequestParam("id") String id) {
        return messageService.getMessage(id);
    }
}
