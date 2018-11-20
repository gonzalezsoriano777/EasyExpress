const express = require('express');
const app = express();

app.get('/:name', (req, res) => {
    res.send('hello' + req.params.name + '!');
})

const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log('Running on port 8080'));