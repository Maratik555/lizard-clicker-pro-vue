import {Telegraf, Markup} from 'telegraf'
import 'dotenv/config'

const bot = new Telegraf(process.env.BOT_TOKEN);

const webAppUrl = 'https://clicker-555-pro.web.app';

bot.command('start', (ctx) => {
  ctx.reply(`Hello! Press to start the App`, Markup.inlineKeyboard([Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`)]) );
});

bot.launch();