console.log('starting app.js');

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.listen(3000, ()=>{
    console.log('서버 시작 3000');
});