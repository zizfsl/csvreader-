const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    fs.readFile('./file.csv', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // console.log(data);
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
