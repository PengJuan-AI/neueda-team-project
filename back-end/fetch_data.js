const axios = require('axios');
const fs = require('fs');

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

        // Log the formatted data
        console.log('Formatted Data:', JSON.stringify(result, null, 4));

        // Check if result has data
        if (result.length > 0) {
            console.log('Attempting to write data to cryptoTable.json');
            
            // Write the formatted data to a file named 'cryptoTable.json'
            fs.writeFileSync('cryptoTable.json', JSON.stringify(result, null, 4));

            console.log('Data has been successfully written to cryptoTable.json');
        } else {
            console.log('No data to write.');
        }

        return result;
    } catch (error) {
        console.error('Error fetching data from Python API:', error);
    }
}

getDataFromPythonAPI();
