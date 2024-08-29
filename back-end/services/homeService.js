import connection from '../config/db.js';
import { ApiClient, DefaultApi } from 'finnhub';
import axios from 'axios';

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

const changeStockQuantity = async (symbol, quantity) => {
    // const {quantity} = stockData;
    console.log(quantity);
    const [rows] = await connection.query(
        'UPDATE stock SET quantity = ? WHERE symbol = ?',
        [quantity, symbol]
    );
    return rows;
};

const refreshAllStockPrice = () => {
    const symbols = ["600519", "601857", "002594", "300760", "AAPL", "AMZN", "NVDA", "TSLA", "ULVR.L", "HSBA.L"];
    const apiKey = '942DOP06QJW03OOZ';
    const baseUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&entitlement=delayed&apikey=' + apiKey;

    symbols.forEach(symbol => {
        const url = `${baseUrl}&symbol=${symbol}`;

        axios.get(url, {
            headers: { 'User-Agent': 'axios' }
        })
            .then(response => {
                if (response.status !== 200) {
                    console.log('Status:', response.status);
                } else {
                    const globalQuote = response.data['Global Quote - DATA DELAYED BY 15 MINUTES'];
                    const price = globalQuote['05. price'];
                    const change = globalQuote['10. change percent'];
                    console.log([symbol, price, change]);
                    connection.query(
                        'UPDATE stock SET price = ?, change_percent = ? WHERE symbol = ?',
                        [price, change, symbol]
                    );
                }
            })
            .catch(error => {
                console.log('Error:', error.message);
            });
    });
};

// const calAllocation = (rows)
export { getAll, getAllCrypto, getAllStock, getStockBySymbol, changeStockQuantity, refreshAllStockPrice }