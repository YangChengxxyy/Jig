package com.jig.mapper;

import com.jig.entity.common.Family;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.scrap.ScrapSubmit;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SupervisorMapper {
    //监管者模式的工夹具信息管理的获取工夹具类别family
    List<Family> supervisorGetJigFamily();

    //监管者模式的工夹具信息管理的获取所有工夹具信息List
    List<JigDefinition> supervisorGetAllJigInfoList();

    //监管者模式下添加工夹具类别
    int supervisorAddJigFamily(@Param("family") String family);

    //监管者模式下查看要删除的工夹具类别在总共夹具信息表中的数量
    int supervisorGetDeleteJigFamilyCount(@Param("jig_family_id") String jig_family_id);

    //监管者模式下删除工夹具类别
    int supervisorDeleteJigFamily(@Param("id") String id);

    List<JigDefinition> supervisorGetJigDefinitionList(@Param("family_id") String family_id,
                                                       @Param("code") String code,
                                                       @Param("name") String name,
                                                       @Param("user_for") String user_for,
                                                       @Param("workcell_id") String workcell_id,
                                                       @Param("page_size") int page_size,
                                                       @Param("page_number") int page_number);

    int supervisorGetJigDefinitionListAll(@Param("family_id") String family_id,
                                          @Param("code") String code,
                                          @Param("name") String name,
                                          @Param("user_for") String user_for,
                                          @Param("workcell_id") String workcell_id);

    //监管者模式下搜索工夹具信息
    List<JigDefinition> supervisorSelectJigInfo(@Param("jig_code") String jig_code,
                                                @Param("jig_name") String jig_name,
                                                @Param("jig_model") String jig_model,
                                                @Param("jig_workcell") String jig_workcell);

    //监管者模式下编辑更改工夹具信息
    int supervisorEditJigInfo(@Param("jig_info") JigDefinition jig_info,
                                 @Param("user_id") String user_id,
                                 @Param("field") String field,
                                 @Param("old_value") String old_value,
                                 @Param("new_value") String new_value);

    //监管者模式下获取我的采购审批list
    List<PurchaseIncomeSubmit> supervisorGetPurchaseSubmitList(@Param("page_number") int page_number,
                                                                   @Param("page_size") int page_size);

    //监管者模式下获取我的采购审批的最大页数
    int supervisorGetPurchaseSubmitListPages();

    //监管者模式下初审通过我的采购审批
    int supervisorPassPurchaseSubmit(@Param("id") String id,
                                        @Param("status") String status,
                                        @Param("first_acceptor") String first_acceptor,
                                        @Param("field") String field,
                                        @Param("old_value") String old_value,
                                        @Param("new_value") String new_value);

    //监管者模式下初审不通过采购审批
    int supervisorNoPassPurchaseSubmit(@Param("id") String id,
                                           @Param("status") String status,
                                           @Param("first_reason") String first_reason,
                                           @Param("first_acceptor") String first_acceptor,
                                           @Param("field") String field,
                                           @Param("old_value") String old_value,
                                           @Param("new_value") String new_value);

    /**
     * 监管者模式下获取历史采购记录
     */

    List<PurchaseIncomeSubmit> supervisorGetPurchaseSubmitHistory(@Param("bill_no") String bill_no,
                                                                           @Param("submit_name") String submit_name,
                                                                           @Param("start_date") String start_date,
                                                                           @Param("end_date") String end_date,
                                                                           @Param("status") String status,
                                                                           @Param("page_number") int page_number,
                                                                           @Param("page_size") int page_size,
                                                                           @Param("user_id") String user_id);

    int supervisorGetPurchaseSubmitHistoryPages(@Param("bill_no") String bill_no,
                                                          @Param("submit_name") String submit_name,
                                                          @Param("start_date") String start_date,
                                                          @Param("end_date") String end_date,
                                                          @Param("status") String status,
                                                          @Param("user_id") String user_id);

    /**
     * 监管者模式下获取待处理的报废清单及其最大页数
     */
    List<ScrapSubmit> supervisorGetScrapSubmitList(@Param("page_number") int page_number,
                                                   @Param("page_size") int page_size,
                                                   @Param("workcell_id") String workcell_id);

    int supervisorGetScrapSubmitListPages(@Param("workcell_id") String workcell_id);

    //监管者模式下审批待处理的报废申请
    int supervisorPassScrapSubmit(@Param("id") String id,
                                     @Param("user_id") String user_id,
                                     @Param("field") String field,
                                     @Param("old_value") String old_value,
                                     @Param("new_value") String new_value);

    int supervisorNoPassScrapSubmit(@Param("id") String id,
                                    @Param("no_pass_reason") String no_pass_reason,
                                    @Param("user_id") String user_id,
                                    @Param("field") String field,
                                    @Param("old_value") String old_value,
                                    @Param("new_value") String new_value);

    //监管者模式下获取历史报废记录
    List<ScrapSubmit> supervisorGetScrapSubmitListHistory(@Param("code") String code,
                                                          @Param("seq_id") String seq_id,
                                                          @Param("start_date") String start_date,
                                                          @Param("end_date") String end_date,
                                                          @Param("status") String status,
                                                          @Param("scrap_reason") String scrap_reason,
                                                          @Param("page_number") int page_number,
                                                          @Param("page_size") int page_size,
                                                          @Param("workcell_id") String workcell_id);

    int supervisorGetScrapSubmitListHistoryPages(@Param("code") String code,
                                                       @Param("seq_id") String seq_id,
                                                       @Param("start_date") String start_date,
                                                       @Param("end_date") String end_date,
                                                       @Param("status") String status,
                                                       @Param("scrap_reason") String scrap_reason,
                                                       @Param("workcell_id") String workcell_id);

    List<PurchaseIncomeSubmit> supervisorGetAllPurchaseSubmitList();

    List<PurchaseIncomeSubmit> supervisorGetAllPurchaseSubmitHistoryList(@Param("bill_no") String bill_no, @Param("submit_name") String submit_name, @Param("start_date") String start_date, @Param("end_date") String end_date, @Param("status") String status, @Param("user_id") String user_id);
}
