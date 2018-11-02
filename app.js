const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hey how are you!');
});

app.get('/user/:name', (req, res) => {
    res.send('Hey ' + req.params.name + ' You good brother' + '!')
})

app.listen(process.env.PORT, process.env.IP, 3000, function(){
    console.log('Listening to Port 3000')});