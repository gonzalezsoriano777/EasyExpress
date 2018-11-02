const mongoose = require('mongoose');
const express = require('express');
const app = express.app();

app.get('/user', (req, res) => {
    res.send('Hello World')
})