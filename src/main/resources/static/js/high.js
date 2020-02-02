//添加采购单
var add_myshoplist = new Vue({
    el:"#add_myshoplist",
    data:{
        bill_no:"",
        submit_name:"",
        production_line_id:"",
        code1:"",
        number1:"",
        code2:"",
        number2:"",
        code3:"",
        number3:"",
        code4:"",
        number4:"",
        submit_time:""
    },
    created:function () {
        const that = this;
        var aData = new Date();
        that.submit_time =
            aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate() + " "
            + aData.getHours() +":"+ aData.getMinutes();
    },
    methods:{
        add_shoplist:function (submit_id) {
            const that = this;
            $.ajax({
                url:"add_shoplist",
                data: {
                    submit_id:submit_id,
                    bill_no: this.bill_no,
                    submit_name:this.submit_name,
                    production_line_id: this.production_line_id,
                    code1: this.code1,
                    number1: this.number1,
                    code2:this.code2,
                    number2: this.number2,
                    code3:this.code3,
                    number3: this.number3,
                    code4:this.code4,
                    number4: this.number4,
                    submit_time:this.submit_time
                },
                success:function (res) {
                    alert(res);
                    that.bill_no = "";
                    that.submit_name = "";
                    that.production_line_id = "";
                    that.code1 = "";
                    that.number1 = "";
                    that.code2 = "";
                    that.number2 = "";
                    that.code3 = "";
                    that.number3 = "";
                    that.code4 = "";
                    that.number4 = "";
                }
            })
        }
    }
})
//我的采购单数据的显示
var show_myshoplist = new Vue({

})