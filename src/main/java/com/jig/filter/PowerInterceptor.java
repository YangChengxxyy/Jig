package com.jig.filter;

import com.jig.annotation.Permission;
import com.jig.annotation.Role;
import com.jig.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;

@Deprecated
@Component
public class PowerInterceptor implements HandlerInterceptor {

    @Autowired
    private RedisUtil redisUtil;
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 将handler强转为HandlerMethod, 前面已经证实这个handler就是HandlerMethod
        HandlerMethod handlerMethod = (HandlerMethod) handler;
        // 从方法处理器中获取出要调用的方法
        Method method = handlerMethod.getMethod();
        // 获取出方法上的Permission注解
        Permission permission = method.getAnnotation(Permission.class);
        System.out.println(permission);
        if (permission == null) {
            // 如果注解为null, 说明不需要拦截, 直接放过
            return true;
        }
        if (permission.value().length > 0) {
            // 如果权限配置不为空, 则取出配置值
            Role[] roles = permission.value();
            String key = request.getParameter("key");
            if (key.isEmpty()) {
                return false;
            } else {
                //TODO:具体权限判断
                return true;
            }
        }
        // 拦截之后应该返回公共结果, 这里没做处理
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}