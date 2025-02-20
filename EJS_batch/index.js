const express = require("express")
const app = express()
const path = require("path");
const port = 3030;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));





app.get("/",(req,res)=>{
   
      res.render("home.ejs");
})


app.get("/rolldice",(req,res)=>{
   let diceValue =Math.floor(Math.random() *6) +1;
   res.render("rolldice.ejs",{nums:diceValue})
   
})

app.get("/rolldice",(req,res)=>{
   let diceValue =Math.floor(Math.random() *6) +1;
   res.render("rolldice.ejs",{diceValue})
   
})

// app.get("/ig/:username",(req,res)=>{
//    const followers = ["harshit ", "Gaurav" ," Nikhil"]
//    let {username } = req.params;
//    res.render("instragram.ejs",{username,followers});
// })


app.get("/ig/:username", (req, res) => {
   let { username } = req.params;  
   const instaData = require("./data.json");
   const data = instaData[username];

   if (data) {
      res.render("instagram.ejs", { data, username });  // Pass username separately
   } else {
      res.render("error.ejs");
   }
});



app.listen(port, ()=>{
console.log(`listening on port ${port}`)
})