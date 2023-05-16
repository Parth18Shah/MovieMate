const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');

app.use(express.json());
app.use(router);

const root = path.join(__dirname, '../frontend/index.html');
app.use(express.static(root));
app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));