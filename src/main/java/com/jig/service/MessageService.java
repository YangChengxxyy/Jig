package com.jig.service;

import com.jig.entity.common.Message;
import com.jig.mapper.MessageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MessageService {
    @Autowired
    private MessageMapper messageMapper;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Message> getNewMessage(String id, String type) {
        return messageMapper.getNewMessage(id, type);
    }

    public List<Message> getOtherMessage(String id, String type) {
        return messageMapper.getOtherMessage(id, type);
    }

    public void readMessage(String id, String message_id) {
        String sql = "select * from message where id = '" + message_id + "'";
        System.out.println(sql);
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        String read_user = list.get(0).get("read_user") == null ? "" : list.get(0).get("read_user").toString();
        System.out.println(read_user);
        if (read_user.length() == 0) {
            String add = "update message set read_user =  concat(read_user, '|' ,  +'" + id + "') where id = '" + message_id + "'";
            System.out.println(add);
            jdbcTemplate.execute(add);
        } else {
            String add = "update message set read_user = concat(read_user, + '" + id + "')  where id = '" + message_id + "'";
            System.out.println(add);
            jdbcTemplate.execute(add);
        }
    }
}
