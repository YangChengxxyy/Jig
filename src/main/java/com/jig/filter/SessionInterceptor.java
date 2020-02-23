package com.jig.filter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
        Object obj = request.getSession().getAttribute("user");
//        System.out.println(key);
        if (obj == null) {
            //session不存在则先判断是否有key这个参数，
            String checkKey = request.getParameter("key") == null ? "" : request.getParameter("key");
            if (!checkKey.equals(key)) {
                response.sendRedirect("/show_login");
//                System.out.println("请先登录！");
                return false;
            } else {
//                System.out.println("小程序！");
                return true;
            }
        }
//        System.out.println("WEB！");
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}