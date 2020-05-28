package com.jig.mapper;

import com.jig.entity.jig.JigDefinition;
import com.jig.entity.jig.JigEntity;
import com.jig.entity.jig.JigPosition;
import com.jig.entity.jig.JigStock;
import com.jig.entity.out.OutgoSubmit;
import com.jig.entity.out.OutgoingJig;
import com.jig.entity.repair.RepairJig;
import com.jig.entity.repair.RepairJigHistory;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface NaiveMapper {

    /**
     * 初级用户获取 工夹具出库页面的工夹具存放位置list
     * @param workcell_id 工作部门
     * @return
     */
    List<JigPosition> navieGetLocationList(@Param("workcell_id") String workcell_id);

    //
    /*List<JigEntity> navie_get_jig_list_by_location(@Param("jig_cabinet_id") String jig_cabinet,
                                                   @Param("jig_location_id") String jig_location_id,
                                                   @Param("worcell_id") String workcell);*/

    /**
     * 初级用户 根据选择的 夹具柜号和区号确定 工夹具的种类,名字,数目
     * @param jig_cabinet_id
     * @param jig_location_id
     * @param workcell_id
     * @return
     */
    List<JigStock> navieGetJigListByLocation(@Param("jig_cabinet_id") String jig_cabinet_id,
                                             @Param("jig_location_id") String jig_location_id,
                                             @Param("workcell_id") String workcell_id);

    /**
     * 初级用户 根据选择的 夹具柜号和区号 确定该code的工夹具list
     * @param jig_cabinet_id
     * @param jig_location_id
     * @param code
     * @return
     */
    List<JigEntity> navieGetJigEntityListByLocation(@Param("jig_cabinet_id") String jig_cabinet_id,
                                                    @Param("jig_location_id") String jig_location_id,
                                                    @Param("code") String code);

    /**
     * 初级用户 根据选择的工夹具存放区域 和 搜索条件来 确定工夹具list
     * @param jig_cabinet_id
     * @param jig_location_id
     * @param code
     * @param name
     * @param user_for
     * @param workcell_id
     * @return
     */
    List<JigStock> navieGetJigListBySelect(@Param("jig_cabinet_id") String jig_cabinet_id,
                                                @Param("jig_location_id") String jig_location_id,
                                                @Param("code") String code,
                                                @Param("name") String name,
                                                @Param("user_for") String user_for,
                                                @Param("workcell_id") String workcell_id);

    //初级用户 根据夹具柜号和区号确定 检点的工夹具list
    List<JigEntity> navieGetMaintenanceJigDetailList(@Param("jig_cabinet_id") String jig_cabinet_id,
                                                          @Param("jig_location_id") String jig_location_id,
                                                          @Param("code") String code);


    /**
     * 工夹具出库
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param submit_id 申请人id
     * @param rec_id 记录人id
     */
    void naiveOutgoJig(@Param("code") String code,
                       @Param("seq_id") String seq_id,
                       @Param("submit_id") String submit_id,
                       @Param("rec_id") String rec_id);

    /**
     * 获得已出库工夹具OutgoingJig对象
     *
     * @return 已出库工夹具OutgoingJig对象
     */
    List<OutgoingJig> naiveGetOutgoingJig(@Param("page_number") int page_number);

    /**
     * 获得已出库工夹具记录数
     *
     * @return 已出库工夹具记录数
     */
    int getOutgoingJigPage();

    /**
     * 工夹具入库
     *
     * @param id     outgoing_jig表id
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     */
    void naiveReturnJig(@Param("id") String id, @Param("code") String code, @Param("seq_id") String seq_id, @Param("rec_id") String rec_id);

    /**
     * 删除对应的记录
     *
     * @param id outgoing_jig表id
     */
    void naiveDeleteOutgoingJig(@Param("id") String id);

    List<RepairJigHistory> naiveGetRepairHistory(@Param("submit_id") String submit_id, @Param("page_number") int page_number);

    int naiveGetRepairHistoryPage(@Param("submit_id") String submit_id);

    /**
     * 初级用户获取报修记录
     *
     * @param submit_id
     * @param page_number
     * @return
     */
    List<RepairJig> naiveGetRepairList(@Param("submit_id") String submit_id, @Param("page_number") int page_number);

    /**
     * @param submit_id
     * @return
     */
    int naiveGetRepairListPage(@Param("submit_id") String submit_id);

    /**
     * 初级用户提交报修
     *
     * @param code
     * @param seq_id
     * @param submit_id
     * @param repair_reason
     * @param pathName
     */
    void naiveSubmitRepair(@Param("code") String code, @Param("seq_id") String seq_id, @Param("submit_id") String submit_id, @Param("repair_reason") String repair_reason, @Param("pathName") String pathName);
    /**
     * 获取查询到的对应页数的List对象
     *
     * @param code       工夹具代码
     * @param name       工夹具名字
     * @param workcell   工作部门
     * @param family     类别
     * @param userFor    用途
     * @param pageNumber 页码
     * @return 查询到的对应页数的List对象
     */
    List<JigDefinition> naiveSearchJigDefinition(@Param("code") String code, @Param("name") String name, @Param("workcell") String workcell, @Param("family") String family, @Param("userFor") String userFor, @Param("pageNumber") int pageNumber, @Param("page_size") int page_size);

    /**
     * 获取查询到的结果总页数
     *
     * @param code     工夹具代码
     * @param name     工夹具名字
     * @param workcell 工作部门
     * @param family   类别
     * @param userFor  用途
     * @return 查询到的结果总页数
     */
    int naiveSearchJigDefinitionPage(@Param("code") String code, @Param("name") String name, @Param("workcell") String workcell, @Param("family") String family, @Param("userFor") String userFor);

    /**
     * 通过Mybatis的方法来实现查询到所有的工夹具List
     *
     * @param code     工夹具代码
     * @param name     工夹具名字
     * @param workcell 工作部门
     * @param family   类别
     * @param userFor  用途
     * @return 查询到的所有结果的List对象
     */
    List<JigDefinition> searchAllJigDefinition(@Param("code") String code, @Param("name") String name, @Param("workcell") String workcell, @Param("family") String family, @Param("userFor") String userFor);
    /**
     * 获取出库申请集合
     *
     * @return 出库申请集合
     */
    List<OutgoSubmit> naiveGetOutgoingSubmit(@Param("page_number") int page_number);

    /**
     * 获取出库记录条数
     *
     * @return 出库记录条数
     */
    int naiveGetOutgoSubmitPage();

}
