package com.jig.controller;

import com.jig.entity.DemoEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CJson {
    /**
     * @param page_number 页数
     * @return 第几页的数据，最大页数的Map
     */
    @RequestMapping(value = "get_demo_list", method = {RequestMethod.POST, RequestMethod.GET})
    public static Map<Object, Object> getDemoList(@RequestParam(value = "page_number") int page_number) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < page_number; i++) {
            a.add(people);
        }
        Map<Object, Object> map = new HashMap<>();
        map.put("data", a);
        map.put("max", 3);
        return map;
    }
}
