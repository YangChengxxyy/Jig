package com.jig.controller;

import com.jig.service.MailService;
import com.jig.utils.SpringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
public class MailWeb {
    @Autowired
    private MailService mailService;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Value("${max-interval}")
    private long max_interval;

    /**
     * 每天8点检查是否需要点检
     */
    @Scheduled(cron = "0 */1 * * * ?")
//    @Scheduled(cron = "0 0 8 1/1 ? ?")
    public void check() throws ParseException {
        logger.info("开始查询是否需要点检");
        JdbcTemplate jdbcTemplate = (JdbcTemplate) SpringUtil.applicationContext.getBean("jdbcTemplate");
        String sql = "select * from regular_maintenance";
        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql);
        for (Map<String, Object> map : maps) {
            String last_time = map.get("last_time").toString();
//            long pm_period = Integer.parseInt(map.get("pm_period").toString());
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
            Date now = new Date();
            Date date = simpleDateFormat.parse(last_time);
            long days = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
            if (days <= max_interval) {
                String code = map.get("code").toString();
                String seq_id = map.get("seq_id").toString();
                String sql2 = "select jig_definition.*,`user`.email,`user`.name from jig_definition inner join `user` on owner = user.id where jig_definition.code = '" + code + "'";
                logger.info(sql2);
                List<Map<String, Object>> maps2 = jdbcTemplate.queryForList(sql2);
                String to = maps2.get(0).get("email").toString();
                mailService.sendSimpleMail(to, "捷普————工夹具", "距离工夹具" + code + "-" + seq_id + "点检时间还有" + days + "天");
                logger.info("发送邮件开始: {},{},{},{}", to, code, seq_id, days);
            }
        }
    }
}
