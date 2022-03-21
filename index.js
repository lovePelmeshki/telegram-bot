const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "user_user",
    database: "user_telegram-bot-db",
    password: "90f8b7rR@",
    port: "3306"
});
connection.connect(function(err){
    if (err){
        return console.error("Error: " + err)
    }
    else{
        console.log("Connection SUSSED!")
    }
})



const TelegramApi = require('node-telegram-bot-api')
const token = '5168847385:AAGvEGSIWXLnVXFCwp83atbUYQKDb7E1yfg'

const bot = new TelegramApi(token, {polling: true})


bot.setMyCommands([
    {command: '/start', description: 'Начать'},
    {command: '/new_event', description: 'Новая заявка'},
    {command: '/show_events', description: 'Показать заявки'},
    {command: '/whoami', description: 'Показать имя и фамилию'}
])


bot.on('message', async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start'){
        console.log(msg);
        await bot.sendMessage(chatId, `chatId = ${chatId} \nid = ${msg.from.id} \nusername = ${msg.from.username}`)
    }
    if (text === '/new_event'){
        await bot.sendMessage(chatId, `bot.sendMessage ${text}`)
    }
    if (text === '/show_events'){
        await  bot.sendMessage(chatId, `bot.sendMessage ${text}`)}
    if (text === '/whoami'){
        await bot.sendMessage(chatId, `first_name = ${msg.from.first_name}, name = ${msg.from.name}, last_name = ${msg.from.last_name}` )
    } else await  bot.sendMessage(chatId, text)
})

bot.on('callback_query', msg =>{
    const data = msg.data;
    const chatId = msg.message.chat.id;
    console.log(msg)
})

//changes