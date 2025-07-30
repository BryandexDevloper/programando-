const express = require ('express')
const app=express()
const porta = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Bryan')
})
//

app.get('/nome',(req,res)=>{
    res.json({nome:'Bryan'})
})

app.listen(porta || 3000, () => {
    console.log('Servidor rodando');
});
