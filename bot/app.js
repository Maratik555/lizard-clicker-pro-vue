import {session, Telegraf} from 'telegraf'
import {handle} from './commands.js';
import 'dotenv/config'

let commands = [];

const bot = new Telegraf(process.env.BOT_TOKEN, {
  webHook: {
    port: process.env.PORT || 3000
  }
});

function init() {
  bot.use(session());
  commands = [handle(bot)];
  for(const command of commands) {
    command?.handle()
  }
  bot.launch();
}

init();

