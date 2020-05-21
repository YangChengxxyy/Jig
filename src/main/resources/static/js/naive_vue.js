Vue.component('my-pagination', page);
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

        max_page_number: 0,
        now_page_number: 1,
        now_page_size: 5,
        page_size_list: ['5', '10', '15', '20'],
        all_count: 0
    },
    methods: {
        getData: function () {
            const that = this;
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
                        that.jig_list = res.data;
                        that.max_page_number = res.max;
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
            return "naive/download_one_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&page_number=" + this.now_page_number + "&file_name=page-" + this.now_page_number + ".xls&page_size=" + this.now_page_size;
        },
        allPageUrl: function () {
            return "naive/download_all_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&file_name=page-all.xls";
        }
    }
});

/*const return_jig = new Vue({
    el:"#return_jig",
    data:{
        outgoing_jig_list:[],
        check_user_id:"",

    },
    created:function () {

    },
    methods:{
        getData:function () {
            const that = this;
            $.ajax("navie/get_outgoing",{})
        }
    }
})*/

/*const return_jig = new Vue({
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

        max_page_number: 0,
        now_page_number: 1,
        now_page_size: 5,
        page_size_list: ['5', '10', '15', '20'],
        all_count: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax("naive/get_outgoing_jig", {
                data: {
                    page_number: this.now_page_number
                },
                success: function (res) {
                    $.each(res.data, function (i, v) {
                        v.position = position(v);
                    });
                    that.outgoing_jig_list = res.data;
                    that.max_page_number = res.max;
                    that.all_count = res['all'];
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
});*/

const jig_outgoing = new Vue({
    el:"#jig_outgoing",
    data:{
        location_list:[],
        jig_list:[],

        jig_cabinet_id:"",//对应数据库的jig_cabinet_id
        jig_location_id:"",//对应数据库的location_id

        //搜索条件
        sel_code:"",
        sel_name:"",
        sel_user_for:""
    },
    created:function(){
        this.get_location_list();
    },
    methods:{
        get_location_list:function () {
            const that = this;
            $.ajax("navie/get_location_list",{
                data:{
                    
                },
                success:function (res) {
                    that.location_list = res;
                }
            })
        },
        get_jig_list_by_location_id:function (jig_cabinet,location_id) {
            if(this.jig_cabinet_id === jig_cabinet && this.jig_location_id === location_id){
                this.jig_cabinet_id = "";
                this.jig_location_id = "";
                this.jig_list = [];
                return false;
            }else{
                this.jig_cabinet_id = jig_cabinet;
                this.jig_location_id = location_id;
            }

            const that = this;
            $.ajax("navie/get_jig_list_by_location",{
                data:{
                    jig_cabinet_id:this.jig_cabinet_id,
                    jig_location_id:this.jig_location_id
                },
                success:function(res) {
                    that.jig_list = res;
                    //console.log(res)
                }
            })
        },
        get_jig_detail_list:function (code) {
            for (var i=0; i<this.jig_list.length; i++) {
                if(this.jig_list[i].code === code){
                    jig_detail.jig_detail_list = this.jig_list[i].jig_entity_list;
                    break;
                }
            }
            jig_detail.seq_id = jig_detail.jig_detail_list[0].seq_id;

        },
        get_chuku_modal_jig_detail_list:function(code){
            for (var i=0; i<this.jig_list.length; i++) {
                if(this.jig_list[i].code === code){
                    chuku.jig_detail_list = this.jig_list[i].jig_entity_list;
                    chuku.code = code;
                    break;
                }
            }
            chuku.seq_id = chuku.jig_detail_list[0].seq_id;
        },
        get_maintenance_jig_detail_list:function(code){
            const that = this;
            $.ajax("navie/get_maintenance_jig_detail_list",{
                data:{
                    jig_cabinet_id:this.jig_cabinet_id,
                    jig_location_id:this.jig_location_id,
                    code:code
                },
                success:function (res) {
                    check_jig.jig_detail_list = res;
                    check_jig.code = code;
                    check_jig.seq_id = check_jig.jig_detail_list[0].seq_id;
                }
            })
        },
        get_jig_list_by_select:function () {
            const that = this;
            $.ajax("navie/get_jig_list_by_select",{
                data:{
                    jig_cabinet_id:this.jig_cabinet_id,
                    jig_location_id:this.jig_location_id,
                    code:this.sel_code,
                    name:this.sel_name,
                    user_for:this.sel_user_for
                },
                success:function (res) {
                    if(res.length === 0){
                        alert("没有结果!");
                    }
                    that.jig_list = res;
                }
            })
        },
        clear_select_condition:function () {
            this.sel_code = "";
            this.sel_name = "";
            this.sel_user_for = "";
        }
    }
})

//仓库管理/查看工夹具
var jig_detail = new Vue({
    el:"#jig_detail",
    data:{
        seq_id:"",
        jig_detail_list:[],
        jig_detail:null
    },
    watch:{
        seq_id(val){
            for(var i=0;i<this.jig_detail_list.length;i++){
                if(this.seq_id == this.jig_detail_list[i].seq_id){
                    this.jig_detail = this.jig_detail_list[i];
                }
            }
        }
    }
})

const chuku = new Vue({
    el:"#chuku",
    data:{
        code:"",
        seq_id:"",
        jig_detail_list:[],
        jig_detail:null,

        check_user_id:"",//输入的员工id
        user_name:"",

        check1:false,
    },
    methods:{
        getUsername: function () {
            const that = this;
            $.ajax("get_user_name", {
                data: {
                    user_id: this.check_user_id
                },
                success: function (res) {
                    if (res === null || res === '' || res.length === 0){
                        that.user_name = "员工不存在!";
                    }else{
                        that.user_name = res;
                        that.check1 = true;
                    }
                }
            })
        },
        outgoing: function () {
            if (this.check1) {
                var that = this;
                $.ajax("naive/outgo_jig", {
                    data: {
                        code: this.code,
                        seq_id: this.seq_id,
                        submit_id: this.check_user_id
                    },
                    success: function (res) {
                        if (res) {
                            alert("出库成功！");
                            $("#chuku").modal("hide");
                            this.user_id = "";
                            jig_outgoing.get_jig_list_by_location_id(jig_outgoing.jig_cabinet_id,jig_outgoing.jig_location_id);
                        } else {
                            alert("服务器错误！");
                        }
                    }
                });
            }
        }
    },
    watch:{
        seq_id(val){
            for(var i=0;i<this.jig_detail_list.length;i++){
                if(this.seq_id == this.jig_detail_list[i].seq_id){
                    this.jig_detail = this.jig_detail_list[i];
                }
            }
        }
    }
})

const check_jig = new Vue({
    el:"#check_jig",
    data:{
        code:"",
        seq_id:"",
        jig_detail_list:[],
        jig_detail:null,

        user_id:"",
        user_name:"",
        check_user_id:false,


        maintenance_type_list:[],
        check_maintenance_list:[],
        check_finish:false
    },
    created:function(){
        this.get_maintenance_type_list();
    },
    methods:{
        get_maintenance_type_list:function () {
            const that = this;
            $.ajax("get_maintenance_type_list",{
                data:{

                },
                success:function (res) {
                    that.maintenance_type_list = res;
                }
            })
        },
        getUsername: function () {
            const that = this;
            $.ajax("get_user_name", {
                data: {
                    user_id: this.user_id
                },
                success: function (res) {
                    if (res === null || res === '' || res.length === 0){
                        that.user_name = "员工不存在!";
                    }else{
                        that.user_name = res;
                        that.check_user_id = true;
                    }
                }
            })
        },
        maintenance_jig:function () {
            const that = this;
            if(this.check_finish){
                /*$.ajax("navie/maintenance_jig",{
                    data:{
                        code:this.code,
                        seq_id:this.seq_id,
                    },
                    success:function (res) {
                        $("#check_jig").modal("hide");
                    }
                })*/
            }

        }
    },
    watch:{
        seq_id(val){
            for(var i=0;i<this.jig_detail_list.length;i++){
                if(this.seq_id == this.jig_detail_list[i].seq_id){
                    this.jig_detail = this.jig_detail_list[i];
                }
            }
        }
    }
})
/*const jig_outgoing = new Vue({
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

        max_page_number: 0,
        now_page_number: 1,
        now_page_size: 5,
        page_size_list: ['5', '10', '15', '20'],
        all_count: 0
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            const that = this;
            $.ajax("naive/get_outgoing_submit", {
                data: {
                    page_number: this.now_page_number
                },
                success: function (res) {
                    that.outgoing_submit_list = res.data;
                    that.max_page_number = res['max'];
                    that.all_count = res['all'];
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
                $.ajax("naive/outgo_jig", {
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
});*/
const myRepair = new Vue({
    el: "#myRepair",
    data: {
        repairList: [],
        repair: null,

        max_page_number: 0,
        now_page_number: 1,
        now_page_size: 5,
        page_size_list: ['5', '10', '15', '20'],
        all_count: 0,

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
            $.ajax("naive/get_repair_list", {
                data: {
                    submit_id: id,
                    page_number: that.now_page_number
                },
                success: function (res) {
                    that.repairList = res["data"];
                    that.max_page_number = res["max"];
                    that.all_count = res['all'];
                }
            });
        },
        showDetail: function (index) {
            this.repair = this.repairList[index];
        },
        getSeqId: function () {
            let that = this;
            $.ajax("code_get_in_seq_id", {
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
                    $.ajax("naive/submit_repair", {
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
                    $.ajax("naive/phone_submit_repair", {
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
        max_page_number: 0,
        now_page_number: 1,
        now_page_size: 5,
        page_size_list: ['5', '10', '15', '20'],
        all_count: 0,
        repair: null
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("naive/get_repair_history", {
                data: {
                    submit_id: id,
                    page_number: this.now_page_number
                },
                success: function (res) {
                    that.history_list = res["data"];
                    that.max_page_number = res["max"];
                    that.all_count = res['all'];
                }
            })
        },
        checkDetail(index) {
            this.repair = this.history_list[index];
        }
    },
    computed: {},
    watch: {},
});
