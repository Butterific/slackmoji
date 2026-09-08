require("dotenv").config();
const axios = require("axios");

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/emoji-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});
app.command("/emoji-bot-fire", async ({ ack, respond }) => {
  await ack();
  await respond({text: ":fire:"})
});
app.command("/emoji-bot-cat-fact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/emoji-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/emoji-bot-ping - Check bot latency
/emoji-bot-catfact - Get a cat fact
/emoji-bot-fire - Show a fire emoji
/emoji-bot-help - Show this help message`
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();