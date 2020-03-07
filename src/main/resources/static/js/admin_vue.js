Vue.component('v-chart', VueECharts);
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
const information_manage = new Vue({
    el: "#information_manage",
    data: {
        user_list: [],
        now_page_number: 1,
        max_page_number: 0
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
                    console.log(data);
                    console.log(textStatus);
                    console.log(jqXHR);
                    that.user_list = data["data"];
                    that.max_page_number = data["max"];
                }
            });
        },
        info_profile: function (index) {
            info_profile.user = this.user_list[index];
        }
    },
    computed: {},
    watch: {},
});
const info_profile = new Vue({
    el: "#info_profile",
    data: {
        user: null
    },
    created: function () {
    },
    methods: {},
    computed: {},
    watch: {},
});