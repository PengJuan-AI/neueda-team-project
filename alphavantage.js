/*
import axios from 'axios';

var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=942DOP06QJW03OOZ';

axios.get(url, {
    headers: {'User-Agent': 'axios'}
})
.then(response => {
    // The status code and data are accessible in the response object
    if (response.status !== 200) {
        console.log('Status:', response.status);
    } else {
        // Data is already parsed as a JSON object:
        console.log(response.data);
    }
})
.catch(error => {
    console.log('Error:', error.message);
});
*/
/*
import axios from 'axios';
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=5IMTRJ1YAW1UKLGI';

axios.get(url, {
    headers: {'User-Agent': 'axios'}
})
.then(response => {
    // The status code and data are accessible in the response object
    if (response.status !== 200) {
        console.log('Status:', response.status);
    } else {
        // Extract the symbol and time series data
        const symbol = response.data['Meta Data']['2. Symbol'];
        const timeSeries = response.data['Time Series (Daily)'];

        // Create the desired output structure
        const output = {
            'Symbol': symbol,
            'Time Series (Daily Close Price)': {}
        };

        // Populate the close prices
        for (const date in timeSeries) {
            output['Time Series (Daily Close Price)'][date] = parseFloat(timeSeries[date]['4. close']);
        }

        // Print the output
        console.log(output);
    }
})
.catch(error => {
    console.log('Error:', error.message);
});
*/
/*
import axios from 'axios';

const symbols = ["NVDA", "TSLA", "INTC", "AMD", "IQ", "SNOW", "AAPL", "BILI", "AMZN", "JD"];
const apiKey = '942DOP06QJW03OOZ';
const urlBase = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=' + apiKey;

let stockDataList = [];

async function getStockData(symbol) {
    try {
        const url = `${urlBase}&symbol=${symbol}`;
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'axios' }
        });
        
        if (response.status === 200) {
            const timeSeries = response.data['Time Series (Daily)'];
            let symbolData = {
                'Symbol': symbol,
                'data': []
            };

            // Process each date in the time series
            for (let date in timeSeries) {
                symbolData.data.push({
                    'date': date,
                    'close': parseFloat(timeSeries[date]['4. close'])
                });
            }

            stockDataList.push(symbolData);
            
        } else {
            console.log(`Error: Received status code ${response.status} for symbol ${symbol}`);
        }
    } catch (error) {
        console.log(`Error fetching data for symbol ${symbol}:`, error.message);
    }
}

async function fetchAllStockData() {
    for (let symbol of symbols) {
        await getStockData(symbol);
    }
    //console.dir(stockDataList, { depth: null }); 
    return stockDataList;
}

fetchAllStockData()

// Export the fetchAllStockData function
export { fetchAllStockData }
*/

import axios from 'axios';

const symbols = ["600519", "601857", "002594", "300760", "AAPL", "AMZN", "NVDA", "TSLA", "ULVR.L", "HSBA.L"];
const apiKey = '942DOP06QJW03OOZ';
const baseUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&entitlement=delayed&apikey=' + apiKey;

symbols.forEach(symbol => {
    const url = `${baseUrl}&symbol=${symbol}`;

    axios.get(url, {
        headers: {'User-Agent': 'axios'}
    })
    .then(response => {
        if (response.status !== 200) {
            console.log('Status:', response.status);
        } else {
            const globalQuote = response.data['Global Quote - DATA DELAYED BY 15 MINUTES'];
            const price = globalQuote['05. price'];
            const change = globalQuote['10. change percent'];
            console.log([symbol, price, change]);
        }
    })
    .catch(error => {
        console.log('Error:', error.message);
    });
});