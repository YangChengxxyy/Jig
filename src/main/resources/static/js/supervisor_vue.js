let production_line_list = [];
let workcell_list = [];
let family_list = [];
let model_list = [];
let part_no_list = [];

$.ajax("get_production_line_list", {
    async: false,
    success: function (res) {
        production_line_list = res;
    }
});

$.ajax({
    url:"get_workcell_list",
    async: false,
    success:function (res) {
        workcell_list = res;
    }
})

$.ajax("get_family_list", {
    async: false,
    success: function (res) {
        family_list = res;
    }
});

$.ajax("get_model_list", {
    async: false,
    success: function (res) {
        model_list = res;
    }
});

$.ajax("get_part_no_list",{
    async: false,
    success: function (res) {
        part_no_list = res;
    }
})

//工夹具信息
var jig_info = new Vue({
    el:"#jig_info",
    data:{
        all_jig_info_list:[],//总工夹具信息list
        jig_family_list:[],
        add_jig_family_info:{
            id:"",
            family:""
        },//添加工夹具的类别
        delete_jig_family_info:{
            id:"",
            family:""
        },//要删除的类别
        jig_info_list_by_family:[],//经过类别划分的工夹具信息list
        jig_info_detail:null,

        edit_jig_info_detail:null,//修改工夹具信息的明细
        production_line_list:production_line_list,
        workcell_list:workcell_list,
        family_list:family_list,
        model_list:model_list,
        part_no_list:part_no_list,//工夹具料号list,
        edit_select_part_no_list:[],//编辑页面选择的料号list

        select_jig_code:"",//搜索条件
        select_jig_name:"",
        select_jig_model:"",//搜索条件:model
        select_jig_workcell:"",
    },
    created:function () {
        this.get_jig_family();
        this.get_all_jig_info_list();
    },
    methods:{
        get_jig_family:function () {
            const that = this;
            $.ajax({
                url:"supervisor_get_jig_family",
                data:{},
                success:function (res) {
                    that.jig_family_list = res;
                }
            })
        },
        add_jig_family:function () {
                const that = this;
                $.ajax({
                    url: "supervisor_add_jig_family",
                    data: {
                        family: this.add_jig_family_info.family
                    },
                    success: function (res) {
                        alert(res);
                        that.get_jig_family();
                    }
                })
        },
        get_delete_jig_family_info:function(jig_family){
            this.delete_jig_family_info = jig_family;
        },
        delete_jig_family:function () {
            const that = this;
            $.ajax({
                url:"supervisor_delete_jig_family",
                data:{
                    jig_family_id:this.delete_jig_family_info.id,
                    jig_family:this.delete_jig_family_info.family
                },
                success:function (res) {
                    alert(res);
                    that.get_jig_family();
                }
            })
        }
        ,
        get_all_jig_info_list:function () {
            const  that = this;
            $.ajax({
                url: "supervisor_get_all_jig_info_list",
                data:{},
                success:function (res) {
                    that.all_jig_info_list = res;
                }
            })
        },
        get_jig_info_list_by_family:function (family_id) {
            if(this.jig_family_list.length!=0 && this.all_jig_info_list.length!=0){
                var list = [];
                for(var i=0;i<this.all_jig_info_list.length;i++){
                    if(this.all_jig_info_list[i].family === family_id){
                        list.push(this.all_jig_info_list[i]);
                    }
                }
                this.jig_info_list_by_family = list;
            }
        },
        get_jig_info_detail:function (index) {
            if(this.all_jig_info_list.length!=0){
                this.jig_info_detail = this.all_jig_info_list[index];
            }else {
                alert("服务器异常!");
            }
        },
        get_edit_jig_info:function (index) {
            if(this.all_jig_info_list.length!=0){
                this.edit_jig_info_detail = this.all_jig_info_list[index];
            }else {
                alert("服务器异常!");
            }
        },
        edit_jig_info:function () {
            console.log(this.edit_jig_info_detail);
            const that = this;
            var edit_part_no = "";
            for(var i=0;i<this.edit_select_part_no_list.length-1;i++){
                edit_part_no+=this.edit_select_part_no_list[i]+"|"
            }
            edit_part_no+=this.edit_select_part_no_list[this.edit_select_part_no_list.length-1];
            this.edit_jig_info_detail.part_no = edit_part_no;

           $.ajax({
                url:"supervisor_edit_jig_info",
                dataType:"post",
                data: this.edit_jig_info_detail
                ,
                success:function (res) {
                    alert(res);
                }
            })
        },
        init_part_no:function () {
            console.log("init_part");
            $('#sel_edit_jig_part_no').selectpicker({
                multiple: true,
                actionsBox: true
            })
        },
        init:function () {
            //代替http请求
            //this.result_list = ;
            console.log("init");
            $('#sela').selectpicker({
                multiple: true,
                actionsBox: true
            })
        },
        clear_select_condition:function () {
            this.select_jig_code = "";
            this.select_jig_name = "";
            this.select_jig_model = "";
            this.select_jig_workcell = "";
        },
        select_jig_info:function () {
            const that = this;
            $.ajax({
                url:"supervisor_select_jig_info",
                data:{
                    jig_code:this.select_jig_code,
                    jig_name:this.select_jig_name,
                    jig_model:this.select_jig_model,
                    jig_workcell:this.select_jig_workcell
                },
                success:function (res) {
                    if(res.length>0) {
                        that.jig_info_list_by_family = res;
                    }else {
                        alert("没有结果!");
                    }
                }
            })
        }
    },
    watch:{
        add_jig_family_info: function () {

        }
    }
});


//我的采购审批
var my_purchase_list = new Vue({
    el:"#purchase_list",
    data:{
        purchase_submit_list:[],
        purchase_submit_detail:null,
        now_page_number:1,
        max_page_number:0,
        no_pass_purchase_submit_id:"",//需要审批不通过的采购审批id
        no_pass_reason:"",//审批不通过的原因
    },
    created:function () {
        this.getData();
    },
    methods: {
        getData:function () {
            const that = this;
            $.ajax({
                url:"supervisor_get_purchase_submit_list",
                data:{
                    page_number:this.now_page_number
                },
                success:function (res) {
                    that.purchase_submit_list = res.list;
                    that.max_page_number = res.max;
                    console.log(res.list);
                }
            })
        },
        get_purchase_submit_detail:function (index) {
            if(this.purchase_submit_list.length>0){
                this.purchase_submit_detail = this.purchase_submit_list[index];
            }else{
                alert("服务器异常!");
            }
        },
        pass_purchase_submit:function (id,status) {
            const that = this;
            $.ajax({
                url:"supervisor_pass_purchase_submit",
                data:{
                    id:id,
                    status:status
                },
                success:function (res) {
                    if (res<=0){
                        alert("审批失败!");
                        return false;
                    }else {
                        alert("审批成功!");
                        that.getData();
                    }
                }
            })
        },
        get_no_pass_purchase_submit_id:function (id) {
            this.no_pass_purchase_submit_id = id;
        },
        no_pass_purchase_submit:function () {
            const that = this;
            $.ajax({
                url:"supervisor_no_pass_purchase_submit",
                data:{
                    id:this.no_pass_purchase_submit_id,
                    first_reason:this.no_pass_reason,
                    status: 1
                },
                success:function (res) {
                    if (res<=0){
                        alert("审批失败!");
                        return false;
                    }else {
                        alert("审批成功!");
                        that.getData();
                    }
                }
            })
        }
    }
})

//历史采购记录
var purchase_submit_history = new Vue({
    el:"#purchase_list_history",
    data:{
        now_page_number:1,
        max_page_number:0,
        sel_bill_no:"",
        sel_submit_name:"",
        sel_submit_time:"",
        sel_status:"",
        options:[{text:'',value:''},
            {text:'待审批',value:'0'},
            {text:'初审未通过',value:'1'},
            {text:'初审通过',value:'2'},
            {text:'终审未通过',value:'3'},
            {text:'终审通过',value:'4'}],
        purchase_submit_list:[],//搜索到的历史采购记录list
        purchase_submit_detail:null,//采购记录细节
    },
    created:function () {
        this.getData();
    },
    methods:{
        clear_date:function () {
            this.sel_submit_time = "";
        },
        getData:function () {
            const that = this;
            $.ajax({
                url:"supervisor_get_purchase_submit_list_history",
                data:{
                    bill_no:this.sel_bill_no,
                    submit_name:this.sel_submit_name,
                    submit_time:this.sel_submit_time,
                    status:this.sel_status,
                    page_number:this.now_page_number
                },
                success:function (res) {
                    that.purchase_submit_list = res.list;
                    that.max_page_number = res.max;
                }
            })
        },
        get_purchase_submit_detail:function (index) {
            if(this.purchase_submit_list.length>0){
                this.purchase_submit_detail = this.purchase_submit_list[index];
            }else{
                alert("服务器异常!");
            }
        },
        clear_all:function () {
            this.sel_submit_time = "";
            this.sel_submit_name = "";
            this.sel_bill_no = "";
            this.sel_status = "";
        }

    }
})

//待处理的报废申请
var scrap_submit = new Vue({
    el:"#scrap_submit",
    data:{
        now_page_number:1,
        max_page_number:0,
        scrap_submit_list:[],
    },
    created:function(){
        this.getData();
    },
    methods:{
        getData:function () {
            const that = this;
            $.ajax({
                url:"supervisor_get_scrap_submit_list",
                data:{
                    page_number:this.now_page_number
                },
                success:function (res) {
                    console.log(res.list);
                    that.scrap_submit_list = res.list;
                    that.max_page_number = res.max;
                }
            })
        },
        get_scrap_submit_detail:function (index) {
            if(this.scrap_submit_list.length>0){
                scrap_submit_detail.scrap_submit = this.scrap_submit_list[index];
            }else {
                alert("服务器异常!");
            }
        },
        pass_scrap_submit:function (id) {
            const that = this;
            $.ajax({
                url:"supervisor_pass_scrap_submit",
                data:{
                    id:id
                },
                success:function (res) {
                    if(res<0){
                        alert("服务器异常!")
                    }else {
                        alert("审批成功!");
                        that.getData();
                    }
                }
            })
        },
        get_no_pass_scrap_submit_id:function (id) {
            no_pass_scrap_submit_reason.id = id;
        }
    }
})

//待处理的报废申请的查看明细
var scrap_submit_detail = new Vue({
    el:"#scrap_submit_detail",
    data:{
        scrap_submit:null
    },
    created:function () {

    },
    methods:{

    },
    watch:{}
})

//初审报废申请不通过的原因
var no_pass_scrap_submit_reason = new Vue({
    el:"#no_pass_scrap_submit_reason",
    data:{
        id:"",
        no_pass_reason:""
    },
    created:function () {

    },
    methods:{
        no_pass_scrap_submit:function () {
            const that = this;
            $.ajax({
                url:"supervisor_no_pass_scrap_submit",
                data:{
                    id:this.id,
                    no_pass_reason:this.no_pass_reason
                },
                success:function (res) {
                    if(res<0){
                        alert("服务器异常!")
                    }else {
                        alert("审批成功!");
                        scrap_submit.getData();
                    }
                }
            })
        }
    },
    watch:{}
})

//历史报废记录
var scrap_submit_history = new Vue({
    el:"#scrap_submit_history",
    data:{
        now_page_number:1,
        max_page_number:0,
        scrap_submit_list:[],
        sel_code:"",//搜索条件
        sel_submit_name:"",
        sel_submit_time:"",
        sel_status:"",
        sel_scrap_reason:"",
        options:[{text:'',value:''},
            {text:'待审批',value:'0'},
            {text:'初审未通过',value:'1'},
            {text:'初审通过',value:'2'},
            {text:'终审未通过',value:'3'},
            {text:'终审通过',value:'4'}],
    },
    created:function () {
        this.getData();
    },
    methods:{
        getData:function () {
            const that = this;
            $.ajax({
                url:"supervisor_get_scrap_submit_list_history",
                data:{
                    page_number:this.now_page_number,
                    code:this.sel_code,
                    submit_name:this.sel_submit_name,
                    submit_time:this.sel_submit_time,
                    status:this.sel_status,
                    scrap_reason:this.sel_scrap_reason,
                },
                success:function (res) {
                    if(res.list.length === 0){
                        alert("没有结果!");
                    }
                    that.scrap_submit_list = res.list;
                    that.max_page_number = res.max;
                }
            })
        },
        get_scrap_submit_detail:function (index) {
            if(this.scrap_submit_list.length>0){
                scrap_submit_history_detail.scrap_submit = this.scrap_submit_list[index];
            }
        },
        clear_date:function () {
            this.sel_submit_time = "";
        }
    }
})

//历史报废记录的单个记录明细
var scrap_submit_history_detail = new Vue({
    el:"#scrap_submit_history_detail",
    data:{
        scrap_submit:null
    },
    methods:{

    }
})


