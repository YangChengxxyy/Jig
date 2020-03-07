Vue.component('v-chart', VueECharts);
Vue.component("bootstrap-table", BootstrapTable);
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
        max_page_number: 0,
        columns: [ {
            title: 'id',
            field: 'id'
        }, {
            title: '名字',
            field: 'name'
        }, {
            title: '工作部门',
            field: 'workcell_id'
        }, {
            title: '职位',
            field: 'position'
        }
        ],
        options: {
            showColumns: true,
            classes: "table  table-striped",
            url: "admin/get_user_information",
            pagination: true,
            sidePagination : 'server',
            pageSize: 5,
            //初始化加载第1页，默认第1页
            pageNumber: 1,
            //可供选择的每页的行数
            pageList: "[10, 20, 50, 80, 100]",
            paginationFirstText: "首页",
            paginationPreText: "上一页",
            paginationNextText: "下一页",
            paginationLastText: "末页",
            iconSize: 'pager',

            showRefresh : true,

            exportDataType:'all',//'basic':当前页的数据, 'all':全部的数据, 'selected':选中的数据
            showExport: true,  //是否显示导出按钮
            buttonsAlign:"right",  //按钮位置
            exportTypes:['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
            data:this.user_list,

            striped:true,
            queryParams:function(params) {
                return {
                    offset : params.offset, // SQL语句起始索引
                    limit : params.limit, // 每页显示数量
                    id:id
                }
            },
        }
    },
    created: function () {
        // this.getData();
    },
    methods: {
        // getData: function () {
        //     let that = this;
        //     $.ajax("admin/get_user_information", {
        //         data: {
        //             id: id,
        //             page_number: that.now_page_number
        //         },
        //         success(data, textStatus, jqXHR) {
        //             that.user_list = data["data"];
        //             that.max_page_number = data["max"];
        //         }
        //     });
        // },
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