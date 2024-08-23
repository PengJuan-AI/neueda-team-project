// app.js

import express from 'express';
import homeRoute from './routes/homeRoute.js'

const app = express();
const port =3000;

app.use(express.json()); // More modern approach than using the body-parser library. it is now not required.

app.use('/', homeRoute);
app.listen(port, () => {
    console.log(`Server is running on port 3000`);
});