package com.jig.mapper;

import com.jig.entity.JigDefinition;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface JigMapper {

    /**
     * 通过Mybatis的方法来实现查询到对应页数的工夹具List
     *
     * @param code       工夹具代码
     * @param name       工夹具名字
     * @param workcell   工作部门
     * @param family     类别
     * @param userFor    用途
     * @param pageNumber 页码
     * @return 查询到的对应页数的List对象
     */
    List<JigDefinition> searchJigDefinition(String code, String name, String workcell, String family,String userFor, int pageNumber);

    /**
     * 通过Mybatis的方法来实现查询
     *
     * @param code     工夹具代码
     * @param name     工夹具名字
     * @param workcell 工作部门
     * @param family   类别
     * @param userFor  用途
     * @return 查询到的结果总页数
     */
    int searchJigDefinitionPage(String code, String name, String workcell, String family, String userFor);

    /**
     * 通过Mybatis的方法来实现查询
     *
     * @param id id
     * @return 单个JigDefinition对象
     */
    JigDefinition getSimpleJigDefinition(String id);

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
    List<JigDefinition> searchAllJigDefinition(String code, String name, String workcell, String family, String userFor);
}
