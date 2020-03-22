package com.jig.controller;

import com.jig.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

@Controller
public class MailWeb {
    @Autowired
    private MailService mailService;
    /**
     * 每天8点检查是否需要点检
     */
    @Scheduled(cron = "0 0 8 1/1 ? ?")
    public void check(){
        mailService.sendSimpleMail("461583644@qq.com","捷普——工夹具" ,"EF2189-1需要点检" );
    }
}
