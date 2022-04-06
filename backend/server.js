const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const pathToFrontend = `${__dirname}/../frontend`

app.use('/public', express.static(`${pathToFrontend}/public`));


app.get('/', (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

app.get('/image-list', (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/../frontend/public/data.json`));
});


const port = 9000;
app.listen(port, () =>{
    console.log(`Server is running on http://127.0.0.1:${port}`)
})