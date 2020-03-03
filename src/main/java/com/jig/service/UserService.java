package com.jig.service;

import com.jig.entity.LoginState;
import com.jig.entity.User;
import com.jig.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.Keymap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public String getUserName(String user_id) {
        return userMapper.getUserName(user_id);
    }

    public LoginState loginCheck(String id, String password) {
        List<User> ids = userMapper.searchId(id);
        LoginState loginState = new LoginState();
        if (ids.size() > 0) {
            List<User> passwords = userMapper.searchPassword(id, password);
            if (passwords.size() > 0) {
                loginState.setData(passwords.get(0));
                loginState.setMessage("登录成功！");
                loginState.setStateCode(0);
            } else {
                loginState.setStateCode(1);
                loginState.setMessage("密码或者账户错误");
            }
        } else {
            loginState.setStateCode(2);
            loginState.setMessage("账户不存在");
        }
        return loginState;
    }
}
