package com.jig.utils;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import java.util.Arrays;
@Component
public class SpringUtil {
    public static ApplicationContext applicationContext = null;

    public static void setApplicationContext(ApplicationContext ctx) {
        SpringUtil.applicationContext = ctx;
    }

    public static void printBean() {
        String[] beanNames = applicationContext.getBeanDefinitionNames();
        Arrays.sort(beanNames);
        for (String beanName : beanNames) {
            System.out.println(beanName);
        }
    }
}
