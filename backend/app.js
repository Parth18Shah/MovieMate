const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);
app.set('views', path.join(__dirname, 'static'));
app.set('view engine', 'ejs');
const root = path.join(__dirname, './static');
app.use(express.static(root));
app.get('*', (req, res) => {
    res.sendFile('index', { root });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));