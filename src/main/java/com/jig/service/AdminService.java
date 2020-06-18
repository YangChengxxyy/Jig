package com.jig.service;

import com.jig.entity.common.CnEn;
import com.jig.entity.common.User;
import com.jig.entity.common.Workcell;
import com.jig.entity.jig.JigModel;
import com.jig.entity.jig.JigPart;
import com.jig.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminMapper adminMapper;

    public List<User> searchUserInformation(String submit_id, int page_number, int page_size, String id, String name, String workcell_id, String start_date, String end_date) {
        page_number = (page_number - 1) * page_size;
        return adminMapper.getUserInformation(submit_id, page_number, page_size, id, name, workcell_id, start_date, end_date);
    }

    public int searchUserInformationPage(String submit_id, String id, String name, String workcell_id, String start_date, String end_date) {
        return adminMapper.getUserInformationPage(submit_id, id, name, workcell_id, start_date, end_date);
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
        return adminMapper.searchAllUserInformation(submit_id, id, name, workcell_id, start_date, end_date);
    }

    public List<JigPart> getPart() {
        return adminMapper.getPart();
    }

    public List<JigModel> getModel() {
        return adminMapper.getModel();
    }

    public List<CnEn> getCnEn() {
        return adminMapper.getCnEn();
    }

    public int editCnEn(String id, String chinese) {
        return adminMapper.editCnEn(id,chinese);
    }
}
