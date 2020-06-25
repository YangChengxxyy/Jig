package com.jig.service;

import com.jig.entity.life.JigLife;
import com.jig.mapper.LifeMapper;
import com.jig.utils.KNearestNeighbor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author YC
 */
@Service
public class LifeService {
    @Autowired
    private LifeMapper lifeMapper;

    public int changeJigLife(String code, String seq_id) {
        List<JigLife> list = lifeMapper.getAllJigLife();
        JigLife jigLife = lifeMapper.getOneJigLife(code, seq_id);
        double percent = KNearestNeighbor.getLifePercent(list, jigLife);
        return updateJigLife(jigLife, percent);
    }

    public int updateJigLife(JigLife jigLife, double percent) {
        return lifeMapper.updateJigLife(jigLife, percent);
    }
}
