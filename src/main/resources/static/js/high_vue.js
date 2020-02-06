//添加采购单
let production_line_list = [];
let code_list = [];
$.ajax({
    url: "high_get_production_line_list",
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

//我的采购单数据的显示
const show_myshoplist = new Vue({
    el: "#myShopList",
    data: {
        purchase_income_submit_list: [],
        purchase_income_submit: null,
        production_line_list: production_line_list,
        code_list: code_list,
        change_production_line_id: "",
        change_code: [],
        change_count: [],
        change_id: null,
        //分页所需
        now_page_number: 1,
        max_page_number: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData() {
            const that = this;
            $.ajax({
                url: "high_get_purchase_income_submit_list",
                data: {
                    page_number: this.now_page_number
                },
                success: function (res) {
                    $.each(res.data, function (i, v) {
                        v.code = v.code.split("|");
                        v.count = v.count.split("|");
                    });
                    that.purchase_income_submit_list = res.data;
                    that.max_page_number = res.max;
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
        changeSubmit: function () {
            const a = $("#myshoplist_detail [style*='border-color: rgb(201, 48, 44);']");
            if (a.length > 0) {
                $("#myshoplist_detail [style*='border-color: rgb(201, 48, 44);']:eq(0)").focus();
                a.shake(2, 10, 200);
                return false;
            } else {
                var that = this;
                $.ajax({
                    url: "high_update_purchase_income_submit",
                    data: {
                        id: this.change_id,
                        production_line_id: this.change_production_line_id,
                        code: this.change_code.join("|"),
                        count: this.change_count.join("|")
                    },
                    success: function (res) {
                        alert(res);
                        if (res !== "服务器错误") {
                            $("#myshoplist_detail").modal("hide");
                            that.getData();
                        }
                    }
                })
            }
        }
    },
    watch: {
        change_code: function (n) {
            let that = this;
            that.code_list = code_list;
            $.each(n, function (i, v) {
                that.code_list = that.code_list.filter(function (item) {
                    return item !== v;
                })
            });
        }
    }
});
const add_myshoplist = new Vue({
    el: "#add_myshoplist",
    data: {
        bill_no: "",
        submit_id: "",
        production_line_id: "",
        max: 1,
        code: [""],
        count: [1],
        production_line_list: production_line_list,
        code_list: code_list,
    },
    watch: {
        code: function (n) {
            let that = this;
            that.code_list = code_list;
            $.each(n, function (i, v) {
                that.code_list = that.code_list.filter(function (item) {
                    return item !== v;
                })
            });
        }
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
            const a = $("#add_myshoplist [style*='border-color: rgb(201, 48, 44);']");
            if (a.length > 0) {
                $("#add_myshoplist [style*='border-color: rgb(201, 48, 44);']:eq(0)").focus();
                a.shake(2, 10, 200);
                return false;
            } else {
                const that = this;
                $.ajax({
                    url: "high_add_shoplist",
                    data: {
                        bill_no: this.bill_no,
                        submit_id: this.submit_id,
                        production_line_id: this.production_line_id,
                        code: this.code.join("|"),
                        count: this.count.join("|")
                    },
                    success: function (res) {
                        if (res === "添加成功") {
                            alert(res);
                            $("#add_myshoplist").modal("hide");
                            that.clean();
                            show_myshoplist.getData();
                        } else {
                            alert(res);
                        }
                    }
                })
            }
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
        }
    }
});
const historyShop = new Vue({
    el: "#historyShop",
    data: {
        bill_no: "",
        submit_name: "",
        code: "",
        production_line_id: "",
        status: "",
        date_range: '',
        history_list: [],
        now_page_number: 1,
        max_page_number: 0
    },
    methods: {
        clean: function () {
            this.bill_no = "";
            this.submit_name = "";
            this.code = "";
            this.production_line_id = "";
            this.status = "";
            this.history_list = [];
            this.date_range = "";
            this.now_page_number = 1;
            this.max_page_number = 0;
        },
        getData: function () {
            let that = this;
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            $.ajax({
                url: "high_search_purchase_income_history",
                data: {
                    bill_no: this.bill_no,
                    submit_name: this.submit_name,
                    code: this.code,
                    production_line_id: this.production_line_id,
                    status: this.status,
                    start_date: splits[0],
                    end_date: splits[1],
                    page_number: this.now_page_number
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果！")
                    } else {
                        $.each(res.data, function (index, value) {
                            value.code = value.code.split("|");
                            value.count = value.count.split("|");
                        });
                        that.history_list = res.data;
                        that.max_page_number = res.max;
                    }
                }
            });
        },
        search: function (page_number) {
            this.now_page_number = 1;
            this.getData();
        }
    }
});