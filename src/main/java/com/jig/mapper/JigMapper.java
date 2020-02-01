package com.jig.mapper;

import com.jig.entity.JigDefinition;
import com.jig.entity.OutgoSubmit;
import com.jig.entity.OutgoingJig;
import com.jig.entity.Position;
import org.apache.ibatis.annotations.Mapper;
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
    List<JigDefinition> searchJigDefinition(String code, String name, String workcell, String family, String userFor, int pageNumber);

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
    Position getPosition(String code, String seq_id);

    /**
     * 工夹具出库
     *
     * @param id     outgo_submit表id
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     */
    void outgoJig(String id, String code, String seq_id, String rec_id);

    /**
     * 删除对应记录
     *
     * @param id outgo_submit表id
     */
    void deleteOutgoSubmit(String id);

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
    void returnJig(String id, String code, String seq_id, String rec_id);

    /**
     * 删除对应的记录
     *
     * @param id outgoing_jig表id
     */
    void deleteOutgoingJig(String id);
}
