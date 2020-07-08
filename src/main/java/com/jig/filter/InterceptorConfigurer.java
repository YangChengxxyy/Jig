package com.jig.filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
public class InterceptorConfigurer implements WebMvcConfigurer {

    @Resource
    private PowerInterceptor powerInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(powerInterceptor)
                .addPathPatterns("/**")
                .addPathPatterns("/socket/**")
                .excludePathPatterns("/api/login_check")
                .excludePathPatterns("/api/get_workcell_list")
                .excludePathPatterns("/images/**")
                .excludePathPatterns("/favicon.ico")
                .excludePathPatterns("/error");
    }
}