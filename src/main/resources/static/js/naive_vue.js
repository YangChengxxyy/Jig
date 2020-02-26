function position(res) {
    return (res.jig_cabinet_id == null ? "" : ("" + res.jig_cabinet_id)) + (res.location_id == null ? "" : ("-" + res.location_id)) + (res.bin == null ? "" : ("-" + res.bin));
}

let production_line_list = [];
let code_list = [];
let id = $("#id").val();
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
            $.ajax("naive_search_jig_definition", {
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
            return "naive_download_one_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&page_number=" + this.now_page_number + "&file_name=page" + this.now_page_number + ".xls";
        },
        allPageUrl: function () {
            return "naive_download_all_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&file_name=page-all.xls";
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
        id: "",
        now_page_number: 1,
        max_page_number: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax("naive_get_outgoing_jig", {
                data: {
                    page_number: this.now_page_number
                },
                success: function (res) {
                    $.each(res.data, function (i, v) {
                        v.position = position(v);
                    });
                    that.outgoing_jig_list = res.data;
                    that.max_page_number = res.max;
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
            $.ajax("get_user_name", {
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
            $.ajax("get_position", {
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
                $.ajax("return_jig", {
                    data: {
                        code: splits[0],
                        seq_id: splits[1],
                        rec_id: $("#id").val(),
                        id: this.id,
                        user_id: this.user_id
                    },
                    success: function (res) {
                        if (res) {
                            alert("入库成功！");
                            $("#ruku").modal("hide");
                            that.getData();
                            jig_outgoing.getData();
                        } else {
                            alert("服务器错误！")
                        }

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
        id: "",
        now_page_number: 1,
        max_page_number: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax("naive_get_outgoing_submit", {
                data: {
                    page_number: this.now_page_number
                },
                success: function (res) {
                    that.outgoing_submit_list = res.data;
                    that.max_page_number = res.max;
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
                $.ajax("naive_outgo_jig", {
                    data: {
                        id: this.id,
                        code: splits[0],
                        seq_id: splits[1],
                        rec_id: $("#id").val()
                    },
                    success: function (res) {
                        if (res) {
                            alert("出库成功！");
                            $("#chuku").modal("hide");
                            that.getData();
                            return_jig.getData();
                        } else {
                            alert("服务器错误！");
                        }
                    }
                });
            }
        },
        getUsername: function () {
            const that = this;
            $.ajax("get_user_name", {
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
            $.ajax("get_position", {
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
const myRepair = new Vue({
    el: "#myRepair",
    data: {
        repairList: [],
        repair: null,
        now_page_number: 1,
        max_page_number: 0,
        //报修部分
        code_list: code_list,
        submit_code: "",
        submit_seq_id: "",
        seq_list: [],
        submit_repair_reason: "",
        submit_repair_photo: "点击上传图片",
        isQRCode: false,
        QR_url: "",
        interval: "",
        phone_status: -1,
        phone_token: "",
        type: "repair"
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("naive_get_repair_list", {
                data: {
                    submit_id: id,
                    page_number: that.now_page_number
                },
                success: function (res) {
                    that.repairList = res["data"];
                    that.max_page_number = res["max"];
                }
            });
        },
        showDetail: function (index) {
            this.repair = this.repairList[index];
        },
        getSeqId: function () {
            let that = this;
            $.ajax("code_get_seq_id", {
                data: {
                    code: this.submit_code
                }, success: function (res) {
                    that.seq_list = res;
                }
            })
        },
        file: function () {
            this.submit_repair_photo = $("#repair_photo")[0].files[0].name;
        },
        showQRCode: function () {
            let that = this;
            clearInterval(this.interval);
            this.QR_url = "/get_phone_qr_code?type=" + this.type + "&submit_id=" + id + "&id=" + Math.random();
            let count = 0;
            that.phone_status = 0;
            setTimeout(() => {
                $.ajax("get_phone_upload_token", {
                    data: {
                        token: that.type + "-" + id
                    },
                    async: false,
                    success: function (res) {
                        that.phone_token = res;
                    }
                });
                that.interval = setInterval(() => {
                    $.ajax("get_phone_upload_map", {
                        async: false,
                        data: {
                            token: that.phone_token
                        },
                        success: function (res) {
                            if (res.scan && that.phone_status !== 1) {
                                that.phone_status = 1;
                            }
                            if (res.hadFile && that.phone_status !== 2) {
                                that.phone_status = 2;
                                that.submit_repair_photo = res.uploadFileName;
                                clearInterval(that.interval);
                            }
                        }
                    });
                    count++;
                    if (count === 242) {//2分钟
                        that.phone_status = 3;
                        clearInterval(that.interval);
                    }
                }, 500);
            }, 1000)
        },
        cancelQR: function () {
            this.phone_status = -1;
        },
        submit_repair() {
            const a = $("#submitRepair [style*='border-color: rgb(201, 48, 44);']");
            if (a.length > 0) {
                alert("表单填写不完全");
                $("#submitRepair [style*='border-color: rgb(201, 48, 44);']:eq(0)").focus();
                a.shake(2, 10, 200);
                return false;
            } else {
                if (this.phone_status === -1) {
                    const formData = new FormData();
                    formData.append("file", $("#repair_photo")[0].files[0]);
                    formData.append("submit_id", id);
                    formData.append("code", this.submit_code);
                    formData.append("seq_id", this.submit_seq_id);
                    formData.append("repair_reason", this.submit_repair_reason);
                    let that = this;
                    $.ajax("naive_submit_repair", {
                        type: "post",
                        processData: false,
                        contentType: false,
                        data: formData,
                        success: function (res) {
                            if (res) {
                                alert("提交成功！");
                                that.submit_code = "";
                                that.submit_seq_id = "";
                                that.submit_repair_reason = "";
                                $("#repair_photo").files = null;
                                that.submit_repair_photo = "点击上传图片";
                                that.now_page_number = 1;
                                that.getData();
                                $("#submitRepair").modal("hide");
                            } else {
                                alert("服务器错误！");
                            }
                        }
                    })
                } else {
                    let that = this;
                    $.ajax("naive_phone_submit_repair", {
                        data: {
                            submit_id: id,
                            code: that.submit_code,
                            seq_id: that.submit_seq_id,
                            repair_reason: that.submit_repair_reason,
                            token: that.phone_token
                        },
                        success: function (res) {
                            if (res) {
                                alert("提交成功！");
                                that.submit_code = "";
                                that.submit_seq_id = "";
                                that.submit_repair_reason = "";
                                $("#repair_photo").files = null;
                                that.submit_repair_photo = "点击上传图片";
                                that.now_page_number = 1;
                                that.phone_status = -1;
                                that.getData();
                                $("#submitRepair").modal("hide");
                            } else {
                                alert("服务器错误！");
                            }
                        }
                    })
                }
            }
        },
    },
    computed: {},
    watch: {},
});
const repairHistory = new Vue({
    el: "#repairHistory",
    data: {
        history_list: [],
        now_page_number: 1,
        max_page_number: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("naive_get_repair_history", {
                data: {
                    submit_id: id,
                    page_number: this.now_page_number
                },
                success:function (res) {
                    that.history_list = res["data"];
                    that.max_page_number = res["max"];
                }
            })
        }
    },
    computed: {},
    watch: {},
});
