package com.jig.service;

import com.jig.entity.Message;
import com.jig.mapper.MessageMapper;
import com.jig.utils.SpringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MessageService {
    @Autowired
    private MessageMapper messageMapper;

    public List<Message> getNewMessage(String id, String type) {
        return messageMapper.getNewMessage(id, type);
    }

    public List<Message> getOtherMessage(String id, String type) {
        return messageMapper.getOtherMessage(id, type);
    }

    public void readMessage(String id, String message_id) {
        JdbcTemplate jdbcTemplate = (JdbcTemplate) SpringUtil.applicationContext.getBean("jdbcTemplate");
        String sql = "select read_user from message where id = '" + message_id + "'";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        String read_user = list.get(0).get("read_user").toString();
        if (read_user.length() > 0) {
            String add = "update message set read_user = read_user + '|' +'" + id + "' where id = '" + message_id + "'";
            System.out.println(add);
            jdbcTemplate.execute(add);
        }else{
            String add = "update message set read_user = read_user + '" + id + "' where id = '" + message_id + "'";
            System.out.println(add);
            jdbcTemplate.execute(add);
        }
    }
}
