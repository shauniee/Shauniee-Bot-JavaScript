module.exports = {
    name: 'ml',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('@everyone Anyone wants to ml now?');
    }
}