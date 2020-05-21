package com.jig.service;

import com.jig.entity.*;
import com.jig.mapper.NaiveMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NaiveService {
    @Autowired
    private NaiveMapper naiveMapper;

    //初级用户获取 工夹具出库页面的工夹具存放位置list
    public List<JigPosition> navieGetLocationList(String workcell_id){
        return naiveMapper.navieGetLocationList(workcell_id);
    }

    //初级用户 根据选择的 夹具柜号和区号确定 工夹具list
    public List<JigStock> navieGetJigListByLocation(String jig_cabinet_id, String jig_location_id, String workcell){
        return naiveMapper.navieGetJigListByLocation(jig_cabinet_id,jig_location_id,workcell);
    }

    //初级用户 根据选择的 夹具柜号和区号 确定该code的工夹具list
    public List<JigEntity> navieGetJigEntityListByLocation(String jig_cabinet_id,String jig_location_id,String code){
        return naiveMapper.navieGetJigEntityListByLocation(jig_cabinet_id,jig_location_id,code);
    }

    //初级用户 根据选择的工夹具存放区域 和 搜索条件来 确定工夹具list
    public List<JigStock> navieGetJigListBySelect(String jig_cabinet_id,String jig_location_id,String code,String name,String user_for,String workcell){
        return naiveMapper.navieGetJigListBySelect(jig_cabinet_id,jig_location_id,code,name,user_for,workcell);
    }

    //初级用户 根据夹具柜号和区号确定 检点的工夹具list
    public List<JigEntity> navieGetMaintenanceJigDetailList(String jig_cabinet_id,String jig_location_id,String code){
        return naiveMapper.navieGetMaintenanceJigDetailList(jig_cabinet_id,jig_location_id,code);
    }

    public void naiveOutgoJig(String code, String seq_id, String submit_id,String rec_id) {
        naiveMapper.naiveOutgoJig(code, seq_id, submit_id,rec_id);
    }

    public List<OutgoingJig> naiveGetOutgoingJig(int page_number) {
        page_number = (page_number - 1) * 5;
        return naiveMapper.naiveGetOutgoingJig(page_number);
    }

    public int naiveGetOutgoingJigPage() {
        int a = naiveMapper.getOutgoingJigPage();
        return (int) Math.ceil(a / 5.0);
    }

    public void naiveReturnJig(String id, String code, String seq_id, String rec_id) {
        naiveMapper.naiveReturnJig(id, code, seq_id, rec_id);
        naiveMapper.naiveDeleteOutgoingJig(id);
    }

    public List<RepairJigHistory> naiveGetRepairHistory(String submit_id, int page_number) {
        page_number = (page_number - 1) * 5;
        return naiveMapper.naiveGetRepairHistory(submit_id, page_number);
    }

    public int naiveGetRepairHistoryPage(String submit_id) {
        int a = naiveMapper.naiveGetRepairHistoryPage(submit_id);
        return (int) Math.ceil(a / 5.0);
    }

    //naive获取报修列表
    public List<RepairJig> naiveGetRepairList(String submit_id, int page_number) {
        page_number = (page_number - 1) * 5;
        return naiveMapper.naiveGetRepairList(submit_id, page_number);
    }

    //naive获取报修列表页数
    public int naiveGetRepairListPage(String submit_id) {
        int a = naiveMapper.naiveGetRepairListPage(submit_id);
        return (int) Math.ceil(a / 5.0);
    }

    //naive提交报修
    public void naiveSubmitRepair(String code, String seq_id, String submit_id, String repair_reason, String pathName) {
        naiveMapper.naiveSubmitRepair(code, seq_id, submit_id, repair_reason, pathName);
    }
}
