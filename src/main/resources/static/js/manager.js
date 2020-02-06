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
            const that = this;
            $.ajax({
                url:"get_manager_purchaseCheck_list",
                data: {
                    now_page_number:this.now_page_number,
                    user_id:"111111"
                },
                success:function (res) {
                    that.purchase_submit_list = res;
                }
            })
        },
        get_purchaselist_detail:function (id) {
            const that = this;
            if(this.purchase_submit_list.length!=0) {
                this.purchase_submit = this.purchase_submit_list[id];
            }else{
                alert("服务器异常!")
            }
        },
        pass_submit:function (id,pass) {
            const that = this;
            $.ajax({
                url: "manager_first_pass_purchase_submit",
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
})
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
            const that = this;
            $.ajax({
                url:"get_manager_purchaselist_history",
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
            const that = this;
            if(this.purchase_submit_list.length!=0) {
                this.purchase_submit = this.purchase_submit_list[id];
            }else{
                alert("服务器异常!")
            }
        },
        clear_date:function () {
            this.submit_time = "";
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
            const that = this;
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
            const that = this;
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