const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr',(qr) => {
    qrcode.generate(qr, {small: true});
});

 client.on('ready',() => {
    console.log('Client is ready!');
   // for (let i =0; i <1001; i++ ){
      //  client.isRegisteredUser('2348113652022@c.us')
        //client.isRegisteredUser
        myFunction();
        //client.sendMessage('2348113646464212@c.us','code cracked');
    //}
});

async function myFunction() {
    console.log('object')
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve(client.isRegisteredUser('2348113652054522@c.us') );}, 3000);
    });
    console.log(await myPromise)
    return "Hello";
  }
client.initialize();

client.on('message', message =>{
    console.log(message.body);
    if(message.body === 'hello') {
        message.reply('hi');
    }
    if(message.body === 'hi') {
        console.log(message.from);
        client.sendMessage(message.from,'good evening');
    }
});