// services/artistService.js
import connection from '../config/db.js';

const getAll = async () => {
    const [crypto] = await connection.query('SELECT * FROM crypto');
    const [stock] = await connection.query('SELECT * FROM stock');
    const rows = [crypto, stock]
    return rows;
};

// const calAllocation = (rows)
export {getAll}