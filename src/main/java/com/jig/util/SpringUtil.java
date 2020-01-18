package com.jig.util;

import com.jig.entity.DemoEntity;
import org.json.JSONArray;
import org.springframework.context.ApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
