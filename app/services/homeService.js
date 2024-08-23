// services/artistService.js
import connection from '../config/db.js';

const getAll = async () => {
    const [rows] = await connection.query('SELECT * FROM Artist');
    return rows;
};

export {getAll}