import express from 'express';
import path from 'path';
import url from 'url';

const app = express();

// Serve static files from the 'public' directory
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 8081
app.listen(PORT, () => {
    console.log(`Front-end server is running on port ${PORT}`);
});