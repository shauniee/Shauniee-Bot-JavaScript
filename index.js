const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix = '/';

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log('Shauniee is online!');
});

bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase(); 

    if(command === 'val'){
        bot.commands.get('val').execute(message, args);
    } else if (command === 'youtube'){
        bot.commands.get('youtube').execute(message, args);
    } 
    else if (command === 'ml'){
        bot.commands.get('ml').execute(message, args);
    } 
    else if (command === 'wakehannah'){
        bot.commands.get('wakehannah').execute(message, args);
    } 
    else if (command === 'ay'){
        bot.commands.get('wakeAoyu').execute(message, args);
    } 
});

// bot.login(Add your own token)
