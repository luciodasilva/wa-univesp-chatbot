const qrcode = require('qrcode-terminal');
const { Client, Location, List, Buttons, LocalAuth} = require('./index');

//const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
 

client.on('message', message => {
   // const nomeContato = msg._data.notifyName;
	if(message.body == 'Teste') {
	//	message.reply('Digite 1 ou 2 ');
        console.log('primeira parte ok');
    //    var button = new Buttons('Teste',[{id: "001", body:'bt1'},{id: "002",body:'bt2'},{id: "003",body:'bt3'}],'Tentativa','Agora vai');
    //    client.sendMessage(msg.from, button);
    
        let sections = [{title:'sectionTitle',rows:[{title:'ListItem1', description: 'desc'},{title:'ListItem2'}]}];
        let list = new List('List body','btnText',sections,'Title','footer');
        console.log('leu a variável');

    // Rafa, no log o código rodou até aqui na leitura de variável, mas não executou o sendMessage. Naquele outro cógido acho que vc vai conseguir ver isso

        client.sendMessage(msg.from, list);

        message.reply('passou por tudo');
        

        
	}
    else{        
        console.log(message.body);
    }
});
 
 