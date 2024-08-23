
import * as homeService from '../services/homeService.js';

export const getHome = async (req, res) => {
    try {
        const all = await homeService.getAll();
        // res.json(all);
        res.status(200).send("The server run successfully.")
    } catch (error) {
        res.status(500).send(error.message);
    }
    
};
