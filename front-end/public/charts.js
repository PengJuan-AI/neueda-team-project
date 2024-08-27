$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/cal_allocation",
        method: "GET",
        success: function (data) {
            console.log(data)
            getDonutChart(data); // draw donut chart
            // $('#donut').append(chart);
        },
        error: function (error) {
            console.log(error);
        }

    })
})

function getDonutChart(data){
    var donutChart = echarts.init(document.getElementById('donut'));
    var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
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
                show: true,
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
      donutChart.setOption(option);
};
