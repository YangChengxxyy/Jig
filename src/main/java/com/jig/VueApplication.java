package com.jig;

import com.jig.utils.SpringUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

//@EnableScheduling
@SpringBootApplication
@EnableAspectJAutoProxy(exposeProxy = true)
public class VueApplication {
    public static void main(String[] args) {
        ApplicationContext applicationContext = SpringApplication.run(VueApplication.class, args);
        SpringUtil.setApplicationContext(applicationContext);
    }
}
