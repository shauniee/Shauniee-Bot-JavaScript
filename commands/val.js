module.exports = {
    name: 'val',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('@everyone Anyone wants to val now?');
    }
}