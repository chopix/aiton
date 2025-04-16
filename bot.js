import {Bot} from 'grammy'
import 'dotenv/config'

const magicButton = (keyboard) =>
  new keyboard().webApp('💫 Tap!', APP_BASE_URL + 'index.html');

const bot = new Bot(process.env.TOKEN);

// bot.command("start", async (ctx) => {
//     const params = ctx.message.text.split(' ')[1]
//     if(params) {
//         await axios.
//     }
// });


bot.on("message:text", (ctx) => {
    ctx.reply("Open the Web App:", {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Open App",
                    web_app: { url: "https://aiton.bot" }
                }]
            ]
        }
    });
});

bot.start();