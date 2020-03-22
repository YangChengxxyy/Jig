package com.jig;

import com.jig.utils.SpringUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class VueApplication {
    public static void main(String[] args) {
        ApplicationContext applicationContext = SpringApplication.run(VueApplication.class, args);
        SpringUtil.setApplicationContext(applicationContext);
    }
}
