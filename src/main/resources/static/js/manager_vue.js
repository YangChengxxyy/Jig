
//左侧菜单显示未读审批
var left_panel = new Vue({
    el:"#left",
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
                url:"manager_get_left_message_submit_count",
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
        purchase_submit_pass_reason:"",//终审不通过原因
        purchase_submit_id:"",
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
                url:"manager_get_purchase_submit_list",
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
        get_purchase_submit_id:function(id){
            this.purchase_submit_id = id;
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
        },
        dont_pass_purchase_submit:function () {
            const that = this;
            $.ajax({
                url:"manager_dont_pass_purchase_submit",
                data:{
                    id:this.purchase_submit_id,
                    final_reason:this.purchase_submit_pass_reason
                },
                success:function (res) {
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
            $.ajax("manager_get_purchase_submit_list_history",{
                data:{
                    submit_name:this.submit_name,
                    submit_time:this.submit_time,
                    bill_no:this.bill_no,
                    status:this.status,
                    page_number:this.now_page_number
                },
                success:function (res) {
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
        new_submit_list:[],
        new_submit_detail:null,//新增采购单的采购单详情
        jig_detail_list:[],//新增工夹具 1.工夹具代码 2.工夹具数量 的list
        jig_detail_about_submit_list:[],//新增工夹具相关采购单list
        jig_detail_about_submit_detail:null,//新增工夹具相关采购单的采购单详情
        jig_count:0,//工夹具数量
        store_jig_count:0,//库存工夹具数量
        submit_name:"",//查询条件
        submit_time:"",//
        bill_no:"",//查询条件
        echart_jig_code_list:[],//用于柱形图表的 新增工夹具代码 数组
        echart_jig_count_list:[],//用于柱形图表的 新增工夹具数量 数组
        echart_store_jig_count_list:[],//用于柱形图表的 库存工夹具数量 数组
        submit_man_list:[],//采购员list
        submit_man_about_submit_list:[],//采购员相关采购单list
        submit_man_about_submit_detail:null,//采购员相关采购单的采购单详情
        ehart_style_new_jig:'',
        option_new_jig:{//柱形图
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
        echart_submit_man_data:[],//饼图数据
        echart_style_submit_man:'',//饼图的div id
        option_submit_man:{
            title: {
                text: '采购员',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            stillShowZeroSum: false,
            series: [
                {
                    name: '采购员',
                    type: 'pie',
                    radius: '80%',
                    center: ['60%', '60%'],
                    data: [],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            ]
        }
    },
    created:function () {
        this.getData();
    },
    mounted:function(){
        this.ehart_style_new_jig = echarts.init(document.getElementById('echart_total_jig'));
        this.ehart_style_new_jig.setOption(this.option_new_jig);

        this.echart_style_submit_man = echarts.init(document.getElementById('echart_submit_man'));
        this.echart_style_submit_man.setOption(this.option_submit_man);
    },
    methods:{
        getData:function () {
            var that = this;
            $.ajax({
                url:"manager_get_purchase_total_data",
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
                    that.submit_man_list = res.submit_man_list;
                    that.new_submit_list = res.new_jig_list;
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
        get_new_submit_detail:function(index){
            if(this.new_submit_list.length!=0){
                this.new_submit_detail = this.new_submit_list[index];
            }else {
                alert("服务器异常!")
            }
        },
        get_about_submit_list:function (index) {
            if(this.jig_detail_list.length!=0){
                this.jig_detail_about_submit_list = this.jig_detail_list[index].about_purchase_submit_list;
            }else{
                alert("服务器异常!");
            }
        },
        get_submit_man_detail:function (index) {
            if(this.submit_man_list.length!=0){
                console.log(this.submit_man_list[index].about_purchase_submit_list);
                this.submit_man_about_submit_list = this.submit_man_list[index].about_purchase_submit_list;
            }else {
                alert("服务器异常!");
            }
        },
        get_new_jig_about_submit_detail:function(bill_no){
            if (this.jig_detail_about_submit_list.length!=0){
                for (var i=0;i<this.jig_detail_about_submit_list.length;i++){
                    if(this.jig_detail_about_submit_list[i].bill_no === bill_no){
                        this.jig_detail_about_submit_detail = this.jig_detail_about_submit_list[i];
                    }
                }
            }
        },
        get_submit_man_about_submit_detail:function (bill_no) {
            if(this.submit_man_about_submit_list.length!=0){
                for(var i=0;i<this.submit_man_about_submit_list.length;i++){
                    if(this.submit_man_about_submit_list[i].bill_no === bill_no){
                        this.submit_man_about_submit_detail = this.submit_man_about_submit_list[i];
                    }
                }
            }
        },
        change:function(){
            var temp = this.option_new_jig;
            temp.series[0].data = this.echart_jig_count_list;
            temp.series[1].data = this.echart_store_jig_count_list;
            temp.xAxis.data = this.echart_jig_code_list;
            this.ehart_style_new_jig.setOption(temp);
        },
        get_echart_submit_man_data:function () {
            var temp = this.option_submit_man;
            for (var i=0;i<this.submit_man_list.length;i++){
                var val = {value:0,name:""};
                val.value = this.submit_man_list[i].submit_count;
                val.name = this.submit_man_list[i].submit_name;
                /*console.log(val);
                console.log(temp.series[0].data);
                temp.series[0].data.push(val);*/
                temp.series[0].data[i] = val;
            }
            this.echart_style_submit_man.setOption(temp);
        }
    },
    computed:{
        new_jig_percent:function () {
            return Math.round(this.jig_count / this.store_jig_count * 10000) / 100.0 + "%";
        },
        submit_man_count:function () {
            return this.submit_man_list.length;
        },
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
                url:"manager_get_scrap_submit_list",
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
                url:"manager_check_scrap_submit",
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
                url:"manager_get_scrap_submit_list_history",
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
                url:"manager_get_jig_info_list",
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
})