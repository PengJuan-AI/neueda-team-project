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

// Serve static files from the 'public' directory
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, 'public')))

// all routes
app.use('/', homeRoute);
app.use('/cal_allocation', homeRoute);

app.listen(port, () => {
    console.log(`Server is running on port 3000`);
});