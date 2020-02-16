package com.jig.mapper;

import com.jig.entity.JigDefinition;
import com.jig.entity.PurchaseIncomeSubmit;
import com.jig.entity.ScrapSubmit;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface JigMapper_zhs {
    int addShoplist(@Param("submit_id") String submit_id,
                    @Param("bill_no") String bill_no,
                    @Param("production_line_id") String production_line_id,
                    @Param("code") String code,
                    @Param("count") String number,
                    @Param("submit_time") String submit_time);


    List<PurchaseIncomeSubmit> get_manager_purchase_submit_list(@Param("user_id") String user_id);

    PurchaseIncomeSubmit get_manager_purchase_detail(@Param("id") String id);

    int manager_check_purchase_submit(@Param("id") String id,
                                           @Param("pass") String pass);

    List<JigDefinition> get_manager_jig_info_list(@Param("page_number") int page_number);

    int get_manager_jig_info_list_pages();

    List<PurchaseIncomeSubmit> get_manager_purchase_submit_list_history(@Param("bill_no") String bill_no,
                                                        @Param("submit_name") String submit_name,
                                                        @Param("start_date") String start_date,
                                                        @Param("end_date") String end_date,
                                                        @Param("status") String status,
                                                        @Param("page_number") int page_number);

    int get_manager_purchase_submit_list_history_pages(@Param("bill_no") String bill_no,
                                       @Param("submit_name") String submit_name,
                                       @Param("start_date") String start_date,
                                       @Param("end_date") String end_date,
                                       @Param("status") String status);

    int get_manager_purchase_submit_count();

    /**
     *
     */
    List<ScrapSubmit> get_manager_scrap_submit_list(@Param("page_number") int page_number);

    int get_manager_scrap_submit_list_pages();

    /**经理模式审批报废申请
     *
     * @param submit_id 报废申请的id
     * @param status 经过审批之后报废申请的最终状态
     * 分为两步 1.更新
     */
    int check_manager_scrap_submit(@Param("submit_id") String submit_id,@Param("status") String status);

    /**经理模式下历史报废审批记录的显示及其页数查询
     *
     */
    List<ScrapSubmit> get_manager_scrap_submit_list_history(@Param("code") String code,
                                                            @Param("submit_name") String submit_name,
                                                            @Param("start_date") String start_date,
                                                            @Param("end_date") String end_date,
                                                            @Param("status") String status,
                                                            @Param("scrap_reason") String scrap_reason,
                                                            @Param("page_number") int page_number);

    int get_manager_scrap_submit_list_history_pages(@Param("code") String code,
                                                    @Param("submit_name") String submit_name,
                                                    @Param("start_date") String start_date,
                                                    @Param("end_date") String end_date,
                                                    @Param("status") String status,
                                                    @Param("scrap_reason") String scrap_reason);

}
