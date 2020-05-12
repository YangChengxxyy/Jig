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
                page_size: this.now_page_size,
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
                page_size: this.now_page_size,
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
            return "naive/download_one_search?code=" + this.code + "&name=" + this.name + "&workcell=" + this.workcell + "&family=" + this.family + "&user_for=" + this.user_for + "&page_number=" + this.now_page_number + "&file_name=page-" + this.now_page_number + ".xls&page_size=" + this.now_page_size;
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
const jig_use_analysis = new Vue({
    el: "#jig_use_analysis",
    data: {
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        mnsycs: {
            columns: ['时间', 'EF0789', 'EF0273', 'EF0972'],
            rows: [
                {'时间': '2012', 'EF0789': 180, 'EF0273': 180, 'EF0972': 380},
                {'时间': '2013', 'EF0789': 270, 'EF0273': 210, 'EF0972': 310},
                {'时间': '2014', 'EF0789': 210, 'EF0273': 45, 'EF0972': 150},
                {'时间': '2015', 'EF0789': 180, 'EF0273': 570, 'EF0972': 230},
                {'时间': '2016', 'EF0789': 100, 'EF0273': 170, 'EF0972': 230},
                {'时间': '2017', 'EF0789': 123, 'EF0273': 190, 'EF0972': 310},
                {'时间': '2018', 'EF0789': 256, 'EF0273': 110, 'EF0972': 380},
                {'时间': '2019', 'EF0789': 89, 'EF0273': 423, 'EF0972': 240}
            ]
        },
        mnsycsExtend: {
            series: {
                barWidth: '23%',
                label: {show: true, position: "top"},
            },
            yAxis: {
                axisLabel: {
                    formatter: '{value}次'
                }
            }
        },
        mnsycsDataZoom: {
            type: 'slider',
            start: 0,
            end: 100
        },
        zb: {
            columns: ['产线', '使用次数'],
            rows: [
                {'产线': '一号产线', '使用次数': '2012'},
                {'产线': '二号产线', '使用次数': '2912'},
                {'产线': '三号产线', '使用次数': '1012'},
                {'产线': '四号产线', '使用次数': '412'},
                {'产线': '其他', '使用次数': '12'}
            ]
        },
        gtcx: {
            columns: ['时间', '一号产线', '二号产线', '三号产线'],
            rows: [
                {'时间': '2004', '一号产线': 256, '二号产线': 45, '三号产线': 380},
                {'时间': '2005', '一号产线': 270, '二号产线': 210, '三号产线': 310},
                {'时间': '2006', '一号产线': 210, '二号产线': 180, '三号产线': 500},
                {'时间': '2007', '一号产线': 180, '二号产线': 57, '三号产线': 230},
                {'时间': '2008', '一号产线': 100, '二号产线': 230, '三号产线': 170},
                {'时间': '2009', '一号产线': 123, '二号产线': 190, '三号产线': 310},
                {'时间': '2010', '一号产线': 180, '二号产线': 110, '三号产线': 380},
                {'时间': '2011', '一号产线': 89, '二号产线': 423, '三号产线': 240},
                {'时间': '2012', '一号产线': 180, '二号产线': 180, '三号产线': 380},
                {'时间': '2013', '一号产线': 270, '二号产线': 210, '三号产线': 310},
                {'时间': '2014', '一号产线': 210, '二号产线': 45, '三号产线': 150},
                {'时间': '2015', '一号产线': 180, '二号产线': 570, '三号产线': 230},
                {'时间': '2016', '一号产线': 100, '二号产线': 170, '三号产线': 230},
                {'时间': '2017', '一号产线': 123, '二号产线': 190, '三号产线': 310},
                {'时间': '2018', '一号产线': 256, '二号产线': 110, '三号产线': 380},
                {'时间': '2019', '一号产线': 89, '二号产线': 423, '三号产线': 240}
            ]
        },
        jjgtcxExtend: {
            yAxis: {
                axisLabel: {
                    formatter: '{value}次'
                }
            }
        },
        cljj:{
            data:{
                columns:['time','次数'],
                rows:[
                    {'time':'2012','次数':25},
                    {'time':'2013','次数':30},
                    {'time':'2014','次数':45},
                    {'time':'2015','次数':25},
                    {'time':'2016','次数':37},
                    {'time':'2017','次数':5},
                    {'time':'2018','次数':20},
                    {'time':'2019','次数':12}
                ]
            }
        },
        ggcx:{
            data:{
                columns:['产线','次数'],
                rows:[
                    {'产线':'一号产线','次数':12},
                    {'产线':'二号产线','次数':4},
                    {'产线':'三号产线','次数':7},
                    {'产线':'四号产线','次数':2},
                ]
            }
        }
    },
    created: function () {
    },
    mounted: function () {
        // setInterval(()=>{
        //     $.each(this.$children,(i,v)=>{
        //         v.echarts.resize();
        //     })
        // },100)
    },
    methods: {
        getData: function () {
        }
    },
    computed: {},
    watch: {},
});

function resize() {
    setTimeout(() => {
        $.each(jig_use_analysis.$children, (i, v) => {
            v.echarts.resize();
        })
        $.each(jig_life_analysis.$children, (i, v) => {
            v.echarts.resize();
        })
        $.each(provider_analysis.$children, (i, v) => {
            v.echarts.resize();
        })
    }, 400)
}

const jig_life_analysis = new Vue({
    el: "#jig_life_analysis",
    data: {
        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },
        allLeft: {
            columns: ['range', '工夹具数量'],
            rows: [
                {'range': '<1000', '工夹具数量': '9'},
                {'range': '1000~3000', '工夹具数量': '15'},
                {'range': '3000~5000', '工夹具数量': '23'},
                {'range': '5000~7000', '工夹具数量': '43'},
                {'range': '>7000', '工夹具数量': '7'},
            ]
        },
        allLeftExtend: {
            series: {
                label: {show: true, position: "top"},
                barWidth: '30%'
            },
            yAxis: {
                axisLabel: {
                    formatter: '{value}件'
                }
            }
        },
        everyLeft: {
            columns: ['range', '一号产线', '二号产线', '三号产线', '四号产线'],
            rows: [
                {'range': '<1000', '一号产线': '9', '二号产线': '3', '三号产线': '2', '四号产线': '6'},
                {'range': '1000~3000', '一号产线': '14', '二号产线': '17', '三号产线': '19', '四号产线': '21'},
                {'range': '3000~5000', '一号产线': '30', '二号产线': '23', '三号产线': '25', '四号产线': '33'},
                {'range': '5000~7000', '一号产线': '37', '二号产线': '31', '三号产线': '32', '四号产线': '44'},
                {'range': '>7000', '一号产线': '1', '二号产线': '3', '三号产线': '5', '四号产线': '9'},
            ]
        },
        dataZoom: {
            type: 'slider',
            start: 0,
            end: 100
        },
        repairZb: {
            columns: ['分类', '数量'],
            rows: [
                {'分类': '外观磨损', '数量': 22},
                {'分类': '夹具磨损', '数量': 21},
                {'分类': '零件掉落', '数量': 33},
                {'分类': '失去精准度', '数量': 26},
            ]
        },
        repairCSTJ: {
            columns: ['分类', 'A公司', 'B公司'],
            rows: [
                {'分类': '外观磨损', 'A公司': '15', 'B公司': '30'},
                {'分类': '夹具磨损', 'A公司': '20', 'B公司': '22'},
                {'分类': '零件掉落', 'A公司': '45', 'B公司': '24'},
                {'分类': '失去精准度', 'A公司': '37', 'B公司': '14'},
            ]
        }
    },
    created: function () {
    },
    methods: {},
    computed: {},
    watch: {},
});
const provider_analysis = new Vue({
    el: "#provider_analysis",
    data: {
        lrm: {
            data: {
                columns: ['公司', '夹具平均LRM', '最差LRM', '最优LRM'],
                rows: [
                    {'公司': 'A公司', '夹具平均LRM': 70, '最差LRM': 50, '最优LRM': 100},
                    {'公司': 'B公司', '夹具平均LRM': 50, '最差LRM': 20, '最优LRM': 80},
                    {'公司': 'C公司', '夹具平均LRM': 85, '最差LRM': 75, '最优LRM': 185},
                    {'公司': 'D公司', '夹具平均LRM': 130, '最差LRM': 60, '最优LRM': 150}
                ]
            },
            colors: ['#5AB1EF', '#fa6e86', '#5edb9d'],
            extend: {
                series: {
                    label: {show: true, position: "top"},
                },
                title:{
                    subtext:'LRM=(夹具寿命/(夹具维修次数*夹具的价格))'
                }
            }
        },
        csbl: {
            data: {
                columns: ['公司', '数量'],
                rows: [
                    {'公司': 'A公司', '数量': '42'},
                    {'公司': 'B公司', '数量': '25'},
                    {'公司': 'C公司', '数量': '16'},
                    {'公司': 'D公司', '数量': '15'},
                ]
            }
        },
        wdfx: {
            data: {
                columns: ['公司', '可靠性', '依赖程度', '夹具质量', '夹具性价比'],
                rows: [
                    {'公司': 'A公司', '可靠性': '50', '依赖程度': '97', '夹具质量': '54', '夹具性价比': '90'},
                ]
            },
            extend: {
                radar: {
                    indicator: [
                        {
                            text: '可靠性',
                            max: 100,
                        },
                        {
                            text: '依赖程度',
                            max: 100,
                        },
                        {
                            text: '夹具质量',
                            max: 100,
                        },
                        {
                            text: '夹具性价比',
                            max: 100,
                        }
                    ]
                }
            }
        },
        wnghl: {
            data: {
                columns: ['time', '供货量'],
                rows: [
                    {'time': '2012', '供货量': 80},
                    {'time': '2013', '供货量': 86},
                    {'time': '2014', '供货量': 93},
                    {'time': '2015', '供货量': 110},
                    {'time': '2016', '供货量': 130},
                    {'time': '2017', '供货量': 102},
                    {'time': '2018', '供货量': 76},
                    {'time': '2019', '供货量': 67},
                ]
            },
            extend: {
                series: {
                    label: {show: true, position: "top"},
                }
            }
        }
    },
    created: function () {
    },
    methods: {},
    computed: {},
    watch: {},
});