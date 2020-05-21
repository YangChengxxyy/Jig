package com.jig.controller;

import com.jig.entity.*;
import com.jig.filter.SessionInterceptor;
import com.jig.service.JigService;
import com.jig.utils.LoginStatusUtil;
import com.jig.utils.QrCodeUtil;
import org.apache.commons.io.FileUtils;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.Base64.Encoder;

@RestController
@RequestMapping("api")
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT)
public class JigJson {
    @Autowired
    private JigService jigService;
    @Value("${file.resource-url}")
    public String RESOURCE_URL;

    public static final String SCRAP_IMAGE_NAME = "images/scrap_images/";
    public static final String REPAIR_IMAGE_NAME = "images/repair_images/";
    public static final String SCRAP = "SCRAP";
    public static final String REPAIR = "REPAIR";
    public static Map<String, PhoneUpload> phoneUploadMap = new HashMap<>();//存放扫码上传的map对象

    @NotNull
    private Map<String, Object> getStringObjectMap(List<?> data, int max) {
        Map<String, Object> map = new HashMap<>(2);
        map.put("data", data);
        map.put("max", max);
        return map;
    }

    private String getScrapPathName(String fileName) {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString();
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");//设置日期格式
        String nowTime = LocalDateTime.now().format(fmt);
        assert fileName != null;
        String after = fileName.substring(fileName.lastIndexOf('.'));
        return SCRAP_IMAGE_NAME + SCRAP + "-" + nowTime + "-" + uuidString + after;
    }



    @RequestMapping(value = "get_demo_list", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<String, Object> getDemoList(@RequestParam("page_number") int page_number, @RequestParam("page_size") int page_size) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < page_size; i++) {
            a.add(people);
        }
        Map<String, Object> map = new HashMap<>();
        map.put("data", a);
        map.put("all", 51);
        map.put("max", (int) Math.ceil(51 / (double) page_size));
        return map;
    }

    /**
     * 搜索工夹具  (不需要了)
     *
     * @param code       工夹具代码
     * @param name       工夹具名字
     * @param workcell   工作部门
     * @param family     类别
     * @param userFor    用途
     * @param pageNumber 页码
     * @return 查询到的对应页数的Map对象 { data:数据 ,max:最大页数 }
     */
    @RequestMapping("naive/search_jig_definition")
    public Map<String, Object> naiveSearchJigDefinition(@RequestParam("code") String code, @RequestParam("name") String name, @RequestParam("workcell") String workcell, @RequestParam("family") String family, @RequestParam("user_for") String userFor, @RequestParam("page_number") int pageNumber, @RequestParam("page_size") int page_size) throws Exception {
        int all = jigService.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor);
        Map<String, Object> map = getStringObjectMap(jigService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber, page_size), (int) Math.ceil(all / (double) page_size));
        map.put("all", all);
        return map;
    }



    /**
     * 获取出库申请 (不需要了)
     *
     * @return 出库申请
     */
    @RequestMapping("naive/get_outgoing_submit")
    public Map<String, Object> getOutgoingSubmit(@RequestParam("page_number") int page_number) {
        return getStringObjectMap(jigService.naiveGetOutgoingSubmit(page_number), jigService.naiveGetOutgoingSubmitPage());
    }









    /**
     * high提交报废（手机上传图片使用,不需要了）
     *
     * @param code         工夹具代码
     * @param seq_id       工夹具序列号
     * @param submit_id    申请人id
     * @param scrap_reason 报废原因
     * @param token        token
     * @param request
     * @return 成功与否
     */
    /*@RequestMapping("high/phone_submit_scrap")
    public boolean highPhoneSubmitScrap(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id, @RequestParam("submit_id") String submit_id, @RequestParam("scrap_reason") String scrap_reason, @RequestParam("token") String token, @RequestParam("scrap_type") String scrap_type, HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            session.removeAttribute("scrap-" + submit_id);
            PhoneUpload phoneUpload = phoneUploadMap.get(token);
            String pathName = phoneUpload.getFileName();
            pathName = SCRAP_IMAGE_NAME + pathName + phoneUpload.getUploadFileName().substring(phoneUpload.getUploadFileName().lastIndexOf('.'));
            phoneUploadMap.remove(token);

            ScrapSubmit scrapSubmit = new ScrapSubmit();
            scrapSubmit.setCode(code);
            scrapSubmit.setSeq_id(seq_id);
            scrapSubmit.setSubmit_id(submit_id);
            scrapSubmit.setScrap_reason(scrap_reason);
            scrapSubmit.setScrap_type(scrap_type);

            jigService.highSubmitScrap(scrapSubmit, pathName);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }*/



    /**
     * base64传图片 测试
     *
     * @return base64
     * @throws IOException 异常
     */
    @RequestMapping("get_images")
    public Map<String, Object> getImage() throws IOException {
        File file = new File("E:\\YC\\Documents\\IdeaProjects\\JIG\\src\\main\\resources\\static\\images\\scrap_images\\SCRAP-20200217144611867-695b6dcb-f5cb-453d-a7e0-66e70fb2aecc.JPG");
        FileInputStream inputStream = new FileInputStream(file);
        byte[] bytes = new byte[inputStream.available()];
        inputStream.read(bytes, 0, inputStream.available());
        inputStream.close();
        Encoder encoder = Base64.getEncoder();
        String results = encoder.encodeToString(bytes);
        Map<String, Object> map = new HashMap<>();
        map.put("data", results);
        return map;
    }

    /*
        测试
     */
    @RequestMapping("generate_qr_code")
    public void generateQrCode(HttpServletRequest request, HttpServletResponse response) {
        StringBuffer url = request.getRequestURL();
        // 域名
        String tempContextUrl = url.delete(url.length() - request.getRequestURI().length(), url.length()).append("/").toString();
        // 再加上请求链接
        String requestUrl = tempContextUrl + "test_high?key=wx6e26d78ff8614da2";
        System.out.println(requestUrl);
        try {
            OutputStream os = response.getOutputStream();
            QrCodeUtil.encode(requestUrl, os);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取二维码图片
     *
     * @param type      类型
     * @param submit_id 申请人
     * @param request
     * @param response
     */

    @RequestMapping("get_phone_qr_code")
    public void getPhoneQrCode(@RequestParam("type") String type, @RequestParam("submit_id") String submit_id, HttpServletRequest request, HttpServletResponse response) {
        //设置session
        HttpSession session = request.getSession();
        if (session.getAttribute(type + "-" + submit_id) != null) {
            //清除无用session，以及map里的无用对象
            PhoneUpload phoneUpload = phoneUploadMap.get(session.getAttribute(type + "-" + submit_id));
            if (phoneUpload.isHadFile()) {
                String fileName = phoneUpload.getFileName();
                fileName += phoneUpload.getUploadFileName().substring(phoneUpload.getUploadFileName().lastIndexOf("."));
                File file = new File(RESOURCE_URL + "images\\" + type.toUpperCase() + "_images\\" + fileName);
                if (file.exists()) {
                    file.delete();
                }
                phoneUploadMap.remove(session.getAttribute(type + "-" + submit_id));
            }
            session.removeAttribute(type + '-' + submit_id);
        }
        UUID uuid = UUID.randomUUID();
        UUID uuid1 = UUID.randomUUID();
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");//设置日期格式
        String nowTime = LocalDateTime.now().format(fmt);
        String fileName = type.toUpperCase() + "-" + nowTime + "-" + uuid1.toString();
        String token = uuid.toString();
        PhoneUpload phoneUpload = new PhoneUpload();
        phoneUpload.setFileName(fileName);
        phoneUpload.setType(type);
        phoneUploadMap.put(token, phoneUpload);
        session.setAttribute(type + "-" + submit_id, token);
        //生成二维码
        //域名
        StringBuffer url = request.getRequestURL();
        // 再加上请求链接
        String tempContextUrl = url.delete(url.length() - request.getRequestURI().length(), url.length()).append("/").toString();
        String requestUrl = tempContextUrl + "show_phone_upload_file?key=" + SessionInterceptor.key + "&token=" + token;
        System.out.println(requestUrl);
        try {
            OutputStream os = response.getOutputStream();
            QrCodeUtil.encode(requestUrl, os);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 手机上传图片用
     *
     * @param file  文件
     * @param token token
     */
    @RequestMapping(value = "phone_upload_file", method = RequestMethod.POST)
    public void phoneUploadFile(@RequestParam("file") MultipartFile file, @RequestParam("token") String token) {
        assert file.getOriginalFilename() != null;
        String after = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));//文件名后缀
        PhoneUpload phoneUpload = phoneUploadMap.get(token);
        String type = phoneUpload.getType();
        String fileName = phoneUpload.getFileName();
        phoneUpload.setUploadFileName(file.getOriginalFilename());
        phoneUpload.setHadFile(true);
        fileName += after;
        try {
            FileUtils.writeByteArrayToFile
                    (new File(RESOURCE_URL + "images\\" + type.toUpperCase() + "_images\\" + fileName), file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("get_phone_upload_token")
    public String getToken(@RequestParam("token") String token, HttpServletRequest request) {
        return request.getSession().getAttribute(token).toString();
    }

    @RequestMapping("get_phone_upload_map")
    public PhoneUpload getPhoneUploadMap(@RequestParam("token") String token) {
        return phoneUploadMap.get(token);
    }



    /**手机上传(不需要了)
     * @param code          工夹具代码
     * @param seq_id        工夹具序列号
     * @param submit_id     申请人id
     * @param repair_reason 报修原因
     * @param token         token
     * @param request
     * @return 成功与否
     */
    /*@RequestMapping("naive/phone_submit_repair")
    public boolean naivePhoneSubmitRepair(@RequestParam("code") String code, @RequestParam("seq_id") String seq_id, @RequestParam("submit_id") String submit_id, @RequestParam("repair_reason") String repair_reason, @RequestParam("token") String token, HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            session.removeAttribute("repair-" + submit_id);
            PhoneUpload phoneUpload = phoneUploadMap.get(token);
            String pathName = phoneUpload.getFileName();
            pathName = REPAIR_IMAGE_NAME + pathName + phoneUpload.getUploadFileName().substring(phoneUpload.getUploadFileName().lastIndexOf('.'));
            phoneUploadMap.remove(token);
            jigService.naiveSubmitRepair(code, seq_id, submit_id, repair_reason, pathName);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }*/





    /**
     * 定时清除无用对象
     * 每一个小时
     */
    @Scheduled(cron = "0 0 * * * ?")
    public void removePhoneUploadMap() {
        phoneUploadMap = new HashMap<>();
        Log log = LogFactory.getLog(this.getClass());
        log.info(" => removePhoneUploadMap");
    }


}
