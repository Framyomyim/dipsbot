require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');

client.on('ready', () => console.log('DIPSBot is running on your way!'));

client.on('message', async msg => {
    let text = msg.content;
    let author = msg.author.username;
    let channelName = msg.channel.name;

    if (msg.channel.name.includes('ticket')) {
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            header: {
                'Content-Type': 'multipart/form-data',
            },
            auth: {
                bearer: 'nbTaKpaK84zihGKEXUP4pucBroXbcuUvVsJsb3PMu4J',
            },
            form: {
                message: `${author} (${channelName}) : ${text}`
            },
        }, (err, httpResponse, body) => {
            if (err) {
                console.log(err);
            } else {
                console.log(body);
            }
        });
    }
});

client.login('OTIyMDc3MjkzODE4NTY4NzY0.Yb8NZg.XktStJppfXPAQKj30RV-ib8IXZo');
