package com.jig.entity.life;

import com.jig.utils.KNearestNeighbor;
import org.jetbrains.annotations.NotNull;

/**
 * @author YC
 */
public class JigLife implements Comparable<JigLife> {
    String code;
    String seq_id;
    double life_percent;
    int used_count;
    int repair_count;
    public static JigLife OTHER_LIFE;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSeq_id() {
        return seq_id;
    }

    public void setSeq_id(String seq_id) {
        this.seq_id = seq_id;
    }

    public int getUsed_count() {
        return used_count;
    }

    public void setUsed_count(int used_count) {
        this.used_count = used_count;
    }

    public int getRepair_count() {
        return repair_count;
    }

    public void setRepair_count(int repair_count) {
        this.repair_count = repair_count;
    }


    public double getLife_percent() {
        return life_percent;
    }

    public void setLife_percent(double life_percent) {
        this.life_percent = life_percent;
    }


    @Override
    public int compareTo(@NotNull JigLife o) {
        int[] as = {OTHER_LIFE.getRepair_count(), OTHER_LIFE.getUsed_count()};
        int[] bs = {this.getRepair_count(), this.getUsed_count()};
        int[] cs = {o.getRepair_count(), o.getUsed_count()};

        try {
            return (int) (KNearestNeighbor.distance(as, bs) - KNearestNeighbor.distance(as, cs));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }
}
