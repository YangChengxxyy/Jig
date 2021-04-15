package com.jig;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class VueApplication {
    public static void main(String[] args) {
        SpringApplication.run(VueApplication.class, args);
    }
}
