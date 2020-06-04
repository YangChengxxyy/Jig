package com.jig.annotation;

import com.jig.entity.common.Role;

import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Permission {
    Role[] value() default {Role.common};
}
