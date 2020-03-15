package com.jig.controller;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.jig.entity.*;
import com.jig.service.JigService_zhs;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.print.DocFlavor;
import javax.servlet.http.HttpServletRequest;
import java.security.PublicKey;
import java.util.*;

import static org.apache.logging.log4j.message.MapMessage.MapFormat.JSON;

@RestController
public class jigJson_zhs {
    @Autowired
    private JigService_zhs jigService;

    @RequestMapping(value = "get_stu_list", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<Object, Object> getStuList(@RequestParam(value = "ask") int ask) {
        List<DemoEntity> a = new ArrayList<>();
        DemoEntity people = new DemoEntity();
        people.setName("zhs");
        people.setSex("男");
        people.setStu_no("189050539");
        for (int i = 0; i < ask; i++) {
            a.add(people);
        }
        Map<Object, Object> map = new HashMap<>();
        map.put("data", a);
        return map;
    }
    //通用
    @RequestMapping(value = "get_workcell_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Workcell> getWorkcellList(){
        return jigService.get_workcell_list();
    }

    @RequestMapping(value = "get_family_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Family> getFamilyList(){
        return jigService.get_family_list();
    }

    @RequestMapping(value = "get_model_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Model> getModelList(){
        return jigService.get_model_list();
    }

    @RequestMapping(value = "get_part_no_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<PartNo> getPartNoList(){
        return jigService.get_part_no_list();
    }


    //获取经理模块下的采购审批记录
    @RequestMapping(value = "manager_get_purchase_submit_list",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerPurchaseSubmitList(@RequestParam(value = "user_id") String user_id,
                                                           @RequestParam(value = "page_number") int page_number){
        String workcel_id = "7";
        page_number = (page_number-1)*5;
        List<PurchaseIncomeSubmit> list = jigService.get_manager_purchase_submit_list(user_id,page_number,workcel_id);
        int pages = jigService.get_manager_purchase_submit_list_pages(workcel_id);
        Map<Object,Object> map = new HashMap<>();
        map.put("data",list);
        map.put("max",pages);
        return map;
    }

    //查看经理模块下的采购审批细节
    @RequestMapping(value = "get_manager_purchase_detail",method = {RequestMethod.GET,RequestMethod.POST})
    public PurchaseIncomeSubmit getManagerPurchaseDetail(@RequestParam(value = "id") String id){
        return jigService.get_manager_purchase_detail(id);
    }

    //经理模块下的终审审批，@RequestParam pass 相当于经过终审审批后的采购审批单的状态
    @RequestMapping(value = "manager_check_purchase_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public String  managerCheckPurchase(@RequestParam(value = "id") String id,@RequestParam(value = "pass") String pass){
        String user_id = "1234567";
        int flag = jigService.manager_check_purchase_submit(id,pass,user_id);
        if(flag<0){
            return "操作失败！";
        }
        return "操作成功！";
    }

    //经理模块下终审不通过 采购单 操作
    @RequestMapping(value = "manager_dont_pass_purchase_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public String dontPassManagerPurchaseSubmit(@RequestParam(value = "id") String id,@RequestParam(value = "final_reason") String final_reason){
        String user_id = "1234567";
        int flag = jigService.manager_dont_pass_purchase_submit(id,"3",final_reason,user_id);
        if(flag<0){
            return "服务器异常!";
        }
        return "审批成功!";
    }

    @RequestMapping(value = "manager_get_jig_info_list",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerJigInfoList(@RequestParam(value = "now_page_number") int page_number){
        page_number = (page_number-1)*5;
        Map<Object, Object> map = new HashMap<>(2);
        List<JigDefinition> list =  jigService.get_manager_jig_info_list(page_number);
        int max = jigService.get_manager_jig_info_list_pages();
        map.put("data",list);
        map.put("max",max);
        return map;
    }

    //获取经理模块下的历史采购记录显示
    @RequestMapping(value = "manager_get_purchase_submit_list_history",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerPurchaseSubmitListHistory(@RequestParam(value = "bill_no") String bill_no,
                                                     @RequestParam(value = "submit_name") String submit_name,
                                                     @RequestParam(value = "submit_time") String submit_time,
                                                     @RequestParam(value = "status") String status,
                                                     @RequestParam(value = "page_number") int page_number){
        String workcell_id = "7";
        page_number = (page_number-1)*5;
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }

        Map<Object, Object> map = new HashMap<>(2);
        List<PurchaseIncomeSubmit> list = jigService.get_manager_purchase_submit_list_history(bill_no,submit_name,start_date,end_date,status,page_number,workcell_id);
        int max = jigService.get_manager_purchase_submit_list_history_pages(bill_no,submit_name,start_date,end_date,status,workcell_id);
        map.put("data",list);
        map.put("max",max);
        return map;
    }

    //获取左侧菜单栏的通知消息数量
    @RequestMapping(value = "manager_get_left_message_submit_count",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object, Object> getManagerPurchaseSubmitCount(){
        Map<Object,Object> map = new HashMap<>();

        int purchase_submit_count = jigService.get_manager_purchase_submit_count();
        int scrap_submit_count = jigService.get_manager_scrap_submit_count();

        map.put("purchase_submit_count",purchase_submit_count);
        map.put("scrap_submit_count",scrap_submit_count);
        return map;
    }

    //获取经理采购管理模块下的采购统计的显示数据
    @RequestMapping(value = "manager_get_purchase_total_data",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerPurchaseTotalData(@RequestParam(value = "user_id") String user_id,
                                                          @RequestParam(value = "bill_no") String bill_no,
                                                          @RequestParam(value = "submit_name") String submit_name,
                                                          @RequestParam(value = "submit_time") String submit_time){
        Map<Object, Object> map = new HashMap<>();
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }
        List<PurchaseIncomeSubmit> jig_list = jigService.get_manager_purchase_submit_list_history(bill_no,submit_name,start_date,end_date,"4",-1,"7");
        int purchase_submit_count = jigService.get_manager_purchase_submit_total_count(bill_no,submit_name,start_date,end_date,"4");
        List<JigEntity> jig_entity_list = jigService.get_manager_store_jig_list();
        List<PurchaseTotalSubmitManDetail> submit_man_list =
                jigService.get_manager_purchase_total_submit_man(bill_no,submit_name,start_date,end_date,"4");//采购员细节list--包含采购员名+申请成功的采购单数量

        for(PurchaseTotalSubmitManDetail submit_man:submit_man_list){//获取采购员list内各个采购员的相关采购单
            for (PurchaseIncomeSubmit submit:jig_list){
                if(submit.getSubmit_id().equals(submit_man.getSubmit_id())){
                    submit_man.getAbout_purchase_submit_list().add(submit);
                }
            }
        }

        int store_jig_count = 0;//库存共夹具数量

        for(JigEntity jigEntity:jig_entity_list){
            store_jig_count+=jigEntity.getCount();
        }

        Map<String,Integer> jig_map = new HashMap<>();
        List<PurchaseTotalJigDetail> jig_detail_list = new ArrayList<>();//显示采购统计中新增工夹具板块查看更多工夹具的细节
        int jig_count = 0;

        for(PurchaseIncomeSubmit submit : jig_list){//将采购单记录按code分组，放入map中
            String[] code = submit.getCode().split("\\|");
            String[] count = submit.getCount().split("\\|");
            for(int i=0;i<code.length;i++){
                if(jig_map.containsKey(code[i])){
                    jig_map.put(code[i],jig_map.get(code[i])+Integer.valueOf(count[i]));
                }else {
                    jig_map.put(code[i], Integer.valueOf(count[i]));
                }
                jig_count+=Integer.valueOf(count[i]);
            }
        }

        Iterator iter = jig_map.entrySet().iterator();
        while (iter.hasNext()){//将map遍历，放入工夹具细节List中
            PurchaseTotalJigDetail pj = new PurchaseTotalJigDetail();
            Map.Entry entry = (Map.Entry)iter.next();
            pj.setCode(entry.getKey().toString());
            pj.setCount(Integer.valueOf(entry.getValue().toString()));
            jig_detail_list.add(pj);
        }

        for(PurchaseTotalJigDetail pd:jig_detail_list){//获取jig_detail中包含该工夹具代码的相关订单
            for(PurchaseIncomeSubmit submit:jig_list){
                String[] code = submit.getCode().split("\\|");
               for(int i=0;i<code.length;i++){
                   if(code[i].equals(pd.getCode()) && !pd.getAbout_purchase_submit_list().contains(submit)){
                       pd.getAbout_purchase_submit_list().add(submit);
                   }
               }
            }
        }

        List<String> echart_jig_code_list = new ArrayList<>();
        List<Integer> echart_jig_count_list = new ArrayList<>();
        List<Integer> store_jig_count_list = new ArrayList<>();

        for(PurchaseTotalJigDetail p :jig_detail_list){//获取与新增工夹具代码对应的库存工夹具清单
            echart_jig_code_list.add(p.getCode());
            echart_jig_count_list.add(p.getCount());
            for(JigEntity j:jig_entity_list){//算法可优化
                if(p.getCode().equals(j.getCode())){
                    store_jig_count_list.add(j.getCount());
                }
            }
        }
        map.put("echart_store_jig_count_list",store_jig_count_list);
        map.put("echart_jig_code_list",echart_jig_code_list);
        map.put("echart_jig_count_list",echart_jig_count_list);
        map.put("jig_detail_list",jig_detail_list);
        map.put("jig_count",jig_count);
        map.put("purchase_submit_count",purchase_submit_count);
        map.put("store_jig_count",store_jig_count);
        map.put("submit_man_list",submit_man_list);//采购员细节
        map.put("new_jig_list",jig_list);
        return map;
    }
    //获取经理模式采购统计模块下的采购员细节数据
    /*@RequestMapping(value = "get_manager_purchase_total_submit_man",method = {RequestMethod.POST,RequestMethod.GET},)
    public Map<Object,Object> getMangerPurchaseTotalSubmitMan(@RequestParam(value = "user_id") String user_id,
                                                              @RequestParam(value = "bill_no") String bill_no,
                                                              @RequestParam(value = "submit_name") String submit_name,
                                                              @RequestParam(value = "submit_time") String submit_time){
        Map<Object,Object> map = new HashMap<>();
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }
        List<PurchaseTotalSubmitManDetail> submit_man_list = jigService.get_manager_purchase_total_submit_man(user_id,bill_no,submit_name,start_date,end_date,"4");

        return map;
    }*/

    //获取经理报废管理模块下的报废审批list
    @RequestMapping(value = "manager_get_scrap_submit_list",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerScrapSubmitList(@RequestParam(value = "page_number") int page_number){
        String workcell_id = "7";
        List<ScrapSubmit> list = jigService.get_manager_scrap_submit_list(page_number,workcell_id);
        int scrap_submit_max_page = jigService.get_manager_scrap_submit_list_pages(workcell_id);

        Map<Object,Object> map = new HashMap<>(2);
        map.put("data",list);
        map.put("max",scrap_submit_max_page);
        return map;
    }

    //经理模式下审批通过 报废申请 操作
    @RequestMapping(value = "manager_check_scrap_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public String checkManagerScrapSubmit(@RequestParam(value = "submit_id") String submit_id,@RequestParam("status") String status){
        String user_id = "1234567";
        int flag = jigService.check_manager_scrap_submit(submit_id,status,user_id);
        if(flag<0){
            return "服务器异常!";
        }
        return "审批成功！";
    }

    @RequestMapping(value = "manager_get_scrap_submit_list_history",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> getManagerScrapSubmitListHistory(@RequestParam("code") String code,
                                                               @RequestParam("submit_name") String submit_name,
                                                               @RequestParam("submit_time") String submit_time,
                                                               @RequestParam("status") String status,
                                                               @RequestParam("scrap_reason") String scrap_reason,
                                                               @RequestParam("page_number") int page_number){
        String workcell_id = "7";

        Map<Object,Object> map = new HashMap<>(2);
        page_number = (page_number-1)*5;
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }
        List<ScrapSubmit> list = jigService.get_manager_scrap_submit_list_history(code,submit_name,start_date,end_date,status,scrap_reason,page_number,workcell_id);
        int max_page = jigService.get_manager_scrap_submit_list_history_pages(code,submit_name,start_date,end_date,status,scrap_reason,workcell_id);

        map.put("data",list);
        map.put("max",max_page);
        return map;
    }




    //监管者
    //监管者模式的工夹具信息管理的获取工夹具类别family
    @RequestMapping(value = "supervisor_get_jig_family",method = {RequestMethod.GET,RequestMethod.POST})
    public List<Family> getSupervisorJigFamily(){
        return jigService.get_supervisor_jig_family();
    }
    //监管者模式的工夹具信息管理的获取所有工夹具信息List
    @RequestMapping(value = "supervisor_get_all_jig_info_list",method = {RequestMethod.GET,RequestMethod.POST})
    public List<JigDefinition> getSupervisorAllJigInfoList(){
        return jigService.get_supervisor_all_jig_info_list();
    }

    @RequestMapping(value = "supervisor_add_jig_family",method = {RequestMethod.GET,RequestMethod.POST})
    public String addSupervisorJigFamily(@RequestParam("family") String family){
        int flag = jigService.add_supervisor_jig_family(family);
        if(flag<0){
            return "添加失败!";
        }
        return "添加成功";
    }

    //监管者模式删除工夹具类别（删除时判断有无工夹具是该类别）
    @RequestMapping(value = "supervisor_delete_jig_family",method = {RequestMethod.GET,RequestMethod.POST})
    public String SupervisorDeleteJigFamily(@RequestParam("jig_family_id") String jig_family_id,
                                            @RequestParam("jig_family") String jig_family){
        int this_family_count = jigService.supervisor_get_delete_jig_family_count(jig_family_id);
        System.out.print(jig_family_id);
        if(this_family_count>0){
            return "该类别还有工夹具信息存在，无法修改!";
        }
        int flag = jigService.supervisor_delete_jig_family(jig_family_id);
        if(flag<0){
            return "服务器异常！";
        }
        return "删除成功!";
    }

    //监管者模式下搜索工夹具信息
    @RequestMapping(value = "supervisor_select_jig_info",method = {RequestMethod.GET,RequestMethod.POST})
    public List<JigDefinition> SupervisorSelectJigInfo(@RequestParam("jig_code") String jig_code,
                                                       @RequestParam("jig_name") String jig_name,
                                                       @RequestParam("jig_model") String jig_model,
                                                       @RequestParam("jig_workcell") String jig_workcell){
        return jigService.supervisor_select_jig_info(jig_code,jig_name,jig_model,jig_workcell);
    }

    //监管者模式下编辑更改工夹具信息
    @ResponseBody
    @RequestMapping(value = "supervisor_edit_jig_info")
    public int SupervisorEditJigInfo(JigDefinition jig_info){
        String user_id = "1239393";
        int flag = jigService.supervisor_edit_jig_info(jig_info,user_id);
        return flag;
    }

    //监管者模式下获取我的采购审批List
    @RequestMapping(value = "supervisor_get_purchase_submit_list")
    public Map<Object,Object> SupervisorGetPurchaseSubmitList(@RequestParam("page_number") int page_number){
        page_number = (page_number-1)*5;
        Map<Object,Object> map = new HashMap<>();
        List<PurchaseIncomeSubmit> list = jigService.supervisor_get_purchase_submit_list(page_number);
        int max = jigService.supervisor_get_purchase_submit_list_pages();


        map.put("list",list);
        map.put("max",max);
        return map;
    }

    //监管者模式下初审通过采购审批
    @RequestMapping(value = "supervisor_pass_purchase_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public int SupervisorPassPurchaseSubmit(@RequestParam("id") String id,@RequestParam("status") String status){
        String first_acceptor = "1230936";
        return jigService.supervisor_pass_purchase_submit(id,status,first_acceptor);
    }

    //监管者模式下初审不通过采购审批
    @RequestMapping(value = "supervisor_no_pass_purchase_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public int SupervisorNoPassPurchaseSubmit(@RequestParam("id") String id,
                                              @RequestParam("status") String status,
                                              @RequestParam("first_reason") String first_reason){
        String fisrt_acceptor = "1230936";
        return jigService.supervisor_no_pass_purchase_submit(id,status,first_reason,fisrt_acceptor);
    }

    //监管者模式下获取历史采购记录
    @RequestMapping(value = "supervisor_get_purchase_submit_list_history",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> SupervisorGetPurchaseSubmitHistory(@RequestParam("bill_no") String bill_no,
                                                                 @RequestParam("submit_name") String submit_name,
                                                                 @RequestParam("submit_time") String submit_time,
                                                                 @RequestParam("status") String status,
                                                                 @RequestParam("page_number") int page_number){
        Map<Object,Object> map = new HashMap<>();
        page_number = (page_number-1)*5;
        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }

        String user_id = "1230936";
        List<PurchaseIncomeSubmit> list = jigService.supervisor_get_purchase_submit_list_history(bill_no,submit_name,start_date,end_date,status,page_number,user_id);
        int max = jigService.supervisor_get_purchase_submit_list_history_pages(bill_no,submit_name,start_date,end_date,status,user_id);

        map.put("list",list);
        map.put("max",max);
        return map;
    }

    //监管者模式下获取待处理的报废清单
    @RequestMapping(value = "supervisor_get_scrap_submit_list",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> SupervisorGetScrapSubmitList(@RequestParam("page_number") int page_number){
        page_number = (page_number-1)*5;
        Map<Object,Object> map = new HashMap<>();

        String user_id = "1230936";
        String workcell_id = "7";
        List<ScrapSubmit> list = jigService.supervisor_get_scrap_submit_list(page_number,workcell_id);
        int max = jigService.supervisor_get_scrap_submit_list_pages(workcell_id);

        map.put("list",list);
        map.put("max",max);
        return map;
    }

    //监管者模式下审批待处理的报废申请
    @RequestMapping(value = "supervisor_pass_scrap_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public int SupervisorPassScrapSubmit(@RequestParam("id") String id){
        String workcell = "7";
        String user_id = "1239393";
        int flag = jigService.supervisor_pass_scrap_submit(id,user_id);
        return flag;
    }

    @RequestMapping(value = "supervisor_no_pass_scrap_submit",method = {RequestMethod.GET,RequestMethod.POST})
    public int SupervisorNoPassScrapSubmit(@RequestParam("id") String id,
                                           @RequestParam("no_pass_reason") String no_pass_reason){
        String user_id = "1329393";
        int flag = jigService.supervisor_no_pass_scrap_submit(id,no_pass_reason,user_id);
        return flag;
    }

    //监管者模式下获取历史报废记录
    @RequestMapping(value = "supervisor_get_scrap_submit_list_history",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<Object,Object> SupervisorGetScrapSubmitListHistory(@RequestParam("code") String code,
                                                                  @RequestParam("submit_name") String submit_name,
                                                                  @RequestParam("submit_time") String submit_time,
                                                                  @RequestParam("status") String status,
                                                                  @RequestParam("scrap_reason") String scrap_reason,
                                                                  @RequestParam("page_number") int page_number){
        Map<Object,Object> map = new HashMap<>();
        page_number = (page_number - 1)*5;

        String start_date = "";
        String end_date = "";
        if(submit_time!="") {
            start_date = submit_time.substring(0,10);
            end_date = submit_time.substring(13);
        }
        String workcell_id = "7";

        List<ScrapSubmit> list = jigService.supervisor_get_scrap_submit_list_history(code,submit_name,start_date,end_date,status,scrap_reason,page_number,workcell_id);
        int max = jigService.supervisor_get_scrap_submit_list_history_pages(code,submit_name,start_date,end_date,status,scrap_reason,workcell_id);

        map.put("list",list);
        map.put("max",max);
        return map;
    }




}

