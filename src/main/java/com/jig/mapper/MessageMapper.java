package com.jig.mapper;

import com.jig.entity.common.Message;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface MessageMapper {
    List<Message> getNewMessage(@Param("id") String id, @Param("type") String type);

    List<Message> getOtherMessage(@Param("id") String id, @Param("type") String type);
}
