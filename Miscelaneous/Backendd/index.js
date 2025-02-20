const express = require("express");
let app = express();


//niche ka dono line hm post method ke liye likhe hai 
app.use(express.urlencoded({extended:true}))
app.use(express.json());


const port =8080;

app.get('/register',(req,res)=>{
    let {user,password} = req.query;
    res.send(`standard get response .Welcome ${user}`)
});

app.post('/register',(req,res)=>{
    let {user , password}=req.body;
    res.send(`standard post response .Welcome ${user} `)
});


app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})