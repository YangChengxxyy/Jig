package com.jig.controller;

import com.jig.entity.LoginState;
import com.jig.entity.Message;
import com.jig.service.MessageService;
import com.jig.utils.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("api")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class MessageJson {
    @Autowired
    private MessageService messageService;

    /**
     * request参数如果没有type则为web端 有则为移动端
     */
    @RequestMapping("get_new_message")
    public List<Message> getNewMessage(HttpServletRequest request, @RequestParam("id") String id) {
        String type = request.getParameter("type");
        if (type == null) {
            HttpSession session = request.getSession();
            LoginState loginState = (LoginState) session.getAttribute("loginState");
            type = loginState.getData().getType();
        }
        List<Message> messages = messageService.getNewMessage(id, type);
        for (Message message : messages) {
            if (message.getGenerate_time() != null) {
                try {
                    message.setGenerate_time(TimeUtil.nowLocalFormat(message.getGenerate_time(), "yyyy-MM-dd HH:mm:ss"));
                } catch (ParseException e) {
                    e.printStackTrace();
                }

            }
        }
        return messages;
    }

    /**
     * request参数如果没有type则为web端 有则为移动端
     */
    @RequestMapping("get_other_message")
    public List<Message> getOtherMessage(HttpServletRequest request, @RequestParam("id") String id) {
        String type = request.getParameter("type");
        if (type == null) {
            HttpSession session = request.getSession();
            LoginState loginState = (LoginState) session.getAttribute("loginState");
            type = loginState.getData().getType();
        }
        List<Message> messages = messageService.getOtherMessage(id, type);
        for (Message message : messages) {
            if (message.getGenerate_time() != null) {
                try {
                    message.setGenerate_time(TimeUtil.nowLocalFormat(message.getGenerate_time(), "yyyy-MM-dd HH:mm:ss"));
                } catch (ParseException e) {
                    e.printStackTrace();
                }

            }
        }
        return messages;
    }

    @RequestMapping("read_message")
    public boolean readMessage(@RequestParam("id") String id, @RequestParam("message_id") String message_id) {
        try {
            messageService.readMessage(id, message_id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
