package com.jig.filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
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
                        "/get_workcell_list",
                        "/test_file");
        registry.addInterceptor(powerInterceptor)
                .addPathPatterns("/naive/**", "/high/**", "/supervisor/**", "/manager/**", "/admin/**");
    }
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedHeaders("Content-Type","X-Requested-With","accept,Origin","Access-Control-Request-Method","Access-Control-Request-Headers","token")
//                .allowedMethods("*")
//                .allowedOrigins("*")
//                .allowCredentials(true);
//    }
}