package com.jig.filter;

import com.jig.entity.LoginState;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class SessionInterceptor implements HandlerInterceptor {
    public static String key;

    @Value("${h5.key}")
    public void setKey(String s) {
        key = s;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
//        System.out.println("url=" + request.getRequestURI());
        //验证session是否存在
        Object obj = request.getSession().getAttribute("loginState");
        if (obj == null) {
            String checkKey = request.getParameter("key") == null ? "" : request.getParameter("key");
            if (!checkKey.equals(key)) {
                response.sendRedirect("/login");
                return false;
            } else {
                return true;
            }
        } else {
            LoginState loginState = (LoginState) obj;
            return loginState.getStateCode() == 0;
        }
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}