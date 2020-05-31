package com.jig.filter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jig.annotation.Permission;
import com.jig.entity.common.Role;
import com.jig.utils.RedisUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;

@Component
public class PowerInterceptor implements HandlerInterceptor {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private RedisUtil redisUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 将handler强转为HandlerMethod, 前面已经证实这个handler就是HandlerMethod
        String token = request.getParameter("token") != null ? request.getParameter("token") : "";
        JSONObject jsonObject = JSON.parseObject(redisUtil.get("allToken"), JSONObject.class);
        Role role = Role.common;
        if (token.equals(jsonObject.getString("admin"))) {
            role = Role.valueOf("admin");
        } else if (token.equals(jsonObject.getString("manager"))) {
            role = Role.valueOf("manager");
        } else if (token.equals(jsonObject.getString("supervisor"))) {
            role = Role.valueOf("supervisor");
        } else if (token.equals(jsonObject.getString("high"))) {
            role = Role.valueOf("high");
        } else if (token.equals(jsonObject.getString("naive"))) {
            role = Role.valueOf("naive");
        }
        logger.info("==>\t" + role.getRole());
        if (handler instanceof HandlerMethod) {
            logger.info("<==\t" + request.getRequestURI());
            HandlerMethod handlerMethod = (HandlerMethod) handler;
            // 从方法处理器中获取出要调用的方法
            Method method = handlerMethod.getMethod();
            // 获取出方法上的Permission注解
            Permission methodPermission = method.getAnnotation(Permission.class);
            if (methodPermission == null) {
                // 如果注解为null, 说明不需要拦截, 直接放过
                Permission classPermission = method.getDeclaringClass().getAnnotation(Permission.class);
                if (classPermission == null) {
                    return true;
                } else {
                    for (Role r : classPermission.value()) {
                        if (role.getId() >= r.getId()) {
                            return true;
                        }
                    }
                    response.sendError(400, "非法访问");
                    logger.info("==>\t非法访问");
                    return false;
                }
            } else {
                for (Role r : methodPermission.value()) {
                    if (role.getId() >= r.getId()) {
                        return true;
                    }
                }
                response.sendError(400, "非法访问");
                logger.info("==>\t非法访问");
                return false;
            }
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}