package com.jig.service;

import com.jig.entity.Message;
import com.jig.mapper.MessageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageMapper messageMapper;

    public List<Message> getMessage(String id) {
        return messageMapper.getMessage(id);
    }
}
