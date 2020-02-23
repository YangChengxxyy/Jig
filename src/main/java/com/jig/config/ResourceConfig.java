package com.jig.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 将本地资源映射为虚拟路径
 */
@Configuration
public class ResourceConfig implements WebMvcConfigurer {
    @Value("${file.resource-url}")
    public String RESOURCE_URL;
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:"+RESOURCE_URL+"images/");
    }
}