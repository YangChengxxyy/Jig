package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.util.JsonUtil;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CJson {
    @RequestMapping(value = "get_demo_list", method = {RequestMethod.POST, RequestMethod.GET})
    public @ResponseBody String getDemoList(HttpServletRequest request) {
        int pageNumber = Integer.parseInt(request.getParameter("page_number"));
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < pageNumber; i++) {
            a.add(people);
        }
        return JsonUtil.arrayAddMessage(a,"max",3).toString();
    }

    @RequestMapping("get_demo_page_number")
    public int getDemoPageNumber() {
        return 3;
    }
}
