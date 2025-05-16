const express = require("express");
const connectDB = require("./db.js");
const tokenTeleGramBot = "7828751020:AAEwrw8aUbyZYKx4N--WiUpeuAYq81970V0";
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(tokenTeleGramBot, { polling: true });
const async = require("async");
let chatId = 1941528902;
const app = express();
const Link = require("./mp3.model.js");
const play = require("./play.js");
connectDB();
app.use(express.json());






play(bot,chatId )
const queue = async.queue(async (msg, callback) => {
  if (msg.text.includes("https://www.youtube.com/")) {
    const newLink = new Link({ link: msg.text, numberRun: 0 });
    const saved = await newLink.save();
  }

  callback();
});

bot.on("message", async (msg) => {
const total = await Link.countDocuments();
  bot.sendMessage(msg.chat.id,`Hiện có ${total} link.` );
  queue.push(msg);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
