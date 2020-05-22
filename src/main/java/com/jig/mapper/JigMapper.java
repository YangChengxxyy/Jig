package com.jig.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface JigMapper {









    /**
     * 删除对应记录
     *
     * @param id outgo_submit表id
     */
    void naiveDeleteOutgoSubmit(@Param("id") String id);















}
