Vue.component('echarts-pie',{
    data:{
        myChart:'',
        option_new_jig:{
            title: {
                text: '新增工夹具'
            },
            tooltip: {},
            legend: {
                data:['新增工夹具数量','库存工夹具数量']
            },
            xAxis: {
                data:[]
            },
            yAxis: {},
            series: [{
                name: '新增工夹具数量',
                type: 'bar',
                data: []
            },{
                name: '库存工夹具数量',
                type: 'bar',
                data: []
            }]
        }
    },
    props:['echart-pie_id','x_data','y_data'],
    template:"<div style=\"width: 500px;height: 350px\" id=\"{{echart-pie_id}}\"></div>",
    mounted:function () {
        this.myChart = echarts.init(document.getElementById());
        this.myChart.setOption(this.option_new_jig);
    }
})