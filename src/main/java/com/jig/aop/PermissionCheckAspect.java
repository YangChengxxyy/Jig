package com.jig.aop;

import com.jig.annotation.Permission;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Arrays;

/**
 * 角色权限校验-AOP
 */
@Aspect
@Component
public class PermissionCheckAspect {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    //切入点表达式决定了用注解方式的方法切还是针对某个路径下的所有类和方法进行切，方法必须是返回void类型
    @Pointcut("execution(* com.jig.controller..*.*(..))")
    private void permissionCheckCut() {
    }

    //定义了切面的处理逻辑。即方法上加了@PermissionCheck
    @Around("permissionCheckCut()")
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        logger.info("进入");
        Object target = pjp.getTarget();
        String methodName = pjp.getSignature().getName();
        Class<?>[] parameterTypes = ((MethodSignature) pjp.getSignature()).getMethod().getParameterTypes();
        Method method = target.getClass().getMethod(methodName, parameterTypes);
        Permission methodAnnotation = method.getAnnotation(Permission.class);
        if (methodAnnotation != null) {
            logger.info(("请求的方法上面的注解:" + Arrays.toString(methodAnnotation.value())));
        } else {
            Permission classAnnotation = target.getClass().getAnnotation(Permission.class);
            if (classAnnotation != null) {
                logger.info("请求的类上面的注解:" + Arrays.toString(classAnnotation.value()));
            }
        }
        return pjp.proceed();
    }

}