package com.jig.entity;

public class PhoneUpload {
    private String fileName;
    private String uploadFileName;
    private String type;
    private boolean isScan = false;
    private boolean hadFile = false;


    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getUploadFileName() {
        return uploadFileName;
    }

    public void setUploadFileName(String uploadFileName) {
        this.uploadFileName = uploadFileName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isScan() {
        return isScan;
    }

    public void setScan(boolean scan) {
        isScan = scan;
    }

    public boolean isHadFile() {
        return hadFile;
    }

    public void setHadFile(boolean hadFile) {
        this.hadFile = hadFile;
    }
}
