/**
 * 说明：
 * 使用方法 传入参数 'now_page_number', 'now_page_size', 'max_page_number', 'page_size_list', 'all_count'
 * 重点有$parent要有getData()方法
 * 例如：
 *       let that = this;
 $.ajax( url, {
                data: {
                        page_number: that.now_page_number,
                        page_size: that.now_page_size，
                        以及自己的参数
                    },
                success(data, textStatus, jqXHR) {
                    that.max_page_number = data['max'];
                    that.data = data['data'];
                    that.all_count = data['all'];
                }
            });
 * @type {{template: string, data(): {change_page_number: number}, computed: {havePrevious: (function(): {disabled: boolean}), haveNext: (function(): {disabled: boolean})}, methods: {turn_page: page.methods.turn_page, change_page_size: page.methods.change_page_size}, props: [string, string, string, string, string]}}
 */
let page = {
    props: ['now_page_number', 'now_page_size', 'max_page_number', 'page_size_list', 'all_count'],
    data() {
        return {
            change_page_number: 1
        }
    },
    template:
        "<div id=\"test\" v-if=\"max_page_number != 0\">\n" +
        "    <div class=\"col-lg-4 col-sm-3 text-left\">\n" +
        "\n" +
        "        <div style=\"height: 34px;margin: 20px 0;display: inline-block;position: relative;top: -30px\">\n" +
        "            共{{all_count}}条记录，每页\n" +
        "        </div>\n" +
        "        <div class=\"dropdown pagination\" v-show=\"all_count != 0\">\n" +
        "            <li data-toggle=\"dropdown\" href=\"#\"><a>{{now_page_size}}<span class=\"caret\"></span></a></li>\n" +
        "            <ul class=\"dropdown-menu\" aria-labelledby=\"dLabel\" style=\"width: 43.8px;min-width: auto\">\n" +
        "                <li><a style=\"padding: 1px 11px;color: #337ab7\" v-for=\"item in page_size_list\"\n" +
        "                       @click=\"change_page_size(item)\">{{item}}</a></li>\n" +
        "                <!--                <li><a style=\"padding: 1px 11px;color: #337ab7\">15</a></li>-->\n" +
        "                <!--                <li><a style=\"padding: 1px 11px;color: #337ab7\">20</a></li>-->\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div style=\"height: 34px;margin: 20px 0;display: inline-block;position: relative;top: -30px\">条</div>\n" +
        "\n" +
        "    </div>\n" +
        "    <div class=\"col-lg-4 col-sm-6 text-center\">\n" +
        "        <div class=\"row\">\n" +
        "            <div v-if=\"max_page_number >5\">\n" +
        "                <ul v-if=\"now_page_number <= 3 && now_page_number < max_page_number-1\"\n" +
        "                    class=\"pagination\">\n" +
        "                    <li :class=\"havePrevious\"\n" +
        "                        @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                        <a>&laquo;</a></li>\n" +
        "                    <li :class=\"{'active': now_page_number == 1}\"\n" +
        "                        @click=\"turn_page(1)\"><a>1</a></li>\n" +
        "                    <li :class=\"{'active': now_page_number == 2}\"\n" +
        "                        @click=\"turn_page(2)\"><a>2</a></li>\n" +
        "                    <li :class=\"{'active': now_page_number == 3}\"\n" +
        "                        @click=\"turn_page(3)\"><a>3</a></li>\n" +
        "                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                    <li @click=\"turn_page(max_page_number-1)\"><a>{{max_page_number-1}}</a>\n" +
        "                    </li>\n" +
        "                    <li @click=\"turn_page(max_page_number)\"><a>{{max_page_number}}</a>\n" +
        "                    </li>\n" +
        "                    <li :class=\"haveNext\"\n" +
        "                        @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\">\n" +
        "                        <a>&raquo;</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "                <ul v-else-if=\"now_page_number > 3 && now_page_number+1 <= max_page_number-2\"\n" +
        "                    class=\"pagination\">\n" +
        "                    <li :class=\"havePrevious\"\n" +
        "                        @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                        <a>&laquo;</a></li>\n" +
        "                    <li @click=\"turn_page(1)\"><a>1</a></li>\n" +
        // "                    <li @click=\"turn_page(2)\"><a>2</a></li>\n" +
        "                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                    <li @click=\"turn_page(now_page_number-1)\"><a>{{now_page_number-1}}</a></li>\n" +
        "                    <li class=\"active\" @click=\"turn_page(now_page_number)\"><a>{{now_page_number}}</a>\n" +
        "                    </li>\n" +
        "                    <li @click=\"turn_page(now_page_number+1)\"><a>{{now_page_number+1}}</a></li>\n" +
        "                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                    <li @click=\"turn_page(max_page_number-1)\"><a>{{max_page_number-1}}</a></li>\n" +
        "                    <li @click=\"turn_page(max_page_number)\"><a>{{max_page_number}}</a></li>\n" +
        "                    <li :class=\"haveNext\"\n" +
        "                        @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\"><a>&raquo;</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "                <ul v-else-if=\"now_page_number>=4 && now_page_number >= max_page_number-2\"\n" +
        "                    class=\"pagination\">\n" +
        "                    <li :class=\"havePrevious\"\n" +
        "                        @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                        <a>&laquo;</a></li>\n" +
        "                    <li @click=\"turn_page(1)\"><a>1</a></li>\n" +
        "                    <li @click=\"turn_page(2)\"><a>2</a></li>\n" +
        "                    <li class=\"disabled\"><a>...</a></li>\n" +
        "                    <li :class=\"{'active' : now_page_number == max_page_number-2 }\"\n" +
        "                        @click=\"turn_page(max_page_number-2)\"><a>{{max_page_number-2}}</a></li>\n" +
        "                    <li :class=\"{'active' : now_page_number == max_page_number-1 }\"\n" +
        "                        @click=\"turn_page(max_page_number-1)\"><a>{{max_page_number-1}}</a></li>\n" +
        "                    <li :class=\"{'active' : now_page_number == max_page_number }\"\n" +
        "                        @click=\"turn_page(max_page_number)\"><a>{{max_page_number}}</a></li>\n" +
        "                    <li :class=\"haveNext\"\n" +
        "                        @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\"><a>&raquo;</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "            <div v-else>\n" +
        "                <ul class=\"pagination\">\n" +
        "                    <li :class=\"havePrevious\"\n" +
        "                        @click=\"turn_page(!havePrevious.disabled ? now_page_number-1 : now_page_number)\">\n" +
        "                        <a>&laquo;</a></li>\n" +
        "                    <li v-for=\"n in max_page_number\" :class=\"{'active': n == now_page_number }\" @click=\"turn_page(n)\">\n" +
        "                        <a>{{n}}</a></li>\n" +
        "                    <li :class=\"haveNext\"\n" +
        "                        @click=\"turn_page(!haveNext.disabled ? now_page_number+1 : now_page_number)\">\n" +
        "                        <a>&raquo;</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"col-lg-4 col-sm-3 text-right\">\n" +
        "        <div style=\"margin: 20px 0;padding: 6px 0;display: inline-block\">\n" +
        "            共{{max_page_number}}页，跳转至第\n" +
        "        </div>\n" +
        "        <input type=\"number\" :max=\"max_page_number\" min=\"1\" class=\"form-control\" style=\"display: inline-block;width: 54px;padding: 6px 6px\" v-model.number=\"change_page_number\" @keyup.enter=\"turn_page(change_page_number)\">\n" +
        "        <div style=\"margin: 20px 0;padding: 6px 0;display: inline-block\">\n" +
        "            页\n" +
        "        </div>\n" +
        "        <button type=\"button\" class=\"btn btn-primary\" style=\"position: relative;top: 2px\" @click=\"turn_page(change_page_number)\">确定</button>\n" +
        "    </div>\n" +
        "</div>",
    methods: {
        turn_page: function (page_number) {
            const that = this;
            if (page_number === this.now_page_number) {
                return false;
            }
            this.$parent.now_page_number = page_number;
            this.$parent.getData();
        },
        change_page_size: function (size) {
            this.$parent.now_page_size = size;
            this.$parent.now_page_number = 1;
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
};
// var a = {
//     max_page_number: 0,
//     now_page_number: 1,
//     now_page_size: 5,
//     page_size_list: ['5', '10', '15', '20'],
//     all_count: 0
// };
// <my-pagination :now_page_number="now_page_number" :now_page_size="now_page_size" :max_page_number="max_page_number"
// :page_size_list="page_size_list" :all_count="all_count"
//     ></my-pagination>