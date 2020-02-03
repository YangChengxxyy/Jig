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
        number: [],
        production_line_list: production_line_list,
        code_list: code_list
    },
    created: function () {
        const that = this;
    },
    methods: {
        addMax: function () {
            if (this.max !== 4) {
                this.max++;
            }
        },
        add_shoplist: function () {
            console.log(this.code);
            console.log(this.number);
            $.ajax({
                url: "add_shoplist",
                data: {
                    bill_no: this.bill_no,
                    submit_id: this.submit_id,
                    production_line_id: this.production_line_id,
                    code: this.code,
                    number: this.number
                },
                success: function (res) {
                    if (res === "添加成功") {
                        alert(res);
                        $("#add_myshoplist").modal("hide");
                    } else {
                        alert(res);
                    }
                }
            })
        },
        clean: function () {
            this.code = [];
            this.number = [];
            this.max = 1;
        },
        closeAdd: function () {

        }
    }
});
//我的采购单数据的显示
var show_myshoplist = new Vue({
    el: "myShopList",
    data: {
        purchase_income_submit_list: [],
        purchase_income_submit: null
    },
    created: function () {
        var that = this;
        $.ajax({
            url: "get_purchase_income_submit_list",
            success: function (res) {
                that.purchase_income_submit_list = res;
            }
        })
    },
});