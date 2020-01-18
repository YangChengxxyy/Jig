package com.jig.util;

import com.jig.entity.DemoEntity;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JsonUtil {

    public static JSONObject objectToJson(Object o) {
        return new JSONObject(o);
    }

    public static JSONObject objectAddMessage(Object o, String messageName, Object message) {
        JSONObject jsonObject = new JSONObject(o);
        jsonObject.put(messageName, message);
        return jsonObject;
    }

    public static <T extends Collection> JSONObject arrayToJson(T t) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("data",t);
        return jsonObject;
    }

    public static <T extends Collection> JSONObject arrayAddMessage(T t, String messageName, Object message) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("data",t);
        jsonObject.put(messageName, message);
        return jsonObject;
    }

    public static void main(String[] args) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        a.add(people);
        System.out.println(arrayAddMessage(a,"j",3));
    }
}
