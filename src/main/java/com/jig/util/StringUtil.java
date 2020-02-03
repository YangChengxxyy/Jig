package com.jig.util;

public class StringUtil {
    public static String combination(Object[] a, String delimiter) {
        StringBuilder results = new StringBuilder();
        for (int i = 0; i < a.length - 1; i++) {
            results.append(a[i]).append(delimiter);
        }
        results.append(a[a.length - 1]);
        return results.toString();
    }

    public static void show(String[] a) {
        for (String b : a) {
            System.out.print(b + "\t");
        }
    }
}
