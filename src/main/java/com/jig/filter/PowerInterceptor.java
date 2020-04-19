package com.jig.filter;

import com.jig.entity.LoginState;
import com.jig.entity.Role;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class PowerInterceptor implements HandlerInterceptor {

    public static String key;

    @Value("${h5.key}")
    public void setKey(String s) {
        key = s;
    }

    private Log log = LogFactory.getLog(this.getClass());

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
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
            HttpSession session = request.getSession();
            LoginState loginState = (LoginState) session.getAttribute("loginState");
            String type = loginState.getData().getType();
            String url = request.getRequestURI();
            int urlId = 0;
            Role[] roles = Role.values();
            Role a = Role.valueOf(type);
            for (Role role : roles) {
                if (url.contains(role.toString())) {
                    urlId = role.getId();
                }
            }
            log.info(a.getName());
            return a.getId() >= urlId;
        }
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}