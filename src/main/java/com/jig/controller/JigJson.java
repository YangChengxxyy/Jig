package com.jig.controller;

import com.jig.entity.*;
import com.jig.filter.SessionInterceptor;
import com.jig.service.JigService;
import com.jig.utils.QrCodeUtils;
import org.apache.commons.io.FileUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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

    private String getRepairPathName(String fileName) {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString();
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");//设置日期格式
        String nowTime = LocalDateTime.now().format(fmt);
        assert fileName != null;
        String after = fileName.substring(fileName.lastIndexOf('.'));
        return REPAIR_IMAGE_NAME + REPAIR + "-" + nowTime + "-" + uuidString + after;
    }

    @RequestMapping(value = "get_demo_list", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<String, Object> getDemoList(@RequestParam(value = "page_number") int pageNumber) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("yc");
        people.setSex("男");
        people.setStu_no("189050536");
        for (int i = 0; i < pageNumber; i++) {
            a.add(people);
        }
        return getStringObjectMap(a, 11);
    }

    /**
     * 搜索工夹具
     *
     * @param code       工夹具代码
     * @param name       工夹具名字
     * @param workcell   工作部门
     * @param family     类别
     * @param userFor    用途
     * @param pageNumber 页码
     * @return 查询到的对应页数的Map对象 { data:数据 ,max:最大页数 }
     */
    @RequestMapping("naive_search_jig_definition")
    public Map<String, Object> naiveSearchJigDefinition(@RequestParam(value = "code") String code, @RequestParam(value = "name") String name, @RequestParam(value = "workcell") String workcell, @RequestParam(value = "family") String family, @RequestParam(value = "user_for") String userFor, @RequestParam(value = "page_number") int pageNumber) throws Exception {
        return getStringObjectMap(jigService.naiveSearchJigDefinition(code, name, workcell, family, userFor, pageNumber), jigService.naiveSearchJigDefinitionPage(code, name, workcell, family, userFor));
    }

    /**
     * 获取单个JigDefinition对象
     *
     * @param id jig_definition表id
     * @return 查询到的JigDefinition对象
     */
    @RequestMapping("get_simple_jig_definition")
    public JigDefinition getSimpleJigDefinition(@RequestParam(value = "id") String id) {
        return jigService.getSimpleJigDefinition(id);
    }

    /**
     * 获取出库申请
     *
     * @return 出库申请
     */
    @RequestMapping("naive_get_outgoing_submit")
    public Map<String, Object> getOutgoingSubmit(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.naiveGetOutgoingSubmit(page_number), jigService.naiveGetOutgoingSubmitPage());
    }

    /**
     * 过去工夹具位置
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @return 位置
     */
    @RequestMapping("get_position")
    public Position getPosition(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id) {
        return jigService.getPosition(code, seq_id);
    }

    /**
     * naive工夹具出库
     *
     * @param id     outgo_submit表id
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     * @return 是否出库成功
     */
    @RequestMapping("naive_outgo_jig")
    public boolean naiveOutgoJig(@RequestParam(value = "id") String id, @RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "rec_id") String rec_id) {
        try {
            jigService.naiveOutgoJig(id, code, seq_id, rec_id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * naive获取需要入库的工夹具信息
     *
     * @return 需要入库的工夹具信息
     */
    @RequestMapping("naive_get_outgoing_jig")
    public Map<String, Object> naiveGetOutgoingJig(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.naiveGetOutgoingJig(page_number), jigService.naiveGetOutgoingJigPage());
    }

    /**
     * naive工夹具入库
     *
     * @param code   工夹具代码
     * @param seq_id 工夹具序列号
     * @param rec_id 记录人id
     * @param id     outgoing_jig表id
     * @return 是否入库成功
     */
    @RequestMapping("naive_return_jig")
    public boolean naiveReturnJig(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "rec_id") String rec_id, @RequestParam(value = "id") String id) {
        try {
            jigService.naiveReturnJig(id, code, seq_id, rec_id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * high添加采购入库申请
     *
     * @param submit_id          申请人id
     * @param bill_no            订单号
     * @param production_line_id 产线id
     * @param codes              工夹具代码
     * @param counts             数量
     * @return 添加成功，否则服务器异常
     */
    @RequestMapping(value = "high_add_shoplist", method = RequestMethod.GET)
    public boolean highAddShoplist(@RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "bill_no") String bill_no,
                                   @RequestParam(value = "production_line_id") String production_line_id, @RequestParam(value = "code") String codes,
                                   @RequestParam(value = "count") String counts) {
        try {
            jigService.highAddShoplist(submit_id, bill_no, production_line_id, codes, counts);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 获取产线列表
     *
     * @return 产线列表
     */
    @RequestMapping("get_production_line_list")
    public List<ProductionLine> getProductionLineList() {
        return jigService.getProductionLineList();
    }

    /**
     * 获取工夹具代码列表
     *
     * @return 工夹具代码列表
     */
    @RequestMapping("get_code_list")
    public List<String> getCodeList() {
        return jigService.getCodeList();
    }

    /**
     * high获取采购入库申请列表
     *
     * @param page_number 页码
     * @return 采购入库申请列表
     */
    @RequestMapping("high_get_purchase_income_submit_list")
    public Map<String, Object> highGetPurchaseIncomeSubmitList(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highGetPurchaseIncomeSubmitList(page_number), jigService.highGetPurchaseIncomeSubmitListPage());
    }

    /**
     * high修改采购入库申请单
     *
     * @param id                 purchase_income_submit表id
     * @param code               工夹具代码
     * @param count              数量
     * @param production_line_id 产线id
     * @return 是否修改成功
     */
    @RequestMapping("high_update_purchase_income_submit")
    public boolean highUpdatePurchaseIncomeSubmit(@RequestParam(value = "id") String id, @RequestParam(value = "code") String code,
                                                  @RequestParam(value = "count") String count,
                                                  @RequestParam("production_line_id") String production_line_id) {
        try {
            jigService.highUpdatePurchaseIncomeSubmit(id, code, count, production_line_id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * high获取查询到的入库申请历史
     *
     * @param bill_no            单据号
     * @param submit_name        申请人
     * @param code               工夹具代码
     * @param production_line_id 产线id
     * @param status             状态
     * @param start_date         最早日期
     * @param end_date           最晚日期
     * @param page_number        页码
     * @return 查询到的入库申请历史
     */
    @RequestMapping("high_search_purchase_income_history")
    public Map<String, Object> highSearchPurchaseIncomeHistory(@RequestParam(value = "bill_no") String bill_no, @RequestParam(value = "submit_name") String submit_name,
                                                               @RequestParam(value = "code") String code, @RequestParam(value = "production_line_id") String production_line_id,
                                                               @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date,
                                                               @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highSearchPurchaseIncomeHistory(bill_no, submit_name, code, production_line_id, status, start_date, end_date, page_number),
                jigService.highSearchPurchaseIncomeHistoryPage(bill_no, submit_name, code, production_line_id, status, start_date, end_date));
    }

    /**
     * high删除出库申请
     *
     * @param id purchase_income_submit表id
     * @return 是否成功
     */
    @RequestMapping("high_delete_purchase_submit")
    public boolean highDeletePurchaseSubmit(@RequestParam(value = "id") String id) {
        try {
            jigService.highDeletePurchaseSubmit(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * high获取报修申请记录
     *
     * @return 获取报修申请记录
     */
    @RequestMapping("high_get_repair_jig")
    public Map<String, Object> highGetRepairJig(@RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highGetRepairJig(page_number), jigService.highGetRepairJigPage());
    }

    /**
     * high搜索历史报修记录
     *
     * @param code        工夹具代码
     * @param seq_id      工夹具序列号
     * @param submit_name 申请时间
     * @param status      状态
     * @param start_date  最早时间
     * @param end_date    最晚时间
     * @param page_number 页码
     * @return 搜索到历史报修记录
     */
    @RequestMapping("high_search_repair_history")
    public Map<String, Object> highSearchRepairHistory(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_name") String submit_name, @RequestParam(value = "status") String status, @RequestParam(value = "start_date") String start_date, @RequestParam(value = "end_date") String end_date, @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highSearchRepairHistory(code, seq_id, submit_name, status, start_date, end_date, page_number)
                , jigService.highSearchRepairHistoryPage(code, seq_id, submit_name, status, start_date, end_date));
    }

    /**
     * high获取报废申请
     *
     * @param submit_id   申请人id
     * @param page_number 页码
     * @return 报废申请
     */
    @RequestMapping("high_get_scrap")
    public Map<String, Object> highGetScrap(@RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highGetScrap(submit_id, page_number)
                , jigService.highGetScrapPage(submit_id));
    }

    /**
     * high搜索报废历史
     *
     * @param code        工夹具代码
     * @param seq_id      工夹具序列号
     * @param submit_id   申请人id
     * @param status      状态
     * @param start_date  最早日期
     * @param end_date    最晚日期
     * @param page_number 页码
     * @return 搜索到的报废历史
     */
    @RequestMapping("high_search_scrap_history")
    public Map<String, Object> highSearchScrapHistory(@RequestParam(value = "code") String code,
                                                      @RequestParam(value = "seq_id") String seq_id,
                                                      @RequestParam(value = "submit_id") String submit_id,
                                                      @RequestParam(value = "scrap_reason") String scrap_reason,
                                                      @RequestParam(value = "status") String status,
                                                      @RequestParam(value = "start_date") String start_date,
                                                      @RequestParam(value = "end_date") String end_date,
                                                      @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.highSearchScrapHistory(code, seq_id, submit_id, scrap_reason, status, start_date, end_date, page_number)
                , jigService.highSearchScrapHistoryPage(code, seq_id, submit_id, scrap_reason, status, start_date, end_date));
    }

    @RequestMapping(value = "high_submit_scrap", method = RequestMethod.POST)
    public boolean highSubmitRepair(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "scrap_reason") String scrap_reason, @RequestParam(value = "file") MultipartFile file) {
        String fileName = file.getOriginalFilename();
        try {
            assert fileName != null;
            String pathName = getScrapPathName(fileName);
            System.out.println(pathName);//pathName存入数据库
            FileUtils.writeByteArrayToFile
                    (new File(RESOURCE_URL + pathName), file.getBytes());
            System.out.println(RESOURCE_URL + pathName);
            jigService.highSubmitScrap(code, seq_id, submit_id, scrap_reason, pathName);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @RequestMapping("high_phone_submit_scrap")
    public boolean high_phone_submit_scrap(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "scrap_reason") String scrap_reason, @RequestParam(value = "token") String token, HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            session.removeAttribute("scrap-" + submit_id);
            PhoneUpload phoneUpload = phoneUploadMap.get(token);
            String pathName = phoneUpload.getFileName();
            pathName = SCRAP_IMAGE_NAME + pathName + phoneUpload.getUploadFileName().substring(phoneUpload.getUploadFileName().lastIndexOf('.'));
            phoneUploadMap.remove(token);
            jigService.highSubmitScrap(code, seq_id, submit_id, scrap_reason, pathName);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    @RequestMapping("high_delete_scrap")
    public boolean highDeleteScrap(@RequestParam(value = "id") String id, @RequestParam(value = "scrap_photo_url") String scrap_photo_url) {
        String fileName = RESOURCE_URL + scrap_photo_url;
        File file = new File(fileName);
        return jigService.highDeleteScrap(id) && file.delete();
    }

    @RequestMapping("code_get_seq_id")
    public List<String> codeGetSeqId(@RequestParam(value = "code") String code) {
        return jigService.codeGetSeqId(code);
    }

    /**
     * base64传图片 测试
     *
     * @return base64
     * @throws IOException 异常
     */
    @RequestMapping(value = "get_images")
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
            QrCodeUtils.encode(requestUrl, os);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("get_phone_qr_code")
    public void getPhoneQrCode(@RequestParam(value = "type") String type, @RequestParam(value = "submit_id") String submit_id, HttpServletRequest request, HttpServletResponse response) {
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
            QrCodeUtils.encode(requestUrl, os);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "phone_upload_file", method = RequestMethod.POST)
    public void phoneUploadFile(@RequestParam(value = "file") MultipartFile file, @RequestParam(value = "token") String token) {
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
    public String getToken(@RequestParam(value = "token") String token, HttpServletRequest request) {
        return request.getSession().getAttribute(token).toString();
    }

    @RequestMapping("get_phone_upload_map")
    public PhoneUpload getPhoneUploadMap(@RequestParam(value = "token") String token) {
        return phoneUploadMap.get(token);
    }

    @RequestMapping("naive_get_repair_list")
    public Map<String, Object> naiveGetRepairList(@RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "page_number") int page_number) {
        return getStringObjectMap(jigService.naiveGetRepairList(submit_id, page_number), jigService.naiveGetRepairListPage(submit_id));
    }

    @RequestMapping("naive_submit_repair")
    public boolean naiveSubmitRepair(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "repair_reason") String repair_reason, @RequestParam(value = "file") MultipartFile file) {
        String fileName = file.getOriginalFilename();
        try {
            assert fileName != null;
            String pathName = getRepairPathName(fileName);
            FileUtils.writeByteArrayToFile
                    (new File(RESOURCE_URL + pathName), file.getBytes());
            jigService.naiveSubmitRepair(code, seq_id, submit_id, repair_reason, pathName);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @RequestMapping("naive_phone_submit_repair")
    public boolean naivePhoneSubmitRepair(@RequestParam(value = "code") String code, @RequestParam(value = "seq_id") String seq_id, @RequestParam(value = "submit_id") String submit_id, @RequestParam(value = "repair_reason") String repair_reason, @RequestParam(value = "token") String token, HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            session.removeAttribute("repair-" + submit_id);
            PhoneUpload phoneUpload = phoneUploadMap.get(token);
            String pathName = phoneUpload.getFileName();
            pathName = REPAIR_IMAGE_NAME + pathName + phoneUpload.getUploadFileName().substring(phoneUpload.getUploadFileName().lastIndexOf('.'));
            phoneUploadMap.remove(token);
            jigService.naiveSubmitRepair(code, seq_id, submit_id, repair_reason, pathName);
        } catch (Exception e) {
            return false;
        }
        return true;
    }
    @RequestMapping("naive_get_repair_history")
    public Map<String,Object> naiveGetRepairHistory(@RequestParam(value = "submit_id")String submit_id,@RequestParam(value = "page_number")int page_number){
        List<RepairJigHistory> list = jigService.naiveGetRepairHistory(submit_id,page_number);
        int a = jigService.naiveGetRepairHistoryPage(submit_id);
        return getStringObjectMap(list,a);
    }
    @RequestMapping("high_get_repair_count")
    public int highGetRepairCount(@RequestParam(value = "submit_id")String submit_id){
        return jigService.highGetRepairCount(submit_id);
    }
    @RequestMapping("high_get_repair_basic")
    public List<Map<String,Object>> highGetRepairBasic(@RequestParam("submit_id")String submit_id){
        return jigService.highGetRepairBasic(submit_id);
    }
}
