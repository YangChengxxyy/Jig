package com.jig.util;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.hssf.util.HSSFColor;

import java.io.File;
import java.io.FileOutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class POIUtils {

    public static <T> HSSFWorkbook getExcel(T t, List<T> list) throws Exception {
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
            methodNameList.add(getMethodName);
        }
        HSSFWorkbook sheets = new HSSFWorkbook();
        HSSFSheet sheet = sheets.createSheet(s);

        //设置样式
        HSSFCellStyle style = sheets.createCellStyle();
        HSSFFont font = sheets.createFont();
//        font.setFontName("等线");
        font.setBold(true);
        font.setColor(HSSFFont.COLOR_RED);
        style.setFont(font);

        HSSFRow row = sheet.createRow(0);
        HSSFCell cell = null;
        for (int i = 0; i < declaredFields.length; i++) {
            cell = row.createCell(i);
            cell.setCellStyle(style);
            cell.setCellValue(declaredFields[i].getName());
        }

        font.setColor(HSSFFont.COLOR_NORMAL);
        font.setBold(false);
        style.setFont(font);
        for (int i = 1; i <= list.size(); i++) {
            row = sheet.createRow(i);
            for (int j = 0; j < declaredFields.length; j++) {
                cell = row.createCell(j);
                cell.setCellStyle(style);
                Method declaredMethod = aClass.getDeclaredMethod(methodNameList.get(j), null);
                Object invoke = declaredMethod.invoke(list.get(i - 1), null);
                cell.setCellValue(invoke == null ? "" : invoke.toString());
            }
        }
        return sheets;
    }
    public static void deleteFile(String pathname){
        File file = new File(pathname);
        if (file.exists()) {
            file.delete();
        }
    }

}