import { ApiClient, DefaultApi } from 'finnhub';

const api_key = ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cr6k5i1r01qnuep5u960cr6k5i1r01qnuep5u96g"
const finnhubClient = new DefaultApi()

const symbols = ["NVDA", "TSLA", "INTC", "AMD", "IQ", "SNOW", "AAPL", "BILI", "AMZN", "JD"]

// Stock candles
symbols.forEach((symbol) => {
    finnhubClient.quote(symbol, (error, data, response) => {
        if (error) {
            console.error(`Error fetching data for ${symbol}:`, error);
        } else {
            const stockData = [symbol, data.c, data.dp];
            console.log(stockData);
        }
    });
});