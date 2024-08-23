// services/artistService.js
import connection from '../config/db.js';

const getAll = async () => {
    const [rows] = await connection.query('SELECT * FROM crypto');
    return rows;
};

export {getAll}