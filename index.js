const express = require('express')
const app = express()

const port = 3000

app.get("/", function(req,res){
  res.sendFile(__dirname+"/html/index.html")
})
app.get("/sobre", function(req,res){
  res.sendFile(__dirname+"/html/sobre.html")
})



app.listen(port, function(){
  console.log(`Servidor Rodando na porta localhost:${port}`)
})