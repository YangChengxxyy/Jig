package com.jig.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class KeyInterceptor implements HandlerInterceptor {
    @Value("${key}")
    public String key;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        Logger logger = LoggerFactory.getLogger(this.getClass());
        String checkKey = request.getParameter("key") != null ? request.getParameter("key").toString() : null;
        logger.info(request.getRequestURI());
        logger.info(checkKey);
        return key.equals(checkKey);
    }
}