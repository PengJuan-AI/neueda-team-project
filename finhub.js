import { ApiClient, DefaultApi } from 'finnhub';

const api_key = ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cr6k5i1r01qnuep5u960cr6k5i1r01qnuep5u96g"
const finnhubClient = new DefaultApi()

// Stock candles
finnhubClient.quote("AAPL", (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data.c)
        console.log(data.dp)
    }
});