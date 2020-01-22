package com.jig.util;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.*;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
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
        HSSFWorkbook workbook = new HSSFWorkbook();
        HSSFSheet sheet = workbook.createSheet(s);
        HSSFRow row = sheet.createRow(0);
        HSSFCell cell = null;
        for (int i = 0; i < declaredFields.length; i++) {
            cell = row.createCell(i);
            cell.setCellValue(declaredFields[i].getName());
            HSSFCellStyle cellStyle = workbook.createCellStyle();
            //设置垂直居中
            cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
            //设置下边框
            HSSFFont font = workbook.createFont();
            font.setFontName("等线");//设置字体名称
            font.setFontHeightInPoints((short)12);//设置字号
            font.setItalic(false);//设置是否为斜体
            font.setBold(true);//设置是否加粗
            cellStyle.setFont(font);
            sheet.autoSizeColumn(1);
            //渲染单元格
            cell.setCellStyle(cellStyle);
        }
        for (int i = 1; i <= list.size(); i++) {
            row = sheet.createRow(i);
            for (int j = 0; j < declaredFields.length; j++) {
                cell = row.createCell(j);
                Method declaredMethod = aClass.getDeclaredMethod(methodNameList.get(j), null);
                Object invoke = declaredMethod.invoke(list.get(i - 1), null);
                cell.setCellValue(invoke == null ? "" : invoke.toString());
                sheet.autoSizeColumn(1,true);
            }
        }
        return workbook;
    }
    public static boolean deleteFile(String pathname){
        File file = new File(pathname);
        if (file.exists()) {
            return file.delete();
        }
        return false;
    }

    public static String getIpAddress(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }
}