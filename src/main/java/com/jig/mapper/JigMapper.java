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
     * 删除对应记录
     *
     * @param id outgo_submit表id
     */
    void naiveDeleteOutgoSubmit(@Param("id") String id);















}
