package com.jig.service;

import cn.hutool.core.util.StrUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public void roleAdd(String role, String workcell_id, String path, String param, String condition, String content,
                        long date) {
        String insertSql = "insert into message(role,workcell_id,path,param,`condition`,content,date) values('{}','{}','{}','{}','{}','{}',{})";
        insertSql = StrUtil.format(insertSql, role, workcell_id, path, param, condition, content, date);
        logger.info(insertSql);
        jdbcTemplate.update(insertSql);
    }

    public void idAdd(String id, String role, String workcell_id, String path, String param, String condition, String content,
                      long date) {
        String insertSql = "insert into message(role,workcell_id,path,param,`condition`,content,date,user_id) values('{}',{},'{}','{}','{}','{}',{},'{}')";
        insertSql = StrUtil.format(insertSql, role, workcell_id, path, param, condition, content, date, id);
        jdbcTemplate.update(insertSql);
    }
}