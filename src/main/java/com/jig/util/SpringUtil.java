package com.jig.util;

import org.springframework.context.ApplicationContext;

import java.util.Arrays;

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

    public static void main(String[] args) {
        System.out.println((int)Math.ceil(1/5.0));
    }
}
