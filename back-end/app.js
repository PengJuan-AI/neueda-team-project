// app.js
import express from 'express';
import cors from 'cors';
// import path from 'path'
// import url from 'url';
import homeRoute from './routes/homeRoute.js';

const app = express();
const port =3000;

app.use(express.json()); // More modern approach than using the body-parser library. it is now not required.
app.use(cors())

// all routes
app.use('/', homeRoute);
// app.use('/cal_allocation', homeRoute);

app.listen(port, () => {
    console.log(`Server is running on port 3000`);
});