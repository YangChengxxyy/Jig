//显示采购审批list
var purchase_check = new Vue({
    el: "#shopCheck",
    data: {
        purchaseCheck_list: [],
        purchaselist: "",
        now_page_number: 1,
        max_page_number: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax({
                url: "get_manager_purchaseCheck_list",
                data: {
                    user_id: "111111"
                },
                success: function (res) {
                    that.purchaseCheck_list = res;
                }
            })
        },
        get_purchaselist_detail: function (id) {
            const that = this;
            $.ajax({
                url: "get_manager_purchase_detail",
                data: {
                    id: id
                },
                success: function (res) {
                    that.purchaselist = res;
                    that.purchaselist.code = res.code.split("|");
                    that.purchaselist.count = res.count.split("|");
                }
            })
        },
        pass_submit: function (id, pass) {
            const that = this;
            $.ajax({
                url: "manager_first_pass_purchase_submit",
                data: {
                    id: id,
                    pass: pass
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
    el: "#historyShop",
    data: {
        purchaselist: [],
        purchase_submit: null,
        submit_name: "",
        submit_time: "",
        bill_no: "",
        status: "",
        options: [{text: '', value: ''},
            {text: '待审批', value: '0'},
            {text: '初审未通过', value: '1'},
            {text: '初审通过', value: '2'},
            {text: '终审未通过', value: '3'},
            {text: '终审通过', value: '4'}],
        now_page_number: 1,
        max_page_number: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax({
                url: "get_manager_purchase_list_history",
                data: {
                    submit_name: this.submit_name,
                    submit_time: this.submit_time,
                    bill_no: this.bill_no,
                    status: this.status,
                    page_number: this.now_page_number
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果!")
                    }
                    that.purchaselist = res.data;
                    that.max_page_number = res.max;
                }
            })
        },
        turn_page: function (page_number) {
            const that = this;
            if (page_number === this.now_page_number) {
                return false;
            }
            $.ajax({
                url: "get_manager_purchaselist",
                data: {
                    page_number: page_number
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果！")
                    } else {
                        that.now_page_number = page_number;
                        that.jig_list = res.data;
                        that.max_page_number = res.max;
                    }
                }
            })
        },
        get_purchaselist_detail: function (id) {
            const that = this;
            $.ajax({
                url: "get_manager_purchase_detail",
                data: {
                    id: id
                },
                success: function (res) {
                    that.purchase_submit = res;
                    that.purchase_submit.code = res.code.split("|");
                    that.purchase_submit.count = res.count.split("|");
                }
            })
        },
        clear_date: function () {
            this.submit_time = "";
        }
    }
})

//工夹具信息
var jig_info = new Vue({
    el: "#seqInfo",
    data: {
        jig_list: [],
        jig: "",
        now_page_number: 1,
        max_page_number: 0
    },
    created: function () {
        this.get_jig_info_list();
    },
    methods: {
        get_jig_info_list: function () {
            const that = this;
            $.ajax({
                url: "get_manager_jig_info_list",
                data: {
                    page_number: 1
                },
                success: function (res) {
                    that.jig_list = res.data;
                    that.max_page_number = res.max;
                }
            })
        },
        turn_page: function (page_number) {
            const that = this;
            if (page_number === this.now_page_number) {
                return false;
            }
            $.ajax({
                url: "get_manager_jig_info_list",
                data: {
                    page_number: page_number
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果！")
                    } else {
                        that.now_page_number = page_number;
                        that.jig_list = res.data;
                        that.max_page_number = res.max;
                    }
                }
            })
        },
        //未完成
        edit_jigInfo: function (user_id) {
            const that = this;
            $.ajax({
                url: "edit_manager_jigInfo",
                data: {
                    user_id: user_id
                },
                success: function (res) {
                    alert(res);
                }
            })
        }
    }
})