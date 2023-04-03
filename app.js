const express=require('express');
const app=express();
app.get('/',function(req,res)
{
res.send("Namaste,World!!");
})
app.listen(8000,function(){
  console.log("Server is running on port 8000");
})



// const app=require("express")();
// const PORT=process.env.PORT||3000;

// app.get("",(req,res)=>
// {
// res.send("Namaste,World!!");
// });

// app.listen(PORT,() =>{
//   console.log("Server is running on port 3000");
// })