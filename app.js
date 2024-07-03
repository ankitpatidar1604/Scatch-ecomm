const express = require('express');
const app = express();
const path=require('path');
const cookieParser = require('cookie-parser');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Badiya chal rha h');
})

app.listen(8888,()=>{
    console.log('Server started on port 8888');
})