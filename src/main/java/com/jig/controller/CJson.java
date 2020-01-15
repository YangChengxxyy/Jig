package com.jig.controller;

import com.jig.entity.DemoEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CJson {
    @RequestMapping("get_demo_list")
    public List<DemoEntity> getDemoList(HttpServletRequest request){
        int pageNumber = Integer.parseInt(request.getParameter("page_number"));
        return null;
    }
}
