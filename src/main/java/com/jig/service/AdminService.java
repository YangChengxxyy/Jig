package com.jig.service;

import com.jig.entity.JigPart;
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

    public List<User> searchUserInformation(String submit_id, int page_number, String id, String name, String workcell_id, String start_date, String end_date) {
        page_number = (page_number - 1) * 5;
        return adminMapper.getUserInformation(submit_id, page_number,id,name,workcell_id,start_date,end_date);
    }

    public int searchUserInformationPage(String submit_id, String id, String name, String workcell_id, String start_date, String end_date) {
        int a = adminMapper.getUserInformationPage(submit_id,id,name,workcell_id,start_date,end_date);
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

    public List<User> searchAllUserInformation(String submit_id, String id, String name, String workcell_id, String start_date, String end_date) {
        return adminMapper.searchAllUserInformation(submit_id,id,name,workcell_id,start_date,end_date);
    }

    public List<JigPart> getPart() {
        return adminMapper.getPart();
    }
}
