package com.jig.filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
public class InterceptorConfigurer implements WebMvcConfigurer {
    @Resource
    private KeyInterceptor keyInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(keyInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/api/get_workcell_list")
                .excludePathPatterns("/api/login_check")
                .excludePathPatterns("/images/**");
    }
}