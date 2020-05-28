package com.jig.mapper;

import com.jig.entity.common.*;
import com.jig.entity.jig.JigDefinition;
import com.jig.entity.jig.JigModel;
import com.jig.entity.jig.JigPart;
import com.jig.entity.operate.MaintenanceType;
import com.jig.entity.purchase.PurchaseIncomeSubmit;
import com.jig.entity.scrap.ScrapSubmit;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CommonMapper {
    /**
     * 获取单个JigDefinition对象
     *
     * @param id id
     * @return 单个JigDefinition对象
     */
    JigDefinition getSimpleJigDefinition(@Param("id") String id);

    /**
     * 获取单个JigDefinition对象(这个就是直接从jig_definition表里取数据)
     * @param id
     * @return
     */
    JigDefinition get_jig_info(@Param("id") String id);

    /**
     * 获取工夹具位置
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @return Position对象
     */
    Position getPosition(@Param("code") String code, @Param("seq_id") String seq_id);

    /**
     * 获取产线列表
     *
     * @return 产线列表
     */
    List<ProductionLine> getProductionLineList();

    List<Workcell> getWorkcellList();

    List<Family> getFamilyList();

    List<JigModel> getModelList();

    List<JigPart> getPartNoList();

    /**
     * 获取工夹具代码列表
     *
     * @return 工夹具代码列表
     */
    List<String> getCodeList();


    /**
     * 查询seq_id
     *
     * @param code
     * @return
     */
    List<String> codeGetSeqId(@Param("code") String code);

    List<String> codeGetInSeqId(String code);

    List<MaintenanceType> get_maintenance_type_list();

    //方便其他controller调用的
    ScrapSubmit getScrapSubmit(@Param("id") String id);

    PurchaseIncomeSubmit getPurchaseSubmit(@Param("id") String id);
}
