
import * as homeService from '../services/homeService.js';
import path from 'path'

export const getHome = async (req, res) => {
    try {
        const all = await homeService.getAll();
        // console.log(all)
        res.json(all);
        // res.status(200).send("The server run successfully.")
    } catch (error) {
        res.status(500).send(error.message);
    }

};

export const calAllocation = async (req, res) => {
    try {
        const all = await homeService.getAll();
        const assetName = ['crypto', 'stock'];
        const newDataset = all.map((arr, index) => {
            return {
                value: Math.round(arr.reduce((acc, v) => acc + v.price * v.quantity, 0), -2),
                // stock_value: arr[1].reduce((acc,v) => acc + v.value*v.quantity, 0)
                name: assetName[index]
            }
        })
        console.log("Allocation:", newDataset)
        res.json(newDataset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getCryptoJson = async (req, res) => {
    try {
        const asset = await homeService.getAllCrypto();
        const data = []
        asset.forEach(v => {
            data.push({ name: v.symbol, value: Math.round(v.price * v.quantity) })
        })
        // console.log(data)
        res.json(data)
    } catch {
        res.status(500).send(error.message)
    }
}

export const getStockJson = async (req, res) => {
    try {
        const asset = await homeService.getAllStock();
        const data = []
        asset.forEach(v => {
            data.push({ name: v.symbol, value: Math.round(v.price * v.quantity) })
        })
        // console.log(data)
        res.json(data)
    } catch {
        res.status(500).send(error.message)
    }
}