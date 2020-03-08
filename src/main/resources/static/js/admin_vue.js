Vue.component('v-chart', VueECharts);
let production_line_list = [];
let code_list = [];
let workcell_list = [];
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
        now_page_number: 1,
        max_page_number: 0,
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            let that = this;
            $.ajax("admin/get_user_information", {
                data: {
                    id: id,
                    page_number: that.now_page_number
                },
                success(data, textStatus, jqXHR) {
                    that.user_list = data["data"];
                    that.max_page_number = data["max"];
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
        }
    },
    computed: {},
    watch: {},
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
        workcell_list: workcell_list
    },
    methods: {
        submit_change_user: function () {
            $.ajax("admin/change_user", {
                data: this.user,
                success(data, textStatus, jqXHR) {
                    if(data){
                        alert("修改成功！");
                        $("#change_user").modal("hide");
                    }else{
                        alert("服务器错误，尝试刷新页面重试");
                    }
                    information_manage.getData();
                }
            })
        }
    }
});