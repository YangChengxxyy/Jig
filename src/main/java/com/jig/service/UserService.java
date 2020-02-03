package com.jig.service;

import com.jig.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public String getUserName(String user_id) {
        return userMapper.getUserName(user_id);
    }
}
