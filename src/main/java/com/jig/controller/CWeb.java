package com.jig.controller;

import com.jig.entity.DemoEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CWeb {
    @RequestMapping("show_demo")
    public String showDemo(Model model){
        DemoEntity hxy = new DemoEntity();
        return "demo";
    }
}
