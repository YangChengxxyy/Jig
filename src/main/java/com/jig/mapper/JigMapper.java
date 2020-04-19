package com.jig.mapper;

import com.jig.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

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
    //void highAddShoplist(@Param("submit_id") String submit_id, @Param("bill_no") String bill_no, @Param("production_line_id") String production_line_id, @Param("code") String code, @Param("count") String count);

    void highAddShoplist(@Param("purchase_submit") PurchaseIncomeSubmit purchase_submit);
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
    List<PurchaseIncomeSubmit> highGetPurchaseIncomeSubmitList(@Param("page_number") int page_number, @Param("page_size") int page_size);

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
                                                                @Param("end_date") String end_date, @Param("page_number") int page_number,
                                                                @Param("page_size") int page_size);

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
     *
     * @param id purchase_submit表id
     */
    void highDeletePurchaseSubmit(@Param("id") String id);

    /**
     * high获取报修申请记录
     *
     * @param id          高级用户id
     * @param page_number 处理后页码
     * @return 获取报修申请记录
     */
    List<RepairJig> highGetRepairJig(@Param("id") String id, @Param("page_number") int page_number, @Param("page_size") int page_size);

    /**
     * high获取报修申请记录条数
     *
     * @return 获取报修申请记录条数
     */
    int highGetRepairJigPage(@Param("id") String id);

    /**
     * high搜索历史报修记录
     *
     * @param code        工夹具代码
     * @param seq_id      工夹具序列号
     * @param submit_name 申请时间
     * @param status      状态
     * @param start_date  最早时间
     * @param end_date    最晚时间
     * @param page_number 页码
     * @return 搜索到历史报修记录
     */
    List<RepairJigHistory> highSearchRepairHistory(@Param("id") String id, @Param("code") String code, @Param("seq_id") String seq_id, @Param("submit_name") String submit_name, @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date, @Param("page_number") int page_number, @Param("page_size") int page_size);

    List<RepairJigHistory> highSearchAllRepairHistory(@Param("id") String id, @Param("code") String code, @Param("seq_id") String seq_id, @Param("submit_name") String submit_name, @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date);

    /**
     * high搜索历史报修记录条数
     *
     * @param code        工夹具代码
     * @param seq_id      工夹具序列号
     * @param submit_name 申请时间
     * @param status      状态
     * @param start_date  最早时间
     * @param end_date    最晚时间
     * @return 搜索到历史报修记录条数
     */
    int highSearchRepairHistoryPage(@Param("id") String id, @Param("code") String code, @Param("seq_id") String seq_id, @Param("submit_name") String submit_name, @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date);

    /**
     * high获取报废记录
     *
     * @param submit_id   申请人id
     * @param page_number 页码
     * @return 报废记录
     */
    List<ScrapSubmit> highGetScrap(@Param("submit_id") String submit_id, @Param("page_number") int page_number, @Param("page_size") int page_size);

    /**
     * high获取报废记录条数
     *
     * @param submit_id 申请人id
     * @return 报废记录条数
     */
    int highGetScrapPage(@Param("submit_id") String submit_id);

    /**
     * high搜索历史报废
     *
     * @param code         工夹具代码
     * @param seq_id       工夹具序列号
     * @param submit_id    申请人id
     * @param scrap_reason 报废原因
     * @param status       状态
     * @param start_date   最早日期
     * @param end_date     最晚日期
     * @param page_number  页码
     * @return 搜索到的历史报废记录
     */
    List<ScrapHistory> highSearchScrapHistory(@Param("code") String code, @Param("seq_id") String seq_id, @Param("submit_id") String submit_id, @Param("scrap_reason") String scrap_reason, @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date, @Param("page_number") int page_number, @Param("page_size") int page_size);

    /**
     * high搜索全部历史报废
     *
     * @param code         工夹具代码
     * @param seq_id       工夹具序列号
     * @param submit_id    申请人id
     * @param scrap_reason 报废原因
     * @param status       状态
     * @param start_date   最早日期
     * @param end_date     最晚日期
     * @return 搜索到的全部报废历史
     */
    List<ScrapHistory> highSearchAllScrapHistory(@Param("code") String code, @Param("seq_id") String seq_id, @Param("submit_id") String submit_id, @Param("scrap_reason") String scrap_reason, @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date);

    /**
     * high搜索历史报废
     *
     * @param code       工夹具代码
     * @param seq_id     序列号
     * @param submit_id  申请人id
     * @param status     状态
     * @param start_date 最早日期
     * @param end_date   最晚日期
     * @return 历史报废记录
     */
    int highSearchScrapHistoryPage(@Param("code") String code, @Param("seq_id") String seq_id, @Param("submit_id") String submit_id, @Param("scrap_reason") String scrap_reason, @Param("status") String status, @Param("start_date") String start_date, @Param("end_date") String end_date);

    /**
     * 高级用户提交报废
     *
     * @param code
     * @param seq_id
     * @param submit_id
     * @param scrap_reason
     * @param pathName
     */
    void highSubmitScrap(@Param("scrap_submit") ScrapSubmit scrap_submit, @Param("pathName") String pathName);

    /**
     * 高级用户删除报废
     *
     * @param id
     * @return
     */
    int highDeleteScrap(@Param("id") String id);

    /**
     * 查询seq_id
     *
     * @param code
     * @return
     */
    List<String> codeGetSeqId(@Param("code") String code);

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
     * 初级获取历史报修记录
     *
     * @param submit_id
     * @param page_number
     * @return
     */
    List<RepairJigHistory> naiveGetRepairHistory(@Param("submit_id") String submit_id, @Param("page_number") int page_number);

    int naiveGetRepairHistoryPage(@Param("submit_id") String submit_id);

    int highGetRepairCount(@Param("submit_id") String submit_id);

    List<Map<String, Object>> highGetRepairBasic(String submit_id);

    void highAgreeRepairSubmit(@Param("id") int id, @Param("submit_id") String submit_id);

    void highDisagreeRepairSubmit(@Param("id") int id, @Param("submit_id") String submit_id, @Param("reason") String reason);

    List<String> codeGetInSeqId(String code);
}
