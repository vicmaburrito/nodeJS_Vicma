const express = require('express');
const app = express();
const twilio = require("./twilio");
const dialogflow = require("./dialogflow");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/webhook', async function (req, res) {
    // console.log("req ->", req.body);
    // let receivedMessage = req.body.Body;
    // let payload = await dialogflow.sendToDialogFlow(message.body, "vicma");
    // let responses = payload.fulfillmentMessages;
    // for (const response of responses) {
    //   await sendMessageToWhatsapp(client, message, response);
    // }

    twilio.sendTextMessage(req.body.WaId, req.body.Body);
    res.status(200).json({ ok: true, msg: "Mensaje enviado correctamente" });
});
 
app.listen(3000,()=> {
    console.log("Servidor Montado en el puerto 3000")
});