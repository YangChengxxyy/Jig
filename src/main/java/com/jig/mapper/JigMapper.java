package com.jig.mapper;

import com.jig.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface JigMapper {

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
    List<JigDefinition> naiveSearchJigDefinition(@Param("code") String code, @Param("name") String name, @Param("workcell") String workcell, @Param("family") String family, @Param("userFor") String userFor, @Param("pageNumber") int pageNumber);

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
     * 获取单个JigDefinition对象
     *
     * @param id id
     * @return 单个JigDefinition对象
     */
    JigDefinition getSimpleJigDefinition(@Param("id") String id);

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

    /**
     * 获取工夹具位置
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @return Position对象
     */
    Position getPosition(@Param("code") String code, @Param("seq_id") String seq_id);

    /**
     * 工夹具出库
     *
     * @param id     outgo_submit表id
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     */
    void naiveOutgoJig(@Param("id") String id, @Param("code") String code, @Param("seq_id") String seq_id, @Param("rec_id") String rec_id);

    /**
     * 删除对应记录
     *
     * @param id outgo_submit表id
     */
    void naiveDeleteOutgoSubmit(@Param("id") String id);

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

    /**
     * 添加采购入库申请
     *
     * @param submit_id          申请人id
     * @param bill_no            订单号
     * @param production_line_id 产线id
     * @param code               工夹具代码
     * @param count              数量
     */
    void highAddShoplist(@Param("submit_id") String submit_id, @Param("bill_no") String bill_no, @Param("production_line_id") String production_line_id, @Param("code") String code, @Param("count") String count);

    /**
     * 获取产线列表
     *
     * @return 产线列表
     */
    List<ProductionLine> getProductionLineList();

    /**
     * 获取工夹具代码列表
     *
     * @return 工夹具代码列表
     */
    List<String> getCodeList();

    /**
     * 获取采购入库申请列表
     *
     * @return 采购入库申请列表
     */
    List<PurchaseIncomeSubmit> highGetPurchaseIncomeSubmitList(@Param("page_number") int page_number);

    /**
     * 修改入库申请单
     *
     * @param id                 purchase_income_submit表id
     * @param code               工家具代码
     * @param count              数量
     * @param production_line_id 产线id
     */
    void highUpdatePurchaseIncomeSubmit(@Param("id") String id, @Param("code") String code, @Param("count") String count, @Param("production_line_id") String production_line_id);

    /**
     * 获得入库申请单页数页数
     *
     * @return 入库申请单页数页数
     */
    int highGetPurchaseIncomeSubmitListPage();

    /**
     * 获取查询到的入库申请历史
     *
     * @param bill_no            单据号
     * @param submit_name        申请人
     * @param code               工夹具代码
     * @param production_line_id 产线id
     * @param status             状态
     * @param start_date         最早日期
     * @param end_date           最晚日期
     * @param page_number        页码
     * @return 查询到的入库申请历史
     */
    List<PurchaseIncomeHistory> highSearchPurchaseIncomeHistory(@Param("bill_no") String bill_no, @Param("submit_name") String submit_name,
                                                                @Param("code") String code, @Param("production_line_id") String production_line_id,
                                                                @Param("status") String status, @Param("start_date") String start_date,
                                                                @Param("end_date") String end_date, @Param("page_number") int page_number);

    /**
     * 获取查询到的入库申请历史总页数
     *
     * @param bill_no            单据号
     * @param submit_name        申请人
     * @param code               工夹具代码
     * @param production_line_id 产线id
     * @param status             状态
     * @param start_date         最早日期
     * @param end_date           最晚日期
     * @return 查询到的入库申请历史总页数
     */
    int highSearchPurchaseIncomeHistoryPage(@Param("bill_no") String bill_no, @Param("submit_name") String submit_name,
                                            @Param("code") String code, @Param("production_line_id") String production_line_id,
                                            @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date);

    /**
     * 所有的入库申请历史
     *
     * @param bill_no            单据号
     * @param submit_name        申请人
     * @param code               工夹具代码
     * @param production_line_id 产线id
     * @param status             状态
     * @param start_date         最早日期
     * @param end_date           最晚日期
     * @return 查询到的所有的入库申请历史
     */
    List<PurchaseIncomeHistory> highSearchAllPurchaseIncomeHistory(@Param("bill_no") String bill_no, @Param("submit_name") String submit_name, @Param("code") String code, @Param("production_line_id") String production_line_id, @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date);

    /**
     * high删除入库申请单
     * @param id
     */
    void highDeletePurchaseSubmit(@Param("id") String id);

    /**
     * high获取报修申请记录
     * @param submit_id 申请人id
     * @return 获取报修申请记录
     */
    List<RepairJig> highGetRepairJig(String submit_id);
}
