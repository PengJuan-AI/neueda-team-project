import connection from '../config/db.js';
import { ApiClient, DefaultApi } from 'finnhub';

const getAll = async () => {
    const [crypto] = await connection.query('SELECT * FROM crypto');
    const [stock] = await connection.query('SELECT * FROM stock');
    const rows = [crypto, stock]
    return rows;
};

const getAllCrypto = async () => {
    const [rows] = await connection.query('SELECT * FROM crypto');
    return rows;
};

const getAllStock = async () => {
    const [rows] = await connection.query('SELECT * FROM stock');
    return rows;
};

let symbol = 'BTC'
const getCrypto = async (symbol) => {
    const [rows] = await connection.query('SELECT * FROM crypto WHERE symbol=?', [symbol]);
    return rows;
};

const getStockBySymbol = async (symbol) => {
    const [rows] = await connection.query('SELECT * FROM stock WHERE symbol = ?', [symbol]);
    //console.log(rows);
    return rows;
};

const updateStock = async (symbol, stockData) => {
    const [price, change_percent] = stockData;
    const [rows] = await connection.query(
        'UPDATE stock SET price = ?, change_percent = ? WHERE symbol = ?',
        [price, change_percent, symbol]
    );
};

const updateAll = () => {
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
                const stockData = [data.c, data.dp];
                updateStock(symbol, stockData);
            }
        });
    });
};

// const calAllocation = (rows)
export { getAll, getAllCrypto, getAllStock, getStockBySymbol, updateStock, updateAll }