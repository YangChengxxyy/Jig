package com.jig.service;

import com.jig.entity.User;
import com.jig.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminMapper adminMapper;

    public List<User> getUserInformation(String id, int offset,int limit) {
        return adminMapper.getUserInformation(id, offset,limit);
    }

    public int getUserInformationPage(String id) {
        return adminMapper.getUserInformationPage(id);
    }
}
