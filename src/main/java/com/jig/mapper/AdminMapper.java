package com.jig.mapper;

import com.jig.entity.common.CnEn;
import com.jig.entity.common.User;
import com.jig.entity.common.Workcell;
import com.jig.entity.jig.JigModel;
import com.jig.entity.jig.JigPart;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AdminMapper {

    List<User> getUserInformation(@Param("submit_id") String submit_id, @Param("page_number") int page_number, @Param("page_size") int page_size, @Param("id") String id, @Param("name") String name, @Param("workcell_id") String workcell_id, @Param("start_date") String start_date, @Param("end_date") String end_date);

    int getUserInformationPage(@Param("submit_id") String submit_id, @Param("id") String id, @Param("name") String name, @Param("workcell_id") String workcell_id, @Param("start_date") String start_date, @Param("end_date") String end_date);

    List<Workcell> getWorkcellList();

    int changeUser(@Param("user") User user);

    int delUser(@Param("id") String id);

    List<User> searchAllUserInformation(@Param("submit_id") String submit_id, @Param("id") String id, @Param("name") String name, @Param("workcell_id") String workcell_id, @Param("start_date") String start_date, @Param("end_date") String end_date);

    List<JigPart> getPart();

    List<JigModel> getModel();

    List<CnEn> getCnEn();
}
