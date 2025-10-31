import express from "express";
import TelegramBot from "node-telegram-bot-api";

const app = express();
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Salom! 🚖 TaxiBot ishlayapti!");
});

bot.onText(/buyurtma/, (msg) => {
  bot.sendMessage(msg.chat.id, "Buyurtmangiz qabul qilindi! Haydovchi topilmoqda...");
});

app.get("/", (req, res) => {
  res.send("TaxiBot server ishlayapti ✅");
});

app.listen(3000, () => console.log("Server 3000-portda ishga tushdi"));
