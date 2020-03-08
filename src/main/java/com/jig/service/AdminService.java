package com.jig.service;

import com.jig.entity.User;
import com.jig.entity.Workcell;
import com.jig.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminMapper adminMapper;

    public List<User> getUserInformation(String id, int page_number) {
        page_number = (page_number - 1) * 5;
        return adminMapper.getUserInformation(id, page_number);
    }

    public int getUserInformationPage(String id) {
        int a = adminMapper.getUserInformationPage(id);
        return (int) Math.ceil(a / 5.0);
    }

    public List<Workcell> getWorkcellList() {
        return adminMapper.getWorkcellList();
    }

    public int changeUser(User user) {
        return adminMapper.changeUser(user);
    }

    public int delUser(String id) {
        return adminMapper.delUser(id);
    }
}
