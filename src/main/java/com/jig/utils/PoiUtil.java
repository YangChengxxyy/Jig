package com.jig.utils;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author YC
 */
public class PoiUtil {

    public static <T> HSSFWorkbook getExcel(List<T> list) throws Exception {
        JdbcTemplate jdbcTemplate = (JdbcTemplate) SpringUtil.applicationContext.getBean("jdbcTemplate");
        String sql = "select * from cn_en";
        List<Map<String, Object>> mapList = jdbcTemplate.queryForList(sql);
        Map<String,String> chEnMap = new HashMap<>();
        for (Map<String, Object> map : mapList) {
            chEnMap.put(map.get("english").toString(),map.get("chinese").toString());
        }
        Object t = list.get(0);
        //获取对象的类对象
        Class<?> aClass = t.getClass();
        //创建一个List，用来存放对象属性的get方法名
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
        HSSFSheet sheet = workbook.createSheet(chEnMap.get(aClass.getSimpleName()) == null ? aClass.getSimpleName() : chEnMap.get(aClass.getSimpleName()));
        HSSFRow row = sheet.createRow(0);
        HSSFCell cell = null;
        int[] maxs = new int[declaredFields.length];
        for (int i = 0; i < declaredFields.length; i++) {
            cell = row.createCell(i);
            cell.setCellValue(chEnMap.get(declaredFields[i].getName()) == null ? declaredFields[i].getName() : chEnMap.get(declaredFields[i].getName()));
            HSSFCellStyle cellStyle = workbook.createCellStyle();
            //设置垂直居中
            cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
            //设置下边框
            HSSFFont font = workbook.createFont();
            //设置字体名称
            font.setFontName("等线");
            //设置字号
            font.setFontHeightInPoints((short) 12);
            //设置是否为斜体
            font.setItalic(false);
            //设置是否加粗
            font.setBold(true);
            cellStyle.setFont(font);
            sheet.autoSizeColumn(1);
            //渲染单元格
            cell.setCellStyle(cellStyle);
            maxs[i] = cell.getStringCellValue().getBytes().length;
        }
        int[][] lengths = new int[list.size()][declaredFields.length];
        for (int i = 1; i <= list.size(); i++) {
            row = sheet.createRow(i);
            for (int j = 0; j < declaredFields.length; j++) {
                cell = row.createCell(j);
                Method declaredMethod = aClass.getDeclaredMethod(methodNameList.get(j));
                Object invoke = declaredMethod.invoke(list.get(i - 1));
                cell.setCellValue(invoke == null ? "" : invoke.toString());
                HSSFCellStyle cellStyle = workbook.createCellStyle();
                //设置垂直居中
                cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
                //设置下边框
                HSSFFont font = workbook.createFont();
                //设置字体名称
                font.setFontName("等线");
                //设置字号
                font.setFontHeightInPoints((short) 12);
                //设置是否为斜体
                font.setItalic(false);
                //设置是否加粗
                font.setBold(false);
                cellStyle.setFont(font);
                //渲染单元格
                cell.setCellStyle(cellStyle);
                lengths[i - 1][j] = cell.getStringCellValue().getBytes().length;
            }
        }
        //获取最大列宽
        for (int j = 0; j < declaredFields.length; j++) {
            for (int i = 1; i <= list.size(); i++) {
                if (lengths[i - 1][j] > maxs[j]) {
                    maxs[j] = lengths[i - 1][j];
                }
            }
        }
        for (int j = 0; j < maxs.length; j++) {
            sheet.setColumnWidth(j, maxs[j] * 320 + 1024);
        }
        return workbook;
    }

    public static void getIpAddress(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        String unknown = "unknown";
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        System.out.println(ip);
    }

    public static void outputFile(HttpServletResponse response, String fileName, List<?> list) throws Exception {
        if (list.size() == 0) {
            return;
        }
        HSSFWorkbook excel = getExcel(list);
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream;charset=utf-8");
        response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
        OutputStream os;
        try {
            os = response.getOutputStream();
            excel.write(os);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}