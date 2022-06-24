const express = require('express');
const app = express();
const indexRouter = require('./router/index')

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api',indexRouter);


module.exports = app;