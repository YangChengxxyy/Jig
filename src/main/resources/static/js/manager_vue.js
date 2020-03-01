
//左侧菜单显示未读审批
var left_panel = new Vue({
    el:"#main-menu",//#left
    data:{
        purchase_submit_count:0,
        purchase_submit_is_show:1,
        scrap_submit_count:0,
        scrap_submit_is_show:1
    },
    created:function(){
        this.get_manager_left_message_submit_count();
    },
    methods:{
        get_manager_left_message_submit_count:function () {
            var that = this;
            $.ajax({
                url:"get_manager_left_message_submit_count",
                data:{

                },
                success:function (res) {
                    if(res.purchase_submit_count==0){
                        that.purchase_submit_is_show = 0;
                    }
                    if (res.scrap_submit_count==0){
                        that.scrap_submit_is_show = 0;
                    }
                    that.purchase_submit_count = res.purchase_submit_count;
                    that.scrap_submit_count = res.scrap_submit_count;
                }
            })
        },
        hide_purchase_submit_message:function(){
            this.purchase_submit_is_show = 0;
        },
        hide_scrap_submit_message:function(){
            this.scrap_submit_is_show = 0;
        }
    }
})

//显示采购审批list
var purchase_check = new Vue({
    el:"#shopCheck",
    data:{
        purchase_submit_list:[],
        purchase_submit:{
            bill_no:"",
            code:"",
            count: "",
            submit_name:"",
            production_line_id:"",
            submit_time:"",
            status:0,
        },
        now_page_number: 1,
        max_page_number: 0
    },
    created:function () {
        this.getData();
    },
    methods:{
        getData:function () {
            var that = this;
            $.ajax({
                url:"get_manager_purchase_submit_list",
                data: {
                    page_number:this.now_page_number,
                    user_id:"111111"
                },
                success:function (res) {
                    that.purchase_submit_list = res.data;
                    that.max_page_number = res.max;
                }
            })
        },
        get_purchaselist_detail:function (id) {
            var that = this;
            if(this.purchase_submit_list.length!=0) {
                this.purchase_submit = this.purchase_submit_list[id];
            }else{
                alert("服务器异常!")
            }
        },
        pass_submit:function (id,pass) {
            var that = this;
            $.ajax({
                url: "manager_check_purchase_submit",
                data: {
                    id: id,
                    pass:pass
                },
                success: function (res) {
                    alert(res);
                    that.getData();
                }
            })
        }

    }
});
//历史采购记录
var purchase_submit_history = new Vue({
    el:"#historyShop",
    data:{
        purchase_submit_list: [],
        purchase_submit:null,
        submit_name:"",
        submit_time:"",
        bill_no:"",
        status:"",
        options:[{text:'',value:''},
                {text:'待审批',value:'0'},
                {text:'初审未通过',value:'1'},
                {text:'初审通过',value:'2'},
                {text:'终审未通过',value:'3'},
                {text:'终审通过',value:'4'}],
        now_page_number: 1,
        max_page_number: 0
    },
    created:function () {
        this.getData();
    },
    methods:{
        getData:function () {
            var that = this;
            $.ajax("get_manager_purchase_submit_list_history",{
                data:{
                    submit_name:this.submit_name,
                    submit_time:this.submit_time,
                    bill_no:this.bill_no,
                    status:this.status,
                    page_number:this.now_page_number
                },
                success:function (res) {
                    console.log(res);
                    if(res.data.length === 0){
                        alert("没有结果!")
                    }
                    that.purchase_submit_list = res.data;
                    that.max_page_number = res.max;
                }
            })
        },
        get_purchase_submit_detail:function (id) {
            var that = this;
            if(this.purchase_submit_list.length!=0) {
                this.purchase_submit = this.purchase_submit_list[id];
            }else{
                alert("服务器异常!")
            }
        },
        clear_date:function () {
            this.submit_time = "";
        },
        clear:function () {
            this.bill_no = "";
            this.submit_name = "";
            this.submit_time = "";
            this.status = "";
        },
        /*timer(){
            return setTimeout(()=>(this.getData(),5000));
        }*/
    },
    watch:{
        /*purchase_submit_list(){
            this.timer();
        }*/
    }
})
//采购统计显示
var purchase_total = new Vue({
    el:"#purchaseTotal",
    data:{
        purchase_submit_count:0,
        jig_detail_list:[],
        jig_detail_about_submit_list:[],
        jig_count:0,
        store_jig_count:0,
        submit_name:"",
        submit_time:"",
        bill_no:"",
        echart_jig_code_list:[],
        echart_jig_count_list:[],
        echart_store_jig_count_list:[],
        myChart:'',
        option_new_jig:{
            title: {
                text: '新增工夹具'
            },
            tooltip: {},
            legend: {
                data:['新增工夹具数量','库存工夹具数量']
            },
            xAxis: {
                data:[]
            },
            yAxis: {},
            series: [{
                name: '新增工夹具数量',
                type: 'bar',
                data: []
            },{
                name: '库存工夹具数量',
                type: 'bar',
                data: []
            }]
        },
    },
    created:function () {
        this.getData();
    },
    mounted:function(){
        this.myChart = echarts.init(document.getElementById('echart_total_jig'));
        this.myChart.setOption(this.option_new_jig);
    },
    methods:{
        getData:function () {
            var that = this;
            $.ajax({
                url:"get_manager_purchase_total_data",
                data:{
                    submit_name:this.submit_name,
                    submit_time:this.submit_time,
                    bill_no:this.bill_no,
                    user_id:""
                },
                success:function (res) {
                    that.purchase_submit_count = res.purchase_submit_count;
                    that.jig_detail_list = res.jig_detail_list;
                    that.jig_count = res.jig_count;
                    that.echart_jig_code_list = res.echart_jig_code_list;
                    that.echart_jig_count_list = res.echart_jig_count_list;
                    that.echart_store_jig_count_list = res.echart_store_jig_count_list;
                    that.store_jig_count = res.store_jig_count;
                }
            })
        },
        clear_date:function () {
            this.submit_time="";
        },
        clear_all:function () {
            this.submit_time="";
            this.submit_name="";
            this.bill_no="";
        },
        change:function(){
            var temp = this.option_new_jig;
            temp.series[0].data = this.echart_jig_count_list;
            temp.series[1].data = this.echart_store_jig_count_list;
            temp.xAxis.data = this.echart_jig_code_list;
            this.myChart.setOption(temp);
        },
        get_about_submit_list:function (index) {
            if(this.jig_detail_list.length!=0){
                this.jig_detail_about_submit_list = this.jig_detail_list[index].about_purchase_submit_list;
            }else{
                alert("服务器异常!");
            }

        }
    },
    computed:{
        new_jig_percent:function () {
            return Math.round(this.jig_count / this.store_jig_count * 10000) / 100.0 + "%";
        }
    }
})

//报废管理
var scrap_submit = new Vue({
    el:"#scrapCheck",
    data:{
        scrap_submit_list:[],
        scrap_submit:null,
        now_page_number: 1,
        max_page_number: 0
    },
    created:function () {
        this.getData();
    },
    methods:{
        getData:function () {
            var that = this;
            $.ajax({
                url:"get_manager_scrap_submit_list",
                data:{
                    page_number: this.now_page_number
                },
                success:function (res) {
                    that.scrap_submit_list = res.data;
                    that.max_page_number = res.max;
                }
            })
        },
        get_scrap_submit_detail:function (index) {
            if(this.scrap_submit_list.length!=0) {
                this.scrap_submit = this.scrap_submit_list[index];
            }else{
                alert("服务器异常!");
            }
        },
        check_scrap_submit:function (submit_id,status) {
            var that = this;
            $.ajax({
                url:"check_manager_scrap_submit",
                data:{
                    submit_id:submit_id,
                    status:status
                },
                success:function (res) {
                    alert(res);
                }
            })
        }
    }
})

//历史报废审批记录
var scrap_submit_history = new Vue({
    el:"#scrap_submit_history",
    data:{
        scrap_submit_list:[],
        scrap_submit:null,
        code:"",
        submit_time:"",
        status:"",
        options:[{text:'',value:''},
            {text:'待审批',value:'0'},
            {text:'初审未通过',value:'1'},
            {text:'初审通过',value:'2'},
            {text:'终审未通过',value:'3'},
            {text:'终审通过',value:'4'}],
        scrap_reason:"",
        submit_name:"",
        now_page_number:1,
        max_page_number:0
    },
    created:function () {
        this.getData();
    },
    methods:{
        getData:function () {
            var that = this;
            $.ajax({
                url:"get_manager_scrap_submit_list_history",
                data:{
                    page_number:this.now_page_number,
                    code:this.code,
                    status:this.status,
                    submit_name:this.submit_name,
                    scrap_reason: this.scrap_reason,
                    submit_time:this.submit_time
                },
                success:function (res) {
                    if(res.data.length===0){
                        alert("没有结果!");
                    }
                    that.scrap_submit_list = res.data;
                    that.max_page_number = res.max;
                }
            })
        },
        clear_date:function () {
            this.submit_time = "";
        },
        get_scrap_submit_detail:function (index) {
            if(this.scrap_submit_list.length!=0) {
                this.scrap_submit = this.scrap_submit_list[index];
            }else{
                alert("服务器异常!");
            }
        }
    }
})
//工夹具信息
var jig_info = new Vue({
    el:"#seqInfo",
    data:{
        jig_list:[],
        jig:"",
        now_page_number: 1,
        max_page_number: 0
    },
    created:function(){
        this.getData();
    },
    methods: {
        getData:function () {
            var that = this;
            $.ajax({
                url:"get_manager_jig_info_list",
                data:{
                    now_page_number:this.now_page_number
                },
                success:function (res) {
                    that.jig_list = res.data;
                    that.max_page_number = res.max;
                }
            })
        },
        //未完成
        edit_jigInfo:function (user_id) {
            var that = this;
            $.ajax({
                url:"edit_manager_jigInfo",
                data:{
                    user_id:user_id
                },
                success:function (res) {
                    alert(res);
                }
            })
        }
    }
});