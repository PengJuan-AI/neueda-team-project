import axios from 'axios';
import fs from 'fs'; // Import the file system module

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
    
    // Write the stock data list to a JSON file
    fs.writeFile('stockData.json', JSON.stringify(stockDataList, null, 2), (err) => {
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