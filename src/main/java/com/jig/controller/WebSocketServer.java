package com.jig.controller;

import com.alibaba.fastjson.JSONObject;
import com.jig.entity.common.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author YC
 */
@Component
@ServerEndpoint("/socket/{role}/{id}")
public class WebSocketServer {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    /**
     * 全部在线会话
     */
    private static final Map<String, Session> ONLINE_SESSIONS = new ConcurrentHashMap<>();

    /**
     * 当客户端打开连接：1.添加会话对象 2.更新在线人数
     */
    @OnOpen
    public void onOpen(@PathParam("role") String role, @PathParam("id") String id, Session session) throws IOException {
        ONLINE_SESSIONS.put(role + "-" + id, session);
        logger.info("连接成功");
    }

    /**
     * 当客户端发送消息：1.获取它的用户名和消息 2.发送消息给所有人
     * <p>
     * PS: 这里约定传递的消息为JSON字符串 方便传递更多参数！
     */
    @OnMessage
    public void onMessage(Session session, String jsonStr) {

    }

    /**
     * 当关闭连接：1.移除会话对象 2.更新在线人数
     */
    @OnClose
    public void onClose(@PathParam("role") String role, @PathParam("id") String id, Session session) {
        ONLINE_SESSIONS.remove(role + "-" + id);
        logger.info("断开连接");
    }

    /**
     * 当通信发生异常：打印错误日志
     */
    @OnError
    public void onError(Session session, Throwable error) {
        error.printStackTrace();
    }

    /**
     * 公共方法：发送信息给所有人
     */
    public void sendMessageToAll(String jsonMsg) {
        ONLINE_SESSIONS.forEach((id, session) -> {
            try {
                session.getBasicRemote().sendText(jsonMsg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    public void sendMessageToRole(String role, String jsonStr) {
        ONLINE_SESSIONS.forEach((key, session) -> {
            try {
                if (key.contains(role)) {
                    session.getBasicRemote().sendText(jsonStr);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    public void sendMessageToId(String id, String jsonStr) {
        ONLINE_SESSIONS.forEach((key, session) -> {
            try {
                if (key.contains(id)) {
                    session.getBasicRemote().sendText(jsonStr);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    public void sendMessageToRole(String role, Message message) {
        sendMessageToRole(role, JSONObject.toJSONString(message));
    }

    public void sendMessageToId(String id, Message message) {
        sendMessageToId(id, JSONObject.toJSONString(message));
    }
}