package com.jig.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserMapper {
    /**
     * 获取用户名
     *
     * @param user_id 用户id
     * @return 用户名
     */
    String getUserName(String user_id);
}
