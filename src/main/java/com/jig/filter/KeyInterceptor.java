package com.jig.filter;

import com.jig.entity.common.LoginState;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class KeyInterceptor implements HandlerInterceptor {
    @Value("${key}")
    public String key;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        System.out.println(request.getRequestURI());
        String checkKey = request.getParameter("key")!=null?request.getParameter("key").toString():null;
        System.out.println(checkKey);
        return key.equals(checkKey);
    }
}