package com.jig.filter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/**
 * Created by 20160216 on 2018/2/8.
 */
@Configuration
public class SessionConfigurer implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new SessionInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/show_login").excludePathPatterns("/css/**").excludePathPatterns("/js/**").excludePathPatterns("/font/**").excludePathPatterns("/images/**");
    }

    @Bean
    public SessionInterceptor authenticationInterceptor() {
        return new SessionInterceptor();
    }
}