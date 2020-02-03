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
        code: [""],
        count: [1],
        production_line_list: production_line_list,
        code_list: code_list
    },
    created: function () {

    },
    methods: {
        addMax: function () {
            if (this.max !== 4) {
                this.max++;
                this.code.push("");
                this.count.push(1);
            }
        },
        add_shoplist: function () {
            var that =  this;
            if ($("#add_myshoplist [style='border-color: rgb(201, 48, 44);']").length > 0) {
                $("#add_myshoplist [style='border-color: rgb(201, 48, 44);']:eq(0)").focus();
                return false;
            }
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
                        that.clean()
                        show_myshoplist.getData();
                    } else {
                        alert(res);
                    }
                }
            })
        },
        clean: function () {
            this.code = [""];
            this.count = [""];
            this.max = 1;
        },
        del: function (index) {
            if (this.max > 1) {
                this.code.splice(index, 1);
                this.count.splice(index, 1);
                this.max -= 1;
            }
        },
        show: function () {
            console.log(this.code);
            console.log(this.count);
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
        change_production_line_id: "",
        change_code: [],
        change_count: [],
        change_id:null
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData() {
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
        change: function (id, index) {
            this.change_id = id;
            this.purchase_income_submit = this.purchase_income_submit_list[index];
            this.change_production_line_id = this.purchase_income_submit.production_line_id;
            this.change_code = this.purchase_income_submit.code.concat([]);
            this.change_count = this.purchase_income_submit.count.concat([]);
        },
        add: function () {
            if (this.change_code.length < 4) {
                this.change_code.push("");
                this.change_count.push(1);
            }
        },
        clean: function () {
            this.change_code = [""];
            this.change_count = [""];
        },
        del: function (index) {
            if (this.change_code.length > 1) {
                this.change_code.splice(index, 1);
                this.change_count.splice(index, 1);
            }
        },
        changeSubmit:function () {
            var that = this;
            if ($("#show_myshoplist [style='border-color: rgb(201, 48, 44);']").length > 0) {
                $("#show_myshoplist [style='border-color: rgb(201, 48, 44);']:eq(0)").focus();
                return false;
            }
            $.ajax({
                url:"update_purchase_income_submit",
                data:{
                    id:this.change_id,
                    production_line_id:this.change_production_line_id,
                    code:this.change_code,
                    count:this.change_count
                },
                success:function (res) {
                    alert(res);
                    if (res !=="服务器错误"){
                        $("#myshoplist_detail").modal("hide");
                        that.getData();
                    }
                }
            })
        }
    }
});