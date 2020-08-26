package com.jig.utils;

import com.jig.entity.life.JigLife;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

/**
 * @author YC
 */
@Component
public class KNearestNeighbor {
    public final static int K = 10000;

    public static double distance(int[] as, int[] bs) throws Exception {
        if (as.length != bs.length) {
            throw new Exception("参数异常");
        } else {
            long sum2 = 0;
            for (int i = 0; i < as.length; i++) {
                sum2 += Math.pow(as[i] - bs[i], 2);
            }
            return Math.pow(sum2, 0.5);
        }
    }

    public static double getLifePercent(List<JigLife> lifeList, JigLife jigLife) {
        JigLife.OTHER_LIFE = jigLife;
        Collections.sort(lifeList);
        double sums = 0;
        for (int i = 0; i < Math.min(lifeList.size(), K); i++) {
            sums += lifeList.get(i).getLife_percent();
        }
        return sums / (Math.min(lifeList.size() == 0 ? 1 : lifeList.size(), K));
    }
}
