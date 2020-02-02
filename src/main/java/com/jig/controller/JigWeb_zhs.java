package com.jig.controller;

import com.jig.entity.DemoEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;

@Controller
public class JigWeb_zhs {

    @RequestMapping(value = "show_high_main",method = {RequestMethod.GET,RequestMethod.POST})
    public String showHighMain(){
        return "high";
    }

    @RequestMapping(value = "show_manager_main",method = {RequestMethod.GET,RequestMethod.POST})
    public String showManagerMain(){
        return "manager";
    }
}
