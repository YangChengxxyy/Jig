package com.jig.filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
public class InterceptorConfigurer implements WebMvcConfigurer {
    @Resource
    private SessionInterceptor sessionInterceptor;
    @Resource
    private PowerInterceptor powerInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(sessionInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/error",
                        "/login",
                        "/login_check",
                        "/css/**",
                        "/js/**",
                        "/fonts/**",
                        "/assets/**",
                        "/images/**",
                        "/phone_upload_success",
                        "/show_demo",
                        "/get_demo_list",
                        "/get_workcell_list");
        registry.addInterceptor(powerInterceptor)
                .addPathPatterns("/naive/**", "/high/**", "/supervisor/**", "/manager/**", "/admin/**");
    }
}