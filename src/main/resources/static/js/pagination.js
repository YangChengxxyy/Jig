/**
 * 组件使用
 * 需要2个props通过动态绑定
 * now_page_number max_page_number
 * 当前页 最大页数
 * 重点：父组件必须要有getData()这个方法
 */
/*  getData模板
    getData: function () {
            const that = this;
            $.ajax("url",{
                data: {
                    now_page_number:this.now_page_number
                    ,以及自己data
                },
                success: function (res) {
                    if (res.data.length === 0) {
                        alert("没有结果！")
                    } else {
                        that.需要赋值的变量 = res['data'];
                        that.max_page_number = res['max'];
                    }
                }
            })
        }
 */
Vue.component('my-pagination', {
    props: ['now_page_number', 'max_page_number'],
    template: "<div class=\"text-center row\" v-if=\"max_page_number != 0\">\n" +
        "                                <div v-if=\"max_page_number >5\">\n" +
        "                                <ul v-if=\"now_page_number <= 3 && now_page_number < max_page_number-1\"\n" +
        "                                    class=\"pagination\">\n" +
        "                                    <li :class=\"havePrevious\"\n" +
        "                                        @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                                        <a>&laquo;</a></li>\n" +
        "                                    <li :class=\"{'active': now_page_number == 1}\"\n" +
        "                                        @click=\"turn_page(1)\"><a>1</a></li>\n" +
        "                                    <li :class=\"{'active': now_page_number == 2}\"\n" +
        "                                        @click=\"turn_page(2)\"><a>2</a></li>\n" +
        "                                    <li :class=\"{'active': now_page_number == 3}\"\n" +
        "                                        @click=\"turn_page(3)\"><a>3</a></li>\n" +
        "                                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                                    <li @click=\"turn_page(max_page_number-1)\"><a>{{max_page_number-1}}</a>\n" +
        "                                    </li>\n" +
        "                                    <li @click=\"turn_page(max_page_number)\"><a>{{max_page_number}}</a>\n" +
        "                                    </li>\n" +
        "                                    <li :class=\"haveNext\"\n" +
        "                                        @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\">\n" +
        "                                        <a>&raquo;</a>\n" +
        "                                    </li>\n" +
        "                                </ul>\n" +
        "                                <ul v-else-if=\"now_page_number > 3 && now_page_number+1 <= max_page_number-2\"\n" +
        "                                    class=\"pagination\">\n" +
        "                                    <li :class=\"havePrevious\"\n" +
        "                                        @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                                        <a>&laquo;</a></li>\n" +
        "                                    <li @click=\"turn_page(1)\"><a>1</a></li>\n" +
        "                                    <li @click=\"turn_page(2)\"><a>2</a></li>\n" +
        "                                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                                    <li @click=\"turn_page(now_page_number-1)\"><a>{{now_page_number-1}}</a></li>\n" +
        "                                    <li class=\"active\" @click=\"turn_page(now_page_number)\"><a>{{now_page_number}}</a>\n" +
        "                                    </li>\n" +
        "                                    <li @click=\"turn_page(now_page_number+1)\"><a>{{now_page_number+1}}</a></li>\n" +
        "                                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                                    <li @click=\"turn_page(max_page_number-1)\"><a>{{max_page_number-1}}</a></li>\n" +
        "                                    <li @click=\"turn_page(max_page_number)\"><a>{{max_page_number}}</a></li>\n" +
        "                                    <li :class=\"haveNext\"\n" +
        "                                        @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\"><a>&raquo;</a>\n" +
        "                                    </li>\n" +
        "                                </ul>\n" +
        "                                <ul v-else-if=\"now_page_number>=4 && now_page_number >= max_page_number-2\"\n" +
        "                                    class=\"pagination\">\n" +
        "                                    <li :class=\"havePrevious\"\n" +
        "                                        @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                                        <a>&laquo;</a></li>\n" +
        "                                    <li @click=\"turn_page(1)\"><a>1</a></li>\n" +
        "                                    <li @click=\"turn_page(2)\"><a>2</a></li>\n" +
        "                                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                                    <li :class=\"{'active' : now_page_number == max_page_number-2 }\"\n" +
        "                                        @click=\"turn_page(max_page_number-2)\"><a>{{max_page_number-2}}</a></li>\n" +
        "                                    <li :class=\"{'active' : now_page_number == max_page_number-1 }\"\n" +
        "                                        @click=\"turn_page(max_page_number-1)\"><a>{{max_page_number-1}}</a></li>\n" +
        "                                    <li :class=\"{'active' : now_page_number == max_page_number }\"\n" +
        "                                        @click=\"turn_page(max_page_number)\"><a>{{max_page_number}}</a></li>\n" +
        "                                    <li :class=\"haveNext\"\n" +
        "                                        @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\"><a>&raquo;</a>\n" +
        "                                    </li>\n" +
        "                                </ul>\n" +
        "                                </div>\n" +
        "                                <div v-else>\n" +
        "                                    <ul class=\"pagination\">\n" +
        "                                        <li :class=\"havePrevious\"\n" +
        "                                            @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                                            <a>&laquo;</a></li>\n" +
        "                                        <li v-for=\"n in max_page_number\" :class=\"{'active': n == now_page_number }\" @click=\"turn_page(n)\"><a>{{n}}</a></li>\n" +
        "                                        <li :class=\"haveNext\"\n" +
        "                                            @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\">\n" +
        "                                            <a>&raquo;</a>\n" +
        "                                        </li>\n" +
        "                                    </ul>\n" +
        "                                </div>\n" +
        "                            </div>",
    methods: {
        turn_page: function (page_number) {
            const that = this;
            if (page_number === this.now_page_number) {
                return false;
            }
            this.$parent.now_page_number = page_number;
            this.$parent.getData();
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
        }
    }
});
