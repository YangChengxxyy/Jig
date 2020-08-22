package com.jig.service;

import com.jig.entity.common.User;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.jig.JigEntity;
import com.jig.entity.jig.JigPosition;
import com.jig.entity.jig.JigStock;
import com.jig.entity.out.OutgoSubmit;
import com.jig.entity.out.OutgoingJig;
import com.jig.entity.purchase.PendingPuchaseIncomeSubmit;
import com.jig.entity.repair.MaintenanceSubmit;
import com.jig.entity.repair.PendingRepairSubmit;
import com.jig.entity.repair.RepairJig;
import com.jig.entity.repair.RepairJigHistory;
import com.jig.entity.scrap.PendingScrapSubmit;
import com.jig.mapper.NaiveMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NaiveService {
    @Autowired
    private NaiveMapper naiveMapper;


    public int naive_input_purchase_jig(String bill_no, String code, int seq_id, String jig_cabinet, String location, String description, String user_id) {
        return naiveMapper.naive_input_purchase_jig(bill_no, code, seq_id, jig_cabinet, location, description, user_id);
    }

    /**
     * 将采购入库的工夹具入库
     *
     * @param bill_no     相关订单单据号
     * @param code
     * @param seq_id
     * @param jig_cabinet 夹具柜id
     * @param location    存放区域
     * @param bin         bin位
     * @param description 写入出入库历史的描述信息
     * @param user_id     入库人
     * @return
     */
    public int naiveInputJigEntity(String bill_no, String code, int seq_id, String jig_cabinet, String location, String bin, String description, String user_id) {
        return naiveMapper.naiveInputJigEntity(bill_no, code, seq_id, jig_cabinet, location, bin, description, user_id);
    }

    //初级用户获取 工夹具出库页面的工夹具存放位置list
    public List<JigPosition> navieGetLocationList(String workcell_id) {
        return naiveMapper.navieGetLocationList(workcell_id);
    }

    //初级用户 根据选择的 夹具柜号和区号确定 工夹具list
    public List<JigStock> navieGetJigListByLocation(String jig_cabinet_id, String jig_location_id, String workcell, int page_number, int page_size) {
        return naiveMapper.navieGetJigListByLocation(jig_cabinet_id, jig_location_id, workcell, page_number, page_size);
    }

    public List<List<?>> navieGetJigListByLocationPages(String jig_cabinet_id, String jig_location_id, String workcell) {
        return naiveMapper.navieGetJigListByLocationPages(jig_cabinet_id, jig_location_id, workcell);
    }

    //初级用户 根据选择的 夹具柜号和区号 确定该code的工夹具list
    public List<JigEntity> navieGetJigEntityListByLocation(String jig_cabinet_id, String jig_location_id, String code) {
        return naiveMapper.navieGetJigEntityListByLocation(jig_cabinet_id, jig_location_id, code);
    }

    //初级用户 根据选择的工夹具存放区域 和 搜索条件来 确定工夹具list
    public List<JigStock> navieGetJigListBySelect(String jig_cabinet_id, String jig_location_id, String code, String name, String user_for, String workcell_id, int page_number, int page_size) {
        return naiveMapper.navieGetJigListBySelect(jig_cabinet_id, jig_location_id, code, name, user_for, workcell_id, page_number, page_size);
    }

    //获取记录总条数
    public List<List<?>> navieGetJigListBySelectPages(String jig_cabinet_id, String jig_location_id, String code, String name, String user_for, String workcell_id) {
        return naiveMapper.navieGetJigListBySelectPages(jig_cabinet_id, jig_location_id, code, name, user_for, workcell_id);
    }

    /**
     * 根据code和seq_id来获取该工夹具实体的出入库历史list
     *
     * @param code
     * @param seq_id
     * @return
     */
    public List<OutgoSubmit> naive_get_out_and_in_history_list(String code, String seq_id) {
        return naiveMapper.naive_get_out_and_in_history_list(code, seq_id);
    }

    /**
     * 根据code和seq_id来获取该工夹具实体的检点历史记录list
     *
     * @param code
     * @param seq_id
     * @return
     */
    public List<MaintenanceSubmit> naive_get_maintenance_history_list(String code, String seq_id) {
        return naiveMapper.naive_get_maintenance_history_list(code, seq_id);
    }

    //改变工夹具的存放位置
    public int naive_change_jig_position(String jig_id, String code, String seq_id, String old_position, String jig_cabinet_id, String location_id, String bin, User user) {
        return naiveMapper.naive_change_jig_position(jig_id, code, seq_id, old_position, jig_cabinet_id, location_id, bin, user);
    }

    //初级用户 根据夹具柜号和区号确定 检点的工夹具list
    public List<JigEntity> navieGetMaintenanceJigDetailList(String jig_cabinet_id, String jig_location_id, String code) {
        return naiveMapper.navieGetMaintenanceJigDetailList(jig_cabinet_id, jig_location_id, code);
    }

    //工夹具出库
    public void naiveOutgoJig(String jig_id, String code, String seq_id, String submit_id, String production_line_id, String rec_id) {
        naiveMapper.naiveOutgoJig(jig_id, code, seq_id, submit_id, production_line_id, rec_id);
    }

    //工夹具检点
    public int naive_maintenance_jig(String code, String seq_id, String reason, int is_repair, String user_id) {
        return naiveMapper.naive_maintenance_jig(code, seq_id, reason, is_repair, user_id);
    }

    //获取已经出库的工夹具list
    public List<OutgoingJig> naiveGetOutgoingJigList(String code, String name, String start_date, String end_date, String user_for, int page_number, int page_size, String workcell_id) {
        return naiveMapper.naiveGetOutgoingJigList(code, name, start_date, end_date, user_for, (page_number - 1) * page_size, page_size, workcell_id);
    }

    //获取已经出库的工夹具list所有(没有页数限制)
    public List<OutgoingJig> naiveGetOutgoingJigListAllPages(String code, String name, String start_date, String end_date, String user_for, String workcell_id) {
        return naiveMapper.naiveGetOutgoingJigListAllPages(code, name, start_date, end_date, user_for, workcell_id);
    }

    public int naiveGetOutgoingJigListPage(String code, String name, String start_date, String end_date, String user_for, String workcell_id) {
        return naiveMapper.getOutgoingJigListPage(code, name, start_date, end_date, user_for, workcell_id);
    }


    public void naiveReturnJig(String id, String code, String seq_id, String submit_id, String rec_id, String production_line_id) {
        naiveMapper.naiveReturnJig(id, code, seq_id, submit_id, rec_id, production_line_id);
        naiveMapper.naiveDeleteOutgoingJig(id);
    }

    public List<RepairJigHistory> naiveGetRepairHistory(String submit_id, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return naiveMapper.naiveGetRepairHistory(submit_id, page_number, page_size);
    }

    public int naiveGetRepairHistoryPage(String submit_id) {
        return naiveMapper.naiveGetRepairHistoryPage(submit_id);
    }

    //naive获取报修列表
    public List<RepairJig> naiveGetRepairList(String submit_id, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return naiveMapper.naiveGetRepairList(submit_id, page_number, page_size);
    }

    //naive获取报修列表页数
    public int naiveGetRepairListPage(String submit_id) {
        return naiveMapper.naiveGetRepairListPage(submit_id);
    }

    //naive提交报修
    public void naiveSubmitRepair(RepairJig repair, String pathName) {
        naiveMapper.naiveSubmitRepair(repair, pathName);
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

    /**
     * 通过code获取该工夹具代码code的最大序列号seq_id
     *
     * @param code
     * @return seq_id
     */
    public int getMaxSeqId(String code) {
        return naiveMapper.getMaxSeqId(code);
    }

    public List<OutgoingJig> naiveGetAllOutgoingJigList(String code, String name, String start_date, String end_date, String user_for, String workcell_id) {
        return naiveMapper.naiveGetAllOutgoingJigList(code, name, start_date, end_date, user_for, workcell_id);
    }

    public double naive_get_jig_trouble_percent_all() {
        return naiveMapper.naive_get_jig_trouble_percent_all();
    }

    public List<MaintenanceSubmit> naive_get_trouble_maintenance_list(int is_repair) {
        return naiveMapper.naive_get_trouble_maintenance_list(is_repair);
    }

    public int naive_get_trouble_reason_count_by_reason(String code, String seq_id, String reason) {
        return naiveMapper.naive_get_trouble_reason_count_by_reason(code, seq_id, reason);
    }

    public int naive_get_reason_count_in_all(String reason) {
        return naiveMapper.naive_get_reason_count_in_all(reason);
    }

    public List<PendingPuchaseIncomeSubmit> naive_get_pending_purchase_submit_list(String workcell_id, int status, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return naiveMapper.naive_get_pending_purchase_submit_list(workcell_id, status, page_number, page_size);
    }

    public int naive_get_pending_purchase_submit_list_pages(String workcell_id, int status) {
        return naiveMapper.naive_get_pending_purchase_submit_list_pages(workcell_id, status);
    }

    public List<PendingScrapSubmit> naive_get_pending_scrap_submit_list(String workcell_id, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return naiveMapper.naive_get_pending_scrap_submit_list(workcell_id, page_number, page_size);
    }

    public int naive_get_pending_scrap_submit_list_pages(String workcell_id) {
        return naiveMapper.naive_get_pending_scrap_submit_list_pages(workcell_id);
    }

    public int naive_scrap_jig(String code, String seq_id, String jig_id, String submit_id, String user_id) {
        return naiveMapper.naive_scrap_jig(code, seq_id, jig_id, submit_id, user_id);
    }

    public List<PendingRepairSubmit> naive_get_pending_repair_submit_list(String workcell_id, int page_number, int page_size) {
        page_number = (page_number - 1) * page_size;
        return naiveMapper.naive_get_pending_repair_submit_list(workcell_id, page_number, page_size);
    }

    public int naive_get_pending_repair_submit_list_pages(String workcell) {
        return naiveMapper.naive_get_pending_repair_submit_list_pages(workcell);
    }

    public List<User> naive_get_repair_man_list(String workcell_id) {
        return naiveMapper.naive_get_repair_man_list(workcell_id);
    }

    public int naive_choose_repair_man(String repair_man_id, String repair_submit_id) {
        return naiveMapper.naive_choose_repair_man(repair_man_id, repair_submit_id);
    }

    public void naive_repair_finish(PendingRepairSubmit submit) {
        naiveMapper.naive_repair_finish(submit);
    }

    public RepairJigHistory getARepairHistory(String id) {
        return naiveMapper.getARepairHistory(id);
    }

    public PendingRepairSubmit naive_get_a_pending_repair_submit(String id) {
        return naiveMapper.naive_get_a_pending_repair_submit(id);
    }
}
