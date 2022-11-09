const express =require('express');
const app= express();
const bodyParser =require('body-parser');
const htnm =`127.0.0.1`
const port =1011

const client = require('twilio')('AC78dc9b40f2e896474dd6214f7a4e83ac', 'ca9e3bf1fe19569b6d986919a3cb493b');


app.get('/',(req,res)=>{
    
    sendSms();
    res.send(`<h1 style="text-align:center; margin:100px;">THANK YOU.....</h1>`);

    

});


app.listen(port,htnm,()=>{
    console.log(`listen on port ${port}`);
})

function sendSms(){
    client.messages
    .create({
       body: 'NEW APPOINMENT NAME:PRAKASH AGE:24 MOBILE:7074205990 ',
       from: '+13608002440',
       to: '+917974205990'
     })
    .then(message => console.log(message.sid));
}
