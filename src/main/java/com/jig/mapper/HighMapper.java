package com.jig.mapper;

import com.jig.entity.purchase.PurchaseIncomeHistory;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.repair.RepairJig;
import com.jig.entity.repair.RepairJigHistory;
import com.jig.entity.scrap.ScrapHistory;
import com.jig.entity.scrap.ScrapSubmit;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface HighMapper {
    /**
     * 添加采购入库申请s
     */
    //void highAddShoplist(@Param("submit_id") String submit_id, @Param("bill_no") String bill_no, @Param("production_line_id") String production_line_id, @Param("code") String code, @Param("count") String count);

    void highAddShoplist(@Param("purchase_submit") PurchaseIncomeSubmit purchase_submit);

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
     * @param pathName
     */
    int highSubmitScrap(@Param("scrap_submit") ScrapSubmit scrap_submit, @Param("pathName") String pathName);

    /**
     * 高级用户删除报废
     *
     * @param id
     * @return
     */
    int highDeleteScrap(@Param("id") String id);

    /**
     * 初级获取历史报修记录
     *
     * @param submit_id
     * @return
     */
    int highGetRepairCount(@Param("submit_id") String submit_id);

    List<Map<String, Object>> highGetRepairBasic(String submit_id);

    void highAgreeRepairSubmit(@Param("id") int id, @Param("submit_id") String submit_id);

    void highDisagreeRepairSubmit(@Param("id") int id, @Param("submit_id") String submit_id, @Param("reason") String reason);
}
