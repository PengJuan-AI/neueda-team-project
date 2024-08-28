// const axios = require('axios');
import axios from 'axios';

async function getDataFromPythonAPI() {
    try {
        const response = await axios.get('http://127.0.0.1:5000/fetch-data');
        const data = response.data;

        // Transforming the data into the desired format
        const formattedData = {};

        data.forEach(record => {
            const symbol = record.asset_id;
            if (!formattedData[symbol]) {
                formattedData[symbol] = {
                    symbol: symbol,
                    data: []
                };
            }
            formattedData[symbol].data.push({
                date: record.time_close,
                close: record.rate_close
            });
        });

        // Converting the object to an array of the desired format
        const result = Object.values(formattedData);

        console.log('Formatted Data:', JSON.stringify(result, null, 4));

        return result;
    } catch (error) {
        console.error('Error fetching data from Python API:', error);
    }
}

getDataFromPythonAPI();
