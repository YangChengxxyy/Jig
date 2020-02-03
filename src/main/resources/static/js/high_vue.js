//添加采购单
let production_line_list = [];
let code_list = [];
$.ajax({
    url: "get_production_line_list",
    async: false,
    success: function (res) {
        production_line_list = res;
    }
});
$.ajax({
    url: "get_code_list",
    async: false,
    success: function (res) {
        code_list = res;
    }
});
var add_myshoplist = new Vue({
    el: "#add_myshoplist",
    data: {
        bill_no: "",
        submit_id: "",
        production_line_id: "",
        max: 1,
        code: [],
        count: [],
        production_line_list: production_line_list,
        code_list: code_list
    },
    created: function () {

    },
    methods: {
        addMax: function () {
            if (this.max !== 4) {
                this.max++;
            }
        },
        add_shoplist: function () {
            $.ajax({
                url: "add_shoplist",
                data: {
                    bill_no: this.bill_no,
                    submit_id: this.submit_id,
                    production_line_id: this.production_line_id,
                    code: this.code,
                    count: this.count
                },
                success: function (res) {
                    if (res === "添加成功") {
                        alert(res);
                        $("#add_myshoplist").modal("hide");
                        show_myshoplist.getData();
                    } else {
                        alert(res);
                    }
                }
            })
        },
        clean: function () {
            this.code = [];
            this.count = [];
            this.max = 1;
        }
    }
});
//我的采购单数据的显示
var show_myshoplist = new Vue({
    el: "#myShopList",
    data: {
        purchase_income_submit_list: [],
        purchase_income_submit: null,
        production_line_list: production_line_list,
        code_list: code_list,
        change_production_id: "",
        change_code:[],
        change_count:[]
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData(){
            const that = this;
            $.ajax({
                url: "get_purchase_income_submit_list",
                success: function (res) {
                    $.each(res, function (i, v) {
                        v.code = v.code.split("|");
                        v.count = v.count.split("|");
                    });
                    that.purchase_income_submit_list = res;
                }
            })
        },
        changeSubmit: function (id, index) {
            this.purchase_income_submit = this.purchase_income_submit_list[index];
            this.change_production_id = this.purchase_income_submit.production_line_id;
            this.change_code = this.purchase_income_submit.code;
            this.change_count = this.purchase_income_submit.count;
        }
    }
});