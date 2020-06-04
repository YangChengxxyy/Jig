package com.jig.service;

import com.jig.entity.jig.JigDefinition;
import com.jig.entity.jig.JigEntity;
import com.jig.entity.jig.JigPosition;
import com.jig.entity.jig.JigStock;
import com.jig.entity.out.OutgoSubmit;
import com.jig.entity.out.OutgoingJig;
import com.jig.entity.repair.RepairJig;
import com.jig.entity.repair.RepairJigHistory;
import com.jig.mapper.NaiveMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NaiveService {
    @Autowired
    private NaiveMapper naiveMapper;

    //初级用户获取 工夹具出库页面的工夹具存放位置list
    public List<JigPosition> navieGetLocationList(String workcell_id) {
        return naiveMapper.navieGetLocationList(workcell_id);
    }

    //初级用户 根据选择的 夹具柜号和区号确定 工夹具list
    public List<JigStock> navieGetJigListByLocation(String jig_cabinet_id, String jig_location_id, String workcell) {
        return naiveMapper.navieGetJigListByLocation(jig_cabinet_id, jig_location_id, workcell);
    }

    //初级用户 根据选择的 夹具柜号和区号 确定该code的工夹具list
    public List<JigEntity> navieGetJigEntityListByLocation(String jig_cabinet_id, String jig_location_id, String code) {
        return naiveMapper.navieGetJigEntityListByLocation(jig_cabinet_id, jig_location_id, code);
    }

    //初级用户 根据选择的工夹具存放区域 和 搜索条件来 确定工夹具list
    public List<JigStock> navieGetJigListBySelect(String jig_cabinet_id, String jig_location_id, String code, String name, String user_for, String workcell) {
        return naiveMapper.navieGetJigListBySelect(jig_cabinet_id, jig_location_id, code, name, user_for, workcell);
    }

    //初级用户 根据夹具柜号和区号确定 检点的工夹具list
    public List<JigEntity> navieGetMaintenanceJigDetailList(String jig_cabinet_id, String jig_location_id, String code) {
        return naiveMapper.navieGetMaintenanceJigDetailList(jig_cabinet_id, jig_location_id, code);
    }

    //工夹具出库
    public void naiveOutgoJig(String code, String seq_id, String submit_id, String rec_id) {
        naiveMapper.naiveOutgoJig(code, seq_id, submit_id, rec_id);
    }

    //工夹具检点
    public int naive_maintenance_jig(String code, String seq_id, String reason, String user_id) {
        return naiveMapper.naive_maintenance_jig(code, seq_id, reason, user_id);
    }

    //获取已经出库的工夹具list
    public List<OutgoingJig> naiveGetOutgoingJigList(String code, String name, String start_date, String end_date, String user_for,int page_number, int page_size, String workcell_id) {
        return naiveMapper.naiveGetOutgoingJigList(code, name, start_date, end_date, user_for,page_number,page_size,workcell_id);
    }

    public int naiveGetOutgoingJigListPage(String code, String name, String start_date, String end_date, String user_for, String workcell_id) {
        return naiveMapper.getOutgoingJigListPage(code, name, start_date, end_date, user_for, workcell_id);
    }


    public void naiveReturnJig(String id, String code, String seq_id, String submit_id, String rec_id) {
        naiveMapper.naiveReturnJig(id, code, seq_id, submit_id, rec_id);
        naiveMapper.naiveDeleteOutgoingJig(id);
    }

    public List<RepairJigHistory> naiveGetRepairHistory(String submit_id, int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return naiveMapper.naiveGetRepairHistory(submit_id, page_number,page_size);
    }

    public int naiveGetRepairHistoryPage(String submit_id) {
        return naiveMapper.naiveGetRepairHistoryPage(submit_id);
    }

    //naive获取报修列表
    public List<RepairJig> naiveGetRepairList(String submit_id, int page_number,int page_size) {
        page_number = (page_number - 1) * page_size;
        return naiveMapper.naiveGetRepairList(submit_id, page_number,page_size);
    }

    //naive获取报修列表条数
    public int naiveGetRepairListPage(String submit_id) {
        return naiveMapper.naiveGetRepairListPage(submit_id);
    }

    //naive提交报修
    public void naiveSubmitRepair(String code, String seq_id, String submit_id, String repair_reason, String pathName) {
        naiveMapper.naiveSubmitRepair(code, seq_id, submit_id, repair_reason, pathName);
    }


    public List<JigDefinition> naiveSearchJigDefinition(String code, String name, String workcell, String family, String userFor, int pageNumber, int page_size) {
        pageNumber = (pageNumber - 1) * page_size;
        return naiveMapper.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber, page_size);
    }

    public int naiveSearchJigDefinitionPage(String code, String name, String workcell, String family, String userFor) {
        return naiveMapper.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor);

    }

    public List<JigDefinition> searchAllJigDefinition(String code, String name, String workcell, String family, String userFor) {
        return naiveMapper.searchAllJigDefinition(code, name, workcell, family, userFor);
    }

    public List<OutgoSubmit> naiveGetOutgoingSubmit(int page_number) {
        page_number = (page_number - 1) * 5;
        return naiveMapper.naiveGetOutgoingSubmit(page_number);
    }

    public int naiveGetOutgoingSubmitPage() {
        int a = naiveMapper.naiveGetOutgoSubmitPage();
        return (int) Math.ceil(a / 5.0);
    }
}
