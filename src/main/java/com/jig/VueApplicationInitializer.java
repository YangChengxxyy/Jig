package com.jig;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class VueApplicationInitializer extends SpringBootServletInitializer {
    public VueApplicationInitializer() {
        System.out.println("初始化ServletInitializer");
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(VueApplication.class);//MyApplication是启动类名
    }
}
