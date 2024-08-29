import allCrypto from './static/cryptoTable.json' with { type: 'json' };
import allStock from './static/stockData.json' with { type: 'json' };


// allStock = fetchAllStockData()

// var dateList = []
function parseData(data) {
    var dateList = []
    var valueList = []
    var symbolList = []
    data.forEach(asset => {
        const { symbol, data } = asset;
        symbolList.push(symbol);
        dateList = data.map((item) => {
            return item.date.slice(0, 10);
        });
        valueList.push(
            data.map(function (item) {
                return Math.round(item.close * 100) / 100;
            })
        );
    })
    // console.log(dateList)
    console.log(valueList)
    return [dateList, valueList, symbolList]
}

// Prepare data for ECharts
function prepareForEcharts(valueList, symbolList){
    // console.log('get series')
    const series = valueList.map((data, index) => ({
        name: `${symbolList[index]}`,
        type: 'line',
        data: data
    }));
    console.log(series)
    return series
}

// function drawLinechart(id, series, date){
function drawLinechart(id, histData){
    
    const [dateList, valueList, symbolList] = parseData(histData)
    const series = prepareForEcharts(valueList, symbolList)
    var linechart = echarts.init(document.getElementById(id));
    var option = {
        // Make gradient line here
        title: [
            {
                left: 'center',
                top: '5%',
                text: 'Historical Data of Holdings'
            },
        ],
        legend: {
            bottom: '10%'
            // data: series.map(s => s.name)
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            splitline: { show: false },
            data: dateList
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            }
        },
        grid: [
            {
                bottom: '10%',
                top: '10%'
            },
        ],
        series: series
        // [
        //   {type: 'line',showSymbol: false,data: valueList}
        // ]
    };

    linechart.setOption(option)
    // linechart2.setOption(option)
}

drawLinechart('linechart1', allStock)
drawLinechart('linechart2', allCrypto)