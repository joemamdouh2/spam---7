const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : shadow `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '#d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '#m'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '#m'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '#d'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '#m'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '#m'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '#d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '#m'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '#rep'){
        message.channel.send('#rep @60')
    }
});

client2.on('message', message => {
    if(message.content === '#rep'){
        message.channel.send('#rep @60')
    }
});

client2.on('message', message => {
    if(message.content === '#rep'){
        message.channel.send('#rep @60')
    }
});

client2.on('message', message => {
    if(message.content === '#rep'){
        message.channel.send('#rep @60')
    }
});

client.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "519891078502154250";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >')
    },305);
})
client.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "519891078502154250";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('SHADOW SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >S ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE >SHADOW IS ONE > ')
    },305);
})




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
