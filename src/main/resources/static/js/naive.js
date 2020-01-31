var search_jig = new Vue({
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
        search: function () {
            this.now_page_number = 1;
            const that = this;
            $.ajax({
                url: "search_jig_definition",
                data: {
                    code: this.code,
                    name: this.name,
                    workcell: this.workcell,
                    family: this.family,
                    user_for: this.user_for,
                    page_number: 1
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
        check_detail: function (event, id) {
            const that = this;
            $.ajax({
                url: "get_simple_jig_definition",
                data: {
                    id: id
                },
                success: function (res) {
                    that.jig = res;
                    that.jig.part_no = that.jig.part_no.split("|");
                    that.jig.model = that.jig.model.split("|");
                }
            })
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
        },
        turn_page: function (page_number) {
            const that = this;
            if (page_number === this.now_page_number) {
                return false;
            }
            $.ajax({
                url: "search_jig_definition",
                data: {
                    code: this.code,
                    name: this.name,
                    workcell: this.workcell,
                    family: this.family,
                    user_for: this.user_for,
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
        }
    },
    computed: {
        havePrevious: function () {
            return {
                disabled: this.now_page_number === 1
            }
        },
        haveNext: function () {
            return {
                disabled: this.now_page_number === this.max_page_number
            }
        },
        onePageUrl: function () {
            return "naive_download_search_one_excel?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&page_number=" + this.now_page_number + "&file_name=onePage" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            return "naive_download_search_all_excel?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&file_name=allPage.xls";
        }
    }
});
var jig_outgoing = new Vue({
    el: "#jig_outgoing",
    data: {
        outgoing_submit_list: [],
        user_id: "",
        check_user_id: "",
        code:"",
        code_seq_id: "",
        user_name: "",
        position: ""
    },
    created: function () {
        const that = this;
        $.ajax({
            url: "get_outgoing_submit",
            success: function (res) {
                that.outgoing_submit_list = res
            }
        })
    },
    methods: {
        changeCheck: function (user_id,code) {
            this.user_id = user_id;
            this.code = code;
            this.check_user_id = "";
            this.code_seq_id = "";
            this.user_name = "";
            this.position = "";
        },
        outgoing: function () {
            if (this.user_id === this.check_user_id) {
                $.ajax({
                    url: "",
                    data: {}
                })
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
                }
            })
        },
        getPosition: function () {
            const that = this;
            if (this.code_seq_id.indexOf("-") === -1) {//先判断是否输入正确
                return false;
            }
            const splits = this.code_seq_id.split("-");
            console.log(splits);
            $.ajax({
                url: "get_position",
                data: {
                    code: splits[0],
                    seq_id: splits[1]
                },
                success: function (res) {
                    console.log(res);
                    that.position = res.jig_cabinet_id + "-" + res.location_id + (res.bin == null ? "" : ("-" + res.bin));
                }
            })
        }
    }
});