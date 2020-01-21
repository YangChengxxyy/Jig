package com.jig.util;

import com.jig.entity.DemoEntity;
import com.jig.entity.JigDefinition;
import com.jig.service.JigService;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import java.io.FileOutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class POIUtils {

    public static <T> HSSFWorkbook getExcel(T t, List<T> list, String url) throws Exception {
        //获取对象的类对象
        Class<?> aClass = t.getClass();
        //创建一个List，用来存放对象属性的get方法名
        String xlsName = aClass.getName();
        //这里涉及到“.”在正则表达式中的特殊性，将在下一篇文章中讨论
        String replace = xlsName.replace(".", "/");
        String[] split = replace.split("/");
        String s = split[split.length - 1];
        List<String> methodNameList = new ArrayList<>();
        //获取对象的所有属性
        Field[] declaredFields = aClass.getDeclaredFields();
        //遍历获取所有属性的get方法名并存在一个数组中
        for (Field declaredField : declaredFields) {
            String fileName = declaredField.getName();
            String getMethodName = "get" + fileName.substring(0, 1).toUpperCase() + fileName.substring(1);
//            System.out.println(getMethodName);
            methodNameList.add(getMethodName);
        }
        HSSFWorkbook sheets = new HSSFWorkbook();
        HSSFSheet sheet = sheets.createSheet(s);
        HSSFRow row = sheet.createRow(0);
        HSSFCell cell = null;
        for (int i = 0; i < declaredFields.length; i++) {
            cell = row.createCell(i);
            cell.setCellValue(declaredFields[i].toString());

        }
        row.createCell(0);
        for (int i = 0; i < declaredFields.length; i++) {
            cell = row.createCell(i);
            cell.setCellValue(declaredFields[i].getName());
        }
        for (int i = 1; i <= list.size(); i++) {
            row = sheet.createRow(i);
            for (int j = 0; j < declaredFields.length; j++) {
                cell = row.createCell(j);
                Method declaredMethod = aClass.getDeclaredMethod(methodNameList.get(j), null);
                Object invoke = declaredMethod.invoke(list.get(i - 1), null);
                cell.setCellValue(invoke == null ? "" : invoke.toString());
            }
            System.out.println();
        }
        sheets.write(new FileOutputStream(url + s + ".xls"));
        return sheets;
    }

    public static void main(String[] args) throws Exception {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < 3; i++) {
            a.add(people);
        }
        getExcel(people, a,"E:\\");
    }
}