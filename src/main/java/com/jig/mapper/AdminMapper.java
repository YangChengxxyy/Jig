package com.jig.mapper;

import com.jig.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AdminMapper {

    List<User> getUserInformation(@Param("id") String id, @Param("offset") int offset, @Param("limit") int limit);

    int getUserInformationPage(@Param("id") String id);
}
