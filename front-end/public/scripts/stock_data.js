import axios from 'axios';
import fs from 'fs'; // Import the file system module

const apiKey = '942DOP06QJW03OOZ';
const urlBase = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=' + apiKey;

const usedSymbols = ["AAPL", "AMZN", "NVDA", "TSLA"];
const cnySymbols = ["600519", "601857", "002594", "300760"];
const gbpSymbols = ["ULVR.L", "HSBA.L"];

let stockDataList = [];

async function getUsdStockData(symbol) {
    try {
        const url = `${urlBase}&symbol=${symbol}`;
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'axios' }
        });
        
        if (response.status === 200) {
            const timeSeries = response.data['Time Series (Daily)'];
            let symbolData = {
                'symbol': symbol,
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

async function getCnyStockData(symbol) {
    try {
        const url = `${urlBase}&symbol=${symbol}`;
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'axios' }
        });
        
        if (response.status === 200) {
            const timeSeries = response.data['Time Series (Daily)'];
            let symbolData = {
                'symbol': symbol,
                'data': []
            };

            // Process each date in the time series
            for (let date in timeSeries) {
                symbolData.data.push({
                    'date': date,
                    'close': parseFloat(timeSeries[date]['4. close'])/7.1
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

async function getGbpStockData(symbol) {
    try {
        const url = `${urlBase}&symbol=${symbol}`;
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'axios' }
        });
        
        if (response.status === 200) {
            const timeSeries = response.data['Time Series (Daily)'];
            let symbolData = {
                'symbol': symbol,
                'data': []
            };

            // Process each date in the time series
            for (let date in timeSeries) {
                symbolData.data.push({
                    'date': date,
                    'close': parseFloat(timeSeries[date]['4. close'])*1.32
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
    for (let symbol of usedSymbols) {
        await getUsdStockData(symbol);
    }
    for (let symbol of cnySymbols) {
        await getCnyStockData(symbol);
    }
    for (let symbol of gbpSymbols) {
        await getGbpStockData(symbol);
    }
    
    //console.dir(stockDataList, { depth: null });
    
    // Write the stock data list to a JSON file
    fs.writeFile('internationalStockData.json', JSON.stringify(stockDataList, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Stock data successfully written to stockData.json');
        }
    });
    
    return stockDataList;
    
}

fetchAllStockData();

// Export the fetchAllStockData function
export { fetchAllStockData };