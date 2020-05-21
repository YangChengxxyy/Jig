package com.jig.utils;

import com.jig.entity.LoginState;
import com.jig.entity.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class LoginStatusUtil {
    public static User getUserInfo(HttpServletRequest request){
        HttpSession session = request.getSession();
        LoginState state = (LoginState) session.getAttribute("loginState");
        User user = state.getData();
        return user;
    }
}
