Vue.component('v-chart', VueECharts);
Vue.component('my-pagination', page);
let production_line_list = [];
let code_list = [];
let workcell_list = [];
let id = $("#id").val();

function getUrl(obj) {
    let str = "";
    let length = 0;
    Object.keys(obj).forEach(function (key) {
        length++;
    });
    let count = 0;
    Object.keys(obj).forEach(function (key) {
        if (count < length - 1) {
            str += key + "=" + obj[key] + "&";
        } else {
            str += key + "=" + obj[key];
        }
        count++;
    });
    return str;
}

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
$.ajax("admin/get_workcell_list", {
    async: false,
    success(data, textStatus, jqXHR) {
        workcell_list = data;
    }
});
const information_manage = new Vue({
    el: "#information_manage",
    data: {
        user_list: [],

        max_page_number: 0,
        now_page_number: 1,
        now_page_size: 5,
        page_size_list: ['5', '10', '15', '20'],
        all_count: 0,

        workcell_list: workcell_list,
        id: "",
        name: "",
        workcell_id: "",
        search_date_range: ""
    },
    methods: {
        getData: function () {
            let that = this;
            let splits = this.search_date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            $.ajax("admin/search_user_information", {
                data: {
                    submit_id: id,
                    page_number: that.now_page_number,
                    page_size: that.now_page_size,
                    id: that.id,
                    name: that.name,
                    workcell_id: that.workcell_id,
                    start_date: splits[0],
                    end_date: splits[1]
                },
                success(data, textStatus, jqXHR) {
                    that.user_list = data["data"];
                    that.max_page_number = data["max"];
                    that.all_count = data['all'];
                }
            });
        },
        info_profile: function (index) {
            info_profile.user = this.user_list[index];
        },
        del: function (id) {
            let that = this;
            if (confirm("确认删除，不可撤销！")) {
                $.ajax("admin/del_user", {
                    data: {
                        id: id,
                    },
                    success(data, textStatus, jqXHR) {
                        if (data) {
                            alert("删除完成！");
                            that.getData();
                        } else {
                            alert("服务器错误！");
                        }
                    }
                })
            }
        },
        change_user: function (index) {
            change_user.user = {...this.user_list[index]};
        },
        search: function () {
            if (this.id === "" && this.name === "" && this.workcell_id === "" && this.search_date_range === "") {
                return false;
            }
            this.now_page_number = 1;
            this.max_page_number = 0;
            this.getData();
        },
        clear: function () {
            this.search_user = null;
            this.search_date_range = "";
        }
    },
    computed: {
        onePageUrl: function () {
            let splits = this.search_date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            let data = {
                submit_id: id,
                page_number: this.now_page_number,
                id: this.id,
                name: this.name,
                workcell_id: this.workcell_id,
                start_date: splits[0],
                end_date: splits[1],
                file_name: "page-" + this.now_page_number + ".xls"
            };
            return "/admin/download_one_user_info?" + getUrl(data);
        },
        allPageUrl: function () {
            let splits = this.search_date_range.split(" - ");
            if (splits.length === 1) {
                splits = ['', ''];
            }
            let data = {
                submit_id: id,
                page_number: this.now_page_number,
                id: this.id,
                name: this.name,
                workcell_id: this.workcell_id,
                start_date: splits[0],
                end_date: splits[1],
                file_name: "page-all.xls"
            };
            return "/admin/download_all_user_info?" + getUrl(data);
        }
    },
});
const info_profile = new Vue({
    el: "#info_profile",
    data: {
        user: null,
    }
});
const change_user = new Vue({
    el: "#change_user",
    data: {
        user: null,
        workcell_list: workcell_list,
    },
    methods: {
        submit_change_user: function () {
            let that = this;
            $.ajax("admin/change_user", {
                data: this.user,
                success(data, textStatus, jqXHR) {
                    if (data) {
                        alert("修改成功！");
                        $(that.$el).modal("hide");
                    } else {
                        alert("服务器错误，尝试刷新页面重试");
                    }
                    information_manage.getData();
                }
            })
        }
    }
});
const jig_definition = new Vue({
    el: "#jig_definition",
    data: {
        jig_list: [],
        name: "",
        workcell: "",
        family: "",
        user_for: "",
        code: "",

        max_page_number: 0,
        now_page_number: 1,
        now_page_size: 5,
        page_size_list: ['5', '10', '15', '20'],
        all_count: 0
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("naive/search_jig_definition", {
                data: {
                    code: this.code,
                    name: this.name,
                    workcell: this.workcell,
                    family: this.family,
                    user_for: this.user_for,
                    page_number: this.now_page_number,
                    page_size: this.now_page_size
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果！")
                    } else {
                        that.jig_list = res['data'];
                        that.max_page_number = res['max'];
                        that.all_count = res['all'];
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
            jig_definition_detail.jig = this.jig_list[index];
            jig_definition_detail.jig.part_no = jig_definition_detail.jig.part_no.split("|");
            jig_definition_detail.jig.model = jig_definition_detail.jig.model.split("|");
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
            return "naive/download_one_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&page_number=" + this.now_page_number + "&file_name=page" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            return "naive/download_all_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&file_name=page-all.xls";
        }
    }
});
const jig_definition_detail = new Vue({
    el: "#jig_definition_detail",
    data: {
        jig: null
    }
});
const model_part_info = new Vue({
    el: "#model_part_info",
    data: {
        part_list: [],
        model_list: []
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("admin/get_part", {
                success(data, textStatus, jqXHR) {
                    that.part_list = data;
                }
            });
            $.ajax("admin/get_model", {
                success(data, textStatus, jqXHR) {
                    that.model_list = data;
                }
            })
        }
    }
});
const cn_en = new Vue({
    el: "#cn_en",
    data: {
        cn_en_list: []
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("admin/get_cn_en", {
                success(data, textStatus, jqXHR) {
                    that.cn_en_list = data;
                }
            })
        }
    },
    computed: {},
    watch: {},
});