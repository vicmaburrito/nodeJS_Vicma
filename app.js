const express = require('express')
const app = express()
app.use(express.json());

app.post('/webhook', function (req, res) {
  res.send('Hello World')
});
 
app.listen(3000,()=> {
    console.log("Servidor Montado en el puerto 3000")
});