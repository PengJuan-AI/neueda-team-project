
import * as homeService from '../services/homeService.js';
import { ApiClient, DefaultApi } from 'finnhub';
import path from 'path'

export const getHome = async (req, res) => {
    try {
        homeService.updateAll();
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

export const getStockBySymbol = async (req, res) => {
    try {
        const stock = await homeService.getStockBySymbol(req.params.symbol);
        if (stock) {
            res.json(stock);
        } else {
            res.status(404).send('Stock not found');
        }
    } catch (error){
        res.status(500).send(error.message)
    }
}

export const updateStockPrice = async (req, res) => {
    try {
        //console.log(req.params);
        const api_key = ApiClient.instance.authentications['api_key'];
        api_key.apiKey = "cr6k5i1r01qnuep5u960cr6k5i1r01qnuep5u96g"
        const finnhubClient = new DefaultApi()

        // Stock Candles
        const symbol = req.params.symbol
        finnhubClient.quote(symbol, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            const stockData = [data.c, data.dp]
            //console.log(stockData);
            homeService.updateStock(symbol, stockData);
            res.status(200).send("Selected Stock updated with latest price!")
        }
        });
    } catch (error){
        res.status(500).send(error.message)
    }
}