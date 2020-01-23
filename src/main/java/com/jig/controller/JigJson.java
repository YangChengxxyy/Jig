package com.jig.controller;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
import com.jig.service.JigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class JigJson {
    @Autowired
    private JigService jigService;

    @RequestMapping(value = "get_demo_list", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<Object, Object> getDemoList(@RequestParam(value = "page_number") int pageNumber) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < pageNumber; i++) {
            a.add(people);
        }
        Map<Object, Object> map = new HashMap<>(2);
        map.put("data", a);
        map.put("max", 3);
        return map;
    }

    @RequestMapping("search_jig_definition")
    public Map<Object, Object> searchJigDefinition(@RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userfor, @RequestParam(value = "page_number") int pageNumber) throws Exception {
        pageNumber = (pageNumber - 1) * 5;
        Map<Object, Object> map = new HashMap<>(2);
        List<JigDefinition> list = jigService.searchJigDefinition(code, name, workcell, family, userfor, pageNumber);
        map.put("data", list);
        map.put("max", jigService.searchJigDefinitionPage(code, name, workcell, family, userfor));
        return map;
    }

    @RequestMapping("get_simple_jig_definition")
    public JigDefinition getSimpleJigDefinition(@RequestParam(value = "id") String id) {
        return jigService.getSimpleJigDefinition(id);
    }
}
