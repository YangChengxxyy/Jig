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
    List<JigDefinition> searchJigDefinition(@Param("code") String code, @Param("name") String name, @Param("workcell") String workcell, @Param("family") String family, @Param("userFor") String userFor, @Param("pageNumber") int pageNumber);

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
    int searchJigDefinitionPage(@Param("code") String code, @Param("name") String name, @Param("workcell") String workcell, @Param("family") String family, @Param("userFor") String userFor);

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
    List<OutgoSubmit> getOutgoSubmit();

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
    void outgoJig(@Param("id") String id, @Param("code") String code, @Param("seq_id") String seq_id, @Param("rec_id") String rec_id);

    /**
     * 删除对应记录
     *
     * @param id outgo_submit表id
     */
    void deleteOutgoSubmit(@Param("id") String id);

    /**
     * 获得已出库工夹具OutgoingJig对象
     *
     * @return 已出库工夹具OutgoingJig对象
     */
    List<OutgoingJig> getOutgoingJig();

    /**
     * 工夹具入库
     *
     * @param id     outgoing_jig表id
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     */
    void returnJig(@Param("id") String id, @Param("code") String code, @Param("seq_id") String seq_id, @Param("rec_id") String rec_id);

    /**
     * 删除对应的记录
     *
     * @param id outgoing_jig表id
     */
    void deleteOutgoingJig(@Param("id") String id);

    /**
     * 添加采购入库申请
     *
     * @param submit_id          申请人id
     * @param bill_no            订单号
     * @param production_line_id 产线id
     * @param code               工夹具代码
     * @param count              数量
     */
    void addShoplist(@Param("submit_id") String submit_id, @Param("bill_no") String bill_no, @Param("production_line_id") String production_line_id, @Param("code") String code, @Param("count") String count);

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
    List<PurchaseIncomeSubmit> getPurchaseIncomeSubmitList(@Param("page_number") int page_number);

    void updatePurchaseIncomeSubmit(@Param("id") String id, @Param("code") String code, @Param("count") String count, @Param("production_line_id") String production_line_id);

    int getPurchaseIncomeSubmitListPage(@Param("page_number") int page_number);
}
