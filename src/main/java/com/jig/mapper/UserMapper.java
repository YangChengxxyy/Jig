package com.jig.mapper;

import com.jig.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {
    /**
     * 获取用户名
     *
     * @param user_id 用户id
     * @return 用户名
     */
    String getUserName(@Param("user_id") String user_id);

    List<User> searchId(@Param("id") String id);

    List<User> searchPassword(@Param("id") String id, @Param("password") String password);
}
