let message = {
    data() {
        return {
            new_message: [],
            other_message: []
        }
    },
    template:
        "<a href=\"#\" data-toggle=\"dropdown\">\n" +
        "                        <i class=\"fa-bell-o\"></i>\n" +
        "                        <span class=\"badge badge-purple\">{{other_message.length+new_message.length}}</span>\n" +
        "                    </a>\n" +
        "\n" +
        "                    <ul class=\"dropdown-menu notifications\">\n" +
        "                        <li class=\"top\">\n" +
        "                            <p class=\"small\">\n" +
        "                                <a href=\"#\" class=\"pull-right\">标记所有为已读</a>\n" +
        "                                你有<strong>{{new_message.length}}</strong>新消息\n" +
        "                            </p>\n" +
        "                        </li>\n" +
        "\n" +
        "                        <li>\n" +
        "                            <ul class=\"dropdown-menu-list list-unstyled ps-scrollbar\">\n" +
        "                                <li class=\"active notification-success\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-user\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<strong>New user registered</strong>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t30 seconds ago\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "\n" +
        "                                <li class=\"active notification-secondary\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-lock\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<strong>Privacy settings have been changed</strong>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t3 hours ago\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "\n" +
        "                                <li class=\"notification-primary\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-thumbs-up\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<strong>Someone special liked this</strong>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t2 minutes ago\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "\n" +
        "                                <li class=\"notification-danger\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-calendar\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\tJohn cancelled the event\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t9 hours ago\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "\n" +
        "                                <li class=\"notification-info\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-database\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\tThe server is status is stable\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\tyesterday at 10:30am\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "\n" +
        "                                <li class=\"notification-warning\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-envelope-o\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\tNew comments waiting approval\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\tlast week\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "                                <li v-for=\"item in new_message\" class=\"active notification-success\" @click=\"showTab(item.tab_id,item.id)\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-envelope-o\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "                                            {{item.generate_name+'#'+item.generate_id +item.message}}\n" +
        "                                        </span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "                                            {{item.generate_time}}\n" +
        "                                        </span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "                                <li v-for=\"item in other_message\" class=\"notification-success\" @click=\"showTab(item.tab_id,item.id)\">\n" +
        "                                    <a href=\"#\">\n" +
        "                                        <i class=\"fa-envelope-o\"></i>\n" +
        "\n" +
        "                                        <span class=\"line\">\n" +
        "                                            {{item.generate_name+'#'+item.generate_id +item.message}}\n" +
        "                                        </span>\n" +
        "\n" +
        "                                        <span class=\"line small time\">\n" +
        "                                            {{item.generate_time}}\n" +
        "                                        </span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "                            </ul>\n" +
        "                        </li>\n" +
        "\n" +
        "                        <li class=\"external\">\n" +
        "                            <a href=\"#\">\n" +
        "                                <span>查看所有新消息</span>\n" +
        "                                <i class=\"fa-link-ext\"></i>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                    </ul>",
    methods: {
        getData: function () {
            const that = this;
            $.ajax("get_new_message", {
                data: {
                    id: id
                },
                success(data, textStatus, jqXHR) {
                    console.log("new");
                    console.log(data);
                    that.new_message = data;
                }
            });
            $.ajax("get_other_message", {
                data: {
                    id: id
                },
                success(data, textStatus, jqXHR) {
                    console.log("other");
                    console.log(data);
                    that.other_message = data;
                }
            })
        },
        showTab: function (tab_id,message_id) {
            let $this = $("#" + tab_id);
            let $main = $("#main-menu li[href*="+tab_id+"]");
            //显示父亲tab
            $this.parent("div").addClass("in active");
            $this.parent("div").siblings().removeClass("in active");
            //显示自身
            $this.siblings().removeClass("in active");
            $this.addClass("in active");
            //设置.page-title下的显示
            $this.siblings(".page-title").find(" ol li").removeClass("active");
            $this.siblings(".page-title").find(" ol li[href*=" + tab_id + "]").addClass("active");
            //设置#main-menu下的列表显示
            $main.parents(".main-menu-li").siblings().removeClass("active opened expanded");
            $main.parents(".main-menu-li").addClass("active opened expanded");
            $main.siblings().removeClass("active");
            $main.addClass("active");

            $.ajax("read_message",{
                data:{
                    id:id,
                    message_id:message_id
                },
                success(data, textStatus, jqXHR) {
                    if(data){
                        alert("服务器错误！");
                    }
                }
            })
        }
    }
};