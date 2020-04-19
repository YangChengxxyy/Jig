package com.jig.controller;

import com.jig.entity.LoginState;
import com.jig.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@Transactional(propagation = Propagation.REQUIRED,isolation = Isolation.DEFAULT)
public class UserJson {
    @Autowired
    private UserService userService;

    @RequestMapping("get_user_name")
    public String getUserName(@RequestParam(value = "user_id") String user_id) {
        return userService.getUserName(user_id);
    }

    @RequestMapping("login_check")
    public LoginState loginCheck(@RequestParam(value = "id") String id, @RequestParam(value = "password") String password,@RequestParam(value = "workcell_id")String workcell_id, HttpSession session) {
        LoginState state = userService.loginCheck(id, password,workcell_id);
        if (state.getStateCode() == 0) {
            session.setAttribute("loginState",state);
        }
        return state;
    }
}
