package com.jig.mapper;

import com.jig.entity.life.JigLife;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface LifeMapper {
    List<JigLife> getAllJigLife();

    JigLife getOneJigLife(@Param("code") String code, @Param("seq_id") String seq_id);

    int updateJigLife(@Param("jigLife") JigLife jigLife, @Param("percent") double percent);
}
