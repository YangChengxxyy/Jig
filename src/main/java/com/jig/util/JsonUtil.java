package com.jig.util;

import com.jig.entity.DemoEntity;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JsonUtil {

    /**
     * @param o 对象
     * @return JSONObject对象
     */
    public static JSONObject objectToJson(Object o) {
        return new JSONObject(o);
    }

    /**
     * @param o     对象
     * @param key   键
     * @param value 值
     * @return JSONObject对象
     */
    public static JSONObject objectAddValue(Object o, String key, Object value) {
        JSONObject jsonObject = new JSONObject(o);
        jsonObject.put(key, value);
        return jsonObject;
    }

    /**
     * @param o 对象
     * @return JSONObject对象
     */
    public static JSONObject arrayToJson(Object o) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("data", o);
        return jsonObject;
    }

    /**
     * @param o     对象
     * @param key   键
     * @param value 值
     * @return JSONObject对象
     */
    public static JSONObject arrayAddValue(Object o, String key, Object value) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("data", o);
        jsonObject.put(key, value);
        return jsonObject;
    }

    public static void main(String[] args) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        a.add(people);
        System.out.println(arrayAddValue(a, "j", 3));
    }
}
