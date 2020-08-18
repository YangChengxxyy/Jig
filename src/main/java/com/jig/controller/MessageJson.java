package com.jig.controller;

import cn.hutool.core.util.StrUtil;
import com.jig.entity.common.Message;
import com.jig.service.MessageService;
import com.jig.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/message")
public class MessageJson {
    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private MessageService messageService;

    @RequestMapping("/get_message")
    public List<Message> getAllMessage(@RequestParam("role") String role, @RequestParam("id") String id, @RequestParam("workcell_id") String workcell_id) {
        String sql = "select * from message where role = '{}' and (user_id = '{}' or user_id = '')and workcell_id = '{}'";
        sql = StrUtil.format(sql, role, id, workcell_id);
        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql);
        List<Message> messages = new LinkedList<>();
        for (Map<String, Object> map : maps) {
            Message message = new Message(map.get("path").toString(), map.get("param").toString(), map.get("condition").toString(), map.get("content").toString(), Long.parseLong(map.get("date").toString()));
            message.setId(Integer.parseInt(map.get("id").toString()));
            message.setRead(Integer.parseInt(map.get("read").toString()) == 1);
            message.setUser_id(map.get("user_id").toString());
            messages.add(message);
        }
        return messages;
    }

    @RequestMapping("read_message")
    public boolean readMessage(@RequestParam("message_id") int message_id) {
        String sql = "update message set `read` = 1 where id = " + message_id;
        jdbcTemplate.update(sql);
        return true;
    }
}