//添加采购单
let production_line_list = [];
let code_list = [];
$.ajax("get_production_line_list", {
    async: false,
    success: function (res) {
        production_line_list = res;
    }
});
$.ajax("get_code_list", {
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
            $.ajax("high_get_purchase_income_submit_list", {
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
        change: function (id, index, status) {
            if (status === '0') {
                this.change_id = id;
                this.purchase_income_submit = this.purchase_income_submit_list[index];
                this.change_production_line_id = this.purchase_income_submit.production_line_id;
                this.change_code = this.purchase_income_submit.code.concat([]);
                this.change_count = this.purchase_income_submit.count.concat([]);
            }
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
                $.ajax("high_update_purchase_income_submit", {
                    data: {
                        id: this.change_id,
                        production_line_id: this.change_production_line_id,
                        code: this.change_code.join("|"),
                        count: this.change_count.join("|")
                    },
                    success: function (res) {
                        if (res) {
                            alert("修改成功！");
                            $("#myshoplist_detail").modal("hide");
                            that.getData();
                        } else {
                            alert("服务器错误！");
                        }
                    }
                })
            }
        },
        delSubmit: function (id, status) {
            if (status === '0') {
                if (confirm("确认删除此申请单！！！")) {
                    $.ajax("high_delete_purchase_submit", {
                        data: {
                            id: id
                        },
                        success: function (res) {
                            if (res) {
                                alert("删除成功！");
                                that.getData();
                            } else {
                                alert("服务器错误");
                                that.getData();
                            }
                        }
                    });
                }
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
                $.ajax("high_add_shoplist", {
                    data: {
                        bill_no: this.bill_no,
                        submit_id: this.submit_id,
                        production_line_id: this.production_line_id,
                        code: this.code.join("|"),
                        count: this.count.join("|")
                    },
                    success: function (res) {
                        if (res) {
                            alert("添加成功！");
                            $("#add_myshoplist").modal("hide");
                            that.clean();
                            show_myshoplist.getData();
                        } else {
                            alert("服务器错误！");
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
        max_page_number: 0,
        history: null
    },
    methods: {
        clear: function () {
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
            $.ajax("high_search_purchase_income_history", {
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
        },
        checkDetail: function (index) {
            this.history = this.history_list[index];
        }
    },
    computed: {
        onePageUrl: function () {
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            return "high_download_one_purchase_history?code=" + this.code + "&submit_name=" + this.submit_name + "&bill_no=" + this.bill_no + "&production_line_id=" + this.production_line_id + "&status=" + this.status + "&start_date=" + splits[0] + "&end_date=" + splits[1] + "&page_number=" + this.now_page_number + "&file_name=page-" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            return "high_download_all_purchase_history?code=" + this.code + "&submit_name=" + this.submit_name + "&bill_no=" + this.bill_no + "&production_line_id=" + this.production_line_id + "&status=" + this.status + "&start_date=" + splits[0] + "&end_date=" + splits[1] + "&file_name=page-all.xls";
        }
    }
});
const myrepair = new Vue({
    el: "#myrepair",
    data: {
        submit_code: "",
        submit_seq_id: "",
        submit_trouble_reason: "",
        submit_trouble_photo: "点击上传图片",
        code_list: code_list,
        now_page_number: 1,
        max_page_number: 0,
        repair_list: []
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("high_get_repair_jig", {
                data: {
                    page_number: this.now_page_number,
                },
                success: function (res) {
                    that.repair_list = res['data'];
                    that.max_page_number = res['max'];
                }
            })
        },
        file: function () {
            this.submit_trouble_photo = $("input[type=file]")[0].files[0].name;
        }
    }
});
const historyMyrepair = new Vue({
    el: "#historyMyrepair",
    data: {
        code: "",
        seq_id: "",
        submit_name: "",
        trouble_reason: "",
        status: "",
        date_range: "",
        history_list: [],
        history: null,
        now_page_number: 1,
        max_page_number: 0
    },
    methods: {
        getData: function () {
            let that = this;
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            $.ajax("high_search_repair_history", {
                data: {
                    code: this.code,
                    seq_id: this.seq_id,
                    submit_name: this.submit_name,
                    status: this.status,
                    start_date: splits[0],
                    end_date: splits[1],
                    page_number: this.now_page_number
                },
                success: function (res) {
                    if (res['data'].length === 0) {
                        alert("没有结果");
                        return false;
                    }
                    that.history_list = res['data'];
                    that.max_page_number = res['max'];
                }
            })
        },
        check_detail: function (index) {
            this.history = this.history_list[index];
        },
        clear: function () {
            this.code = "";
            this.seq_id = "";
            this.submit_name = "";
            this.trouble_reason = "";
            this.status = "";
            this.date_range = "";
            this.now_page_number = 1;
            this.max_page_number = 0;
            this.history_list = [];
            this.history = null;
        },
        search: function () {
            this.now_page_number = 1;
            this.max_page_number = 0;
            this.getData();
        }
    },
    computed: {
        onePageUrl: function () {
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            return "high_download_one_repair_history?code=" + this.code + "&seq_id=" + this.seq_id + "&submit_name=" + this.submit_name + "&status=" + this.status + "&start_date=" + splits[0] + "&end_date=" + splits[1] + "&page_number=" + this.now_page_number + "&file_name=page-" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            return "high_download_all_repair_history?code=" + this.code + "&seq_id=" + this.seq_id + "&submit_name=" + this.submit_name + "&status=" + this.status + "&start_date=" + splits[0] + "&end_date=" + splits[1] + "&file_name=page-all.xls";
        }
    }
});
const myscrap = new Vue({
    el: "#myscrap",
    data: {
        now_page_number: 1,
        max_page_number: 0,
        scrap_list: [],
        script: null,
        code_list: code_list,
        submit_code: "",
        submit_seq_id: "",
        submit_scrap_reason: "",
        submit_scrap_photo: "点击上传图片"
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax("high_get_scrap", {
                data: {
                    submit_id: $("#id").val(),
                    page_number: this.now_page_number
                },
                success: function (res) {
                    that.scrap_list = res['data'];
                    that.max_page_number = res['max'];
                }
            });
        },
        scrap_detail: function (index) {
            this.script = this.scrap_list[index];
        },
        del: function (id) {
            $.ajax("high_del_scrap", {
                data: {
                    id: id
                },
                success: function (res) {

                }
            });
        },
        submit_scrap() {
            const formData = new FormData();
            formData.append("file", $("#scrap_photo")[0].files[0]);
            formData.append("submit_id", $("#id").val());
            formData.append("code", this.submit_code);
            formData.append("seq_id", this.submit_seq_id);
            formData.append("scrap_reason", this.submit_scrap_reason);
            let that = this;
            $.ajax("high_submit_scrap", {
                type: "post",
                processData: false,
                contentType: false,
                data: formData,
                success: function (res) {
                    if (res) {
                        alert("提交成功！");
                        that.submit_code = "";
                        that.submit_seq_id = "";
                        that.submit_scrap_reason = "";
                        $("#scrap_photo")[0].files = null;
                        that.submit_scrap_photo = "点击上传图片";
                        that.getData();
                        $("#submit_repair").modal("hide");
                    } else {
                        alert("服务器错误！");
                    }
                }
            })
        },
        file: function () {
            this.submit_scrap_photo = $("#scrap_photo")[0].files[0].name;
        }
    }
});
const historyMyscrap = new Vue({
    el: "#historyMyscrap",
    data: {
        scarp_history_list: [],
        scarp_history: null,
        code: "",
        seq_id: "",
        submit_name: "",
        trouble_reason: "",
        status: "",
        date_range: "",
        now_page_number: 1,
        max_page_number: 0
    },
    methods: {
        getData: function () {
            let that = this;
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            $.ajax("high_search_scrap_history", {
                data: {
                    code: this.code,
                    seq_id: this.seq_id,
                    submit_name: this.submit_name,
                    status: this.status,
                    start_date: splits[0],
                    end_date: splits[1],
                    page_number: this.now_page_number
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果！")
                    } else {
                        that.scarp_history = res['data'];
                        that.max_page_number = res['max'];
                    }
                }
            })
        },
        check_detail: function (index) {
            this.scarp_history = this.scarp_history_list[index];
        },
        clean: function () {
            this.code = "";
            this.seq_id = "";
            this.submit_name = "";
            this.trouble_reason = "";
            this.status = "";
            this.date_range = "";
            this.now_page_number = 1;
            this.max_page_number = 0;
            this.history_list = [];
            this.history = null;
        },
        search: function () {
            this.now_page_number = 1;
            this.max_page_number = 0;
            this.getData();
        }
    },
    computed: {
        onePageUrl: function () {
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            return "high_download_one_scrap_history?code=" + this.code + "&seq_id=" + this.seq_id + "&submit_name=" + this.submit_name + "&status=" + this.status + "&start_date=" + splits[0] + "&end_date=" + splits[1] + "&page_number=" + this.now_page_number + "&file_name=page-" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            let splits = this.date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            return "high_download_all_scrap_history?code=" + this.code + "&seq_id=" + this.seq_id + "&submit_name=" + this.submit_name + "&status=" + this.status + "&start_date=" + splits[0] + "&end_date=" + splits[1] + "&file_name=page-all.xls";
        }
    }
});

function position(res) {
    return (res.jig_cabinet_id == null ? "" : ("" + res.jig_cabinet_id)) + (res.location_id == null ? "" : ("-" + res.location_id)) + (res.bin == null ? "" : ("-" + res.bin));
}

const seqInfo = new Vue({
    el: "#seqInfo",
    data: {
        jig_list: [],
        jig: "",
        name: "",
        workcell: "",
        family: "",
        user_for: "",
        code: "",
        now_page_number: 1,
        max_page_number: 0
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax({
                url: "naive_search_jig_definition",
                data: {
                    code: this.code,
                    name: this.name,
                    workcell: this.workcell,
                    family: this.family,
                    user_for: this.user_for,
                    page_number: this.now_page_number
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果！")
                    } else {
                        that.jig_list = res.data;
                        that.max_page_number = res.max;
                    }
                }
            })
        },
        search: function () {
            this.now_page_number = 1;
            if (this.code === '' && this.name === '' && this.workcell === '' && this.family === '' && this.user_for === '') {
                return false;
            }
            this.getData();
        },
        check_detail: function (index) {
            this.jig = this.jig_list[index];
            this.jig.part_no = this.jig.part_no.split("|");
            this.jig.model = this.jig.model.split("|");
        },
        clear: function () {
            this.jig = null;
            this.max_page_number = 0;
            this.now_page_number = 1;
            this.jig_list = [];
            this.code = "";
            this.name = "";
            this.workcell = "";
            this.family = "";
            this.user_for = "";
        }
    },
    computed: {
        onePageUrl: function () {
            return "naive_download_one_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&page_number=" + this.now_page_number + "&file_name=page" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            return "naive_download_all_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&file_name=page-all.xls";
        }
    }
});