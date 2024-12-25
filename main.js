import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.json({name : 'Vimal'})
})

app.listen(port,(req,res) =>{
    console.log(`${port} is Running....`);
    
})