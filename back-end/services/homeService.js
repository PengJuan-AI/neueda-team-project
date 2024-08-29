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

const changeStockQuantity = async (symbol, stockData) => {
    const {quantity} = stockData;
    //console.log(quantity);
    const [rows] = await connection.query(
        'UPDATE stock SET quantity = ? WHERE symbol = ?',
        [quantity, symbol]
    );
    return rows;
};

const refreshAllStockPrice = () => {
    const api_key = ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "cr6k5i1r01qnuep5u960cr6k5i1r01qnuep5u96g";
    const finnhubClient = new DefaultApi();

    const symbols = ["NVDA", "TSLA", "INTC", "AMD", "IQ", "SNOW", "AAPL", "BILI", "AMZN", "JD"];

    // stock candles
    symbols.forEach((symbol) => {
        finnhubClient.quote(symbol, (error, data, response) => {
            if (error) {
                console.error(`Error fetching data for ${symbol}:`, error);
            } else {
                connection.query(
                    'UPDATE stock SET price = ?, change_percent = ? WHERE symbol = ?',
                    [data.c, data.dp, symbol]
                );
            }
        });
    });
};

// const calAllocation = (rows)
export { getAll, getAllCrypto, getAllStock, getStockBySymbol, changeStockQuantity, refreshAllStockPrice}