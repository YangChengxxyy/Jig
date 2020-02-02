package com.jig.mapper;

import com.jig.entity.PurchaseIncomeSubmit;
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


    List<PurchaseIncomeSubmit> get_manager_purchaseCheck_list(@Param("user_id") String user_id);

    PurchaseIncomeSubmit get_manager_purchase_detail(@Param("id") String id);
}
