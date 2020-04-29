package com.jig.service;

import com.jig.entity.LoginState;
import com.jig.entity.User;
import com.jig.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public String getUserName(String user_id) {
        return userMapper.getUserName(user_id);
    }

    public LoginState loginCheck(String id, String password, String workcell_id) {
        List<User> ids = userMapper.searchId(id);
        LoginState loginState = new LoginState();
        if (ids.size() > 0) {
            List<User> passwords = userMapper.searchPassword(id, password);
            if(passwords.isEmpty()){
                loginState.setStateCode(1);
                loginState.setMessage("密码或者账户错误");
                return loginState;
            }
            String[] workecll_id_list = passwords.get(0).getWorkcell_id().split("[|]");
            String[] type_list = passwords.get(0).getType().split("[|]");
            String type = "";
            String set_workcell_id = "";
            for (int i = 0; i < workecll_id_list.length; i++) {
                if (workcell_id.equals(workecll_id_list[i])) {
                    set_workcell_id = workcell_id;
                    type = type_list[i];
                }
            }
            if (!type.equals("") && passwords.size() > 0) {
                User user = passwords.get(0);
                user.setWorkcell_id(set_workcell_id);
                user.setType(type);
                loginState.setData(user);
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
