import connection from '../config/db.js';

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

let symbol='BTC'
const getCrypto = async (symbol) => {
    const [rows] = await connection.query('SELECT * FROM crypto WHERE symbol=?', [symbol]);
    return rows;
};
// const calAllocation = (rows)
export {getAll, getAllCrypto, getAllStock}