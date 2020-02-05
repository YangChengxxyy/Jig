function position(res) {
    return (res.jig_cabinet_id == null ? "" : ("" + res.jig_cabinet_id)) + (res.location_id == null ? "" : ("-" + res.location_id)) + (res.bin == null ? "" : ("-" + res.bin));
}

const search_jig = new Vue({
    el: "#search_jig",
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
                url: "search_jig_definition",
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
        // havePrevious: function () {
        //     return {
        //         disabled: this.now_page_number === 1
        //     }
        // },
        // haveNext: function () {
        //     return {
        //         disabled: this.now_page_number === this.max_page_number
        //     }
        // },
        onePageUrl: function () {
            return "naive_download_search_one_excel?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&page_number=" + this.now_page_number + "&file_name=onePage" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            return "naive_download_search_all_excel?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&file_name=allPage.xls";
        }
    }
});
const return_jig = new Vue({
    el: "#return_jig",
    data: {
        outgoing_jig_list: [],
        user_id: "",
        code: "",
        check_user_id: "",
        check_position: "",
        code_seq_id: "",
        user_name: "",
        position: "",
        check1: false,
        check2: false,
        check3: false,
        id: ""
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax({
                url: "get_outgoing_jig",
                success: function (res) {
                    that.outgoing_jig_list = res;
                    $.each(that.outgoing_jig_list, function (i, v) {
                        v.position = position(v);
                    })
                }
            });
        },
        changeCheck: function (user_id, code, position, id) {
            this.user_id = user_id; //用于校验user_id输入是否正确
            this.id = id; //用于入库
            this.check_position = position;//用于校验code_seq_id是否正确
            this.check_user_id = "";
            this.code_seq_id = "";
            this.user_name = "";
            this.position = "";
            this.check1 = false;
            this.check2 = false;
            this.check3 = false;
        },
        getUsername: function () {
            const that = this;
            $.ajax({
                url: "get_user_name",
                data: {
                    user_id: this.check_user_id
                },
                success: function (res) {
                    that.user_name = res;
                    that.check1 = that.user_id === that.check_user_id;
                }
            })
        },
        getPosition: function () {
            const that = this;
            that.check2 = that.code_seq_id.indexOf(that.code + "-") !== -1;
            if (this.code_seq_id.indexOf("-") === -1) {//先判断是否输入正确
                return false;
            }
            const splits = that.code_seq_id.split("-");
            $.ajax({
                url: "get_position",
                data: {
                    code: splits[0],
                    seq_id: splits[1]
                },
                success: function (res) {
                    that.position = position(res);
                    that.check2 = that.position === that.check_position && that.code_seq_id.indexOf(that.code + "-") !== -1
                }
            })
        },
        returnJig: function () {
            const that = this;
            const splits = this.code_seq_id.split("-");
            if (this.check1 && this.check2 && this.check3) {
                $.ajax({
                    url: "return_jig",
                    data: {
                        code: splits[0],
                        seq_id: splits[1],
                        rec_id: $("#id").val(),
                        id: this.id,
                        user_id: this.user_id
                    },
                    success: function (res) {
                        alert(res);
                        $("#ruku").modal("hide");
                        that.getData();
                        jig_outgoing.getData();
                    }
                })
            }
        }
    }
});
const jig_outgoing = new Vue({
    el: "#jig_outgoing",
    data: {
        outgoing_submit_list: [],
        user_id: "",
        check_user_id: "",
        code: "",
        code_seq_id: "",
        user_name: "",
        position: "",
        check1: false,
        check2: false,
        id: ""
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax({
                url: "get_outgoing_submit",
                success: function (res) {
                    that.outgoing_submit_list = res
                }
            })
        },
        changeCheck: function (user_id, code, id) {
            this.user_id = user_id;
            this.code = code;
            this.id = id;
            this.check_user_id = "";
            this.code_seq_id = "";
            this.user_name = "";
            this.position = "";
            this.check1 = false;
            this.check2 = false;
        },
        outgoing: function () {
            if (this.check1 && this.check2) {
                const splits = this.code_seq_id.split("-");
                var that = this;
                $.ajax({
                    url: "outgo_jig",
                    data: {
                        id: this.id,
                        code: splits[0],
                        seq_id: splits[1],
                        rec_id: $("#id").val()
                    },
                    success: function (res) {
                        $("#chuku").modal("hide");
                        alert(res);
                        that.getData();
                        return_jig.getData();
                    }
                });
            }
        },
        getUsername: function () {
            const that = this;
            $.ajax({
                url: "get_user_name",
                data: {
                    user_id: this.check_user_id
                },
                success: function (res) {
                    that.user_name = res;
                    that.check1 = that.user_id === that.check_user_id;
                }
            })
        },
        getPosition: function () {
            const that = this;
            that.check2 = that.code_seq_id.indexOf(that.code + "-") !== -1;
            if (!that.check2) {//先判断是否输入正确
                return false;
            }
            const splits = that.code_seq_id.split("-");
            $.ajax({
                url: "get_position",
                data: {
                    code: splits[0],
                    seq_id: splits[1]
                },
                success: function (res) {
                    if (res.status === '1') {
                        that.position = position(res);
                        that.check2 = that.code_seq_id.indexOf(that.code + "-") !== -1;
                    } else {
                        that.position = "未在库中";
                        that.check2 = false;
                    }
                }
            })
        }
    }
});