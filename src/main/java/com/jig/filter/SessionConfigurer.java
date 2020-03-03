package com.jig.filter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SessionConfigurer implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new SessionInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/error")
                .excludePathPatterns("/show_login")
                .excludePathPatterns("/login_check")
                .excludePathPatterns("/css/**")
                .excludePathPatterns("/js/**")
                .excludePathPatterns("/font/**")
                .excludePathPatterns("/assets/**")
                .excludePathPatterns("/images/**")
                .excludePathPatterns("/phone_upload_success");
    }

    @Bean
    public SessionInterceptor authenticationInterceptor() {
        return new SessionInterceptor();
    }
}