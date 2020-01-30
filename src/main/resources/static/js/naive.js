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
                        that.$data.jig_list = res.data;
                        that.$data.max_page_number = res.max;
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
                    that.$data.jig = res;
                    that.$data.jig.part_no = that.$data.jig.part_no.split("|");
                    that.$data.jig.model = that.$data.jig.model.split("|");
                }
            })
        },
        clear: function () {
            this.$data.jig = null;
            this.$data.max_page_number = 0;
            this.$data.now_page_number = 1;
            this.$data.jig_list = [];
            this.$data.code = "";
            this.$data.name = "";
            this.$data.workcell = "";
            this.$data.family = "";
            this.$data.user_for = "";
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
                        that.$data.now_page_number = page_number;
                        that.$data.jig_list = res.data;
                        that.$data.max_page_number = res.max;
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
        code_seq_id: "",
        user_name: "",
        position: ""
    },
    created: function () {
        const that = this;
        $.ajax({
            url: "get_outgoing_submit",
            success: function (res) {
                that.$data.outgoing_submit_list = res
            }
        })
    },
    methods: {
        changeCheck: function (user_id) {
            this.$data.user_id = user_id;
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
            console.log("change");
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
            if (this.code_seq_id.indexOf("-") !== -1){//先判断是否输入正确
                return false;
            }
            const splits = this.code_seq_id.split("-");
            $.ajax({
                url: "get_position",
                data: {
                    code: splits[0],
                    seq_id: splits[1]
                },
                success: function (res) {
                    that.position = res.jig_cabinet_id + "-" + res.location_id + "-" + res.bin;
                }
            })
        }
    }
});