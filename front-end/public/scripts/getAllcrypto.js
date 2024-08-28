$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/all_crypto",
        method: "GET",
        success: function (data) {
            getPieChart('piechart1', data);
        },
        error: function (error) {
            console.log(error);
        }

    })
})

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/all_stock",
        method: "GET",
        success: function (data) {
            console.log(data)
            getPieChart('piechart2', data);
        },
        error: function (error) {
            console.log(error);
        }

    })
})

function getPieChart(id, data){
    console.log("Draw pichart")
    const dom = document.getElementById(id);
    var pieChart = echarts.init(dom.querySelector('.modal-body'));
    // var pieChart = echarts.init(document.getElementById('piechart11'));
    var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
            left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            //radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data : data
          }
        ]
      };
      pieChart.setOption(option);
};