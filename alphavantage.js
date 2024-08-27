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
        // Data is already parsed as a JSON object:
        console.log(response.data);
    }
})
.catch(error => {
    console.log('Error:', error.message);
});