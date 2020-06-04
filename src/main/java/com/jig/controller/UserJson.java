package com.jig.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jig.entity.common.LoginState;
import com.jig.service.UserService;
import com.jig.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class UserJson {
    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private UserService userService;

    @RequestMapping("get_user_name")
    public String getUserName(@RequestParam(value = "user_id") String user_id) {
        return userService.getUserName(user_id);
    }

    @RequestMapping("login_check")
    public LoginState loginCheck(@RequestParam(value = "id") String id, @RequestParam(value = "password") String password, @RequestParam(value = "workcell_id") String workcell_id) {
        generateToken();
        LoginState state = userService.loginCheck(id, password, workcell_id);
        if (state.getStateCode() == 0) {
            JSONObject allToken = JSON.parseObject(redisUtil.get("allToken"), JSONObject.class);
            state.setToken(allToken.get(state.getUser().getType()).toString());
        }
        return state;
    }

    /**
     * 每日生成新token
     */
    @Scheduled(cron = "0 0 0 * * ?")
    private void generateToken() {
        JSONObject allToken = new JSONObject();
        allToken.put("naive", UUID.randomUUID().toString().replace("-",""));
        allToken.put("high", UUID.randomUUID().toString().replace("-",""));
        allToken.put("supervisor", UUID.randomUUID().toString().replace("-",""));
        allToken.put("manager", UUID.randomUUID().toString().replace("-",""));
        allToken.put("admin", UUID.randomUUID().toString().replace("-",""));
        String object = JSON.toJSONString(allToken);
        redisUtil.set("allToken", object);
    }
}