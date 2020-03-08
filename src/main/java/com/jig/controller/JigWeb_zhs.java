package com.jig.controller;

import com.jig.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class JigWeb_zhs {

    @RequestMapping(value = "show_high_main", method = {RequestMethod.GET, RequestMethod.POST})
    public String showHighMain(HttpServletRequest request) {
        User user = new User();
        user.setName("Xianghai Zhang");
        user.setId("1215072");
        HttpSession httpSession = request.getSession();
        httpSession.setAttribute("user", user);
        return "high";
    }

    @RequestMapping(value = "test_manager", method = {RequestMethod.GET, RequestMethod.POST})
    public String showManagerMain(HttpServletRequest request) {
        return "manager";
    }
}
