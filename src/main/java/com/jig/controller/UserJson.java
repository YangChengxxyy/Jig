package com.jig.controller;

import com.jig.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserJson {
    @Autowired
    private UserService userService;
    @RequestMapping("get_user_name")
    public String getUserName(@RequestParam( value = "user_id")String user_id){
        return userService.getUserName(user_id);
    }
}
