package com.jig.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
public class RedisUtil {
    @Autowired
    private RedisTemplate<String, String> stringRedisTemplate;
    public String get(final String key){
        return stringRedisTemplate.opsForValue().get(key);
    }

    public boolean set(final String key, final String value){
        boolean result = false;
        try {
            stringRedisTemplate.opsForValue().set(key, value);
            result = true;
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return result;
    }
    public boolean getAndSet(final  String key, final String value){
        boolean result = false;
        try {
            stringRedisTemplate.opsForValue().getAndSet(key, value);
            result = true;
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return result;
    }
    public boolean delete(final  String key){
        boolean result = false;
        try {
            stringRedisTemplate.delete(key);
            result = true;
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return result;
    }
}
