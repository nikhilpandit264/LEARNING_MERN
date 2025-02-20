const express = require("express")
const app = express()
const port=3000

app.listen(port,()=>{
    console.log(`The request is listen by ${port}`)
});

// app.use((req,res)=>{
//   //  console.log(req)
//     console.log("Request Recieved")
//    // res.send("Hello world")

// //    res.send({
// //     name:"nikhil",
// //     color:"black",
// //    })
//    // let code ="<h1>Nikhil Chaturvedi</h1><ul><li>Harshit maurya</l1><li>Gaurav yadav</li></ul>"
//   // res.send(code)
// })

app.get("/",(req,res)=>{
res.send("hello,You contacted the root path")
})

// app.get("/apple",(req,res)=>{
// res.send("You contacted the aplle path")
// })

// app.get("/mango",(req,res)=>{
// res.send("You contacted the mango path")
// })

// app.get("*",(req,res)=>{
// res.send("This path does not exist ")
// })

// app.post("/",(req,res)=>{
//     res.send("You contacted the post path")
// })

// app.get("/:username/:id",(req,res)=>{
//     let {username , id} =req.params
//     res.send(`welcome to the page of @${username}.`)
// })

app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
      return res.send("<h1>Nothing Searched</h1>");  // Ensure the function stops here
    }
    res.send(`<h1>Search result for Query: ${q}</h1>`);
 });
 