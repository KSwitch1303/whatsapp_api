const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr',(qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready',() => {
    console.log('Client is ready!');
    for (let i =0; i < 49; i++ ){
        client.sendMessage('2348062761608@c.us',"good evening sir just used code to send this to you")
    }
});

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