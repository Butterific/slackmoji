require("dotenv").config();
// import webrequest api
const axios = require("axios");

const { App } = require("@slack/bolt");
// slack confg
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
// returns the bot latency
app.command("/emoji-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});
// returns the fire emoji
app.command("/emoji-bot-fire", async ({ ack, respond }) => {
  await ack();
  // respond with the fire emoji
  await respond({text: ":fire:"})
});
// returns a random cat fact
app.command("/emoji-bot-cat-fact", async ({ ack, respond }) => {
  await ack();

  try {
    // make a request to this cat fact api
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
// returns info about each command
app.command("/emoji-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/emoji-bot-ping - Check bot latency
/emoji-bot-catfact - Get a cat fact
/emoji-bot-fire - Show a fire emoji
/emoji-bot-help - Show this help message
/emoji-bot-covert - Returns the text in emoji form
/emoji-bot-about - Displays info about the bot`
  });
});
// the main command, convert text to emoji strings
app.command("/emoji-bot-convert", async ({ command, ack, respond }) => {
  await ack();
  // recive text from the user
  const text1 = command.text;
  // lowercase it
  const text = text1.toLocaleLowerCase();
  // refuse to work if no text is provided
  if (!text) {
    await respond({ text: "please provide text to convert to an emoji string!" });
    return;
  }
  // rejcet illegal text
  if (checkillegaltext(text)) {
    await respond({ text: "text contains illegal characters, pls only use a-z and 0-9" });
  } else {
    // typecast the new string togerther with the map for the emojis
    const newtext = text.split("").map(converttextoemoji).join(" ");
    await respond({ text: "Result: " + newtext})
  }
});

// function to check for illegle chracters so it dosent break
function checkillegaltext(text) {
  // regex to only allow a-z A-Z 0-9 and space
  const regex = /[^a-zA-Z0-9 ]/;
  return regex.test(text);
}

// convert a text character into an emoji
function converttextoemoji(text) {
  // matching emoji for each char
  const emojimap = {
    a: "🅰️",
    b: "🅱️",
    c: "©️",
    d: "🐬",
    e: "📧",
    f: "🎏",
    g: "⛽",
    h: "♓",
    i: "ℹ️",
    j: "🎷",
    k: "🎋",
    l: "🦁",
    m: "Ⓜ️",
    n: "🎶",
    o: "🅾️",
    p: "🅿️",
    q: "🍳",
    r: "®️",
    s: "💲",
    t: "🌴",
    u: "⛎",
    v: "✅",
    w: "〰️",
    x: "❌",
    y: "🍸",
    z: "⚡",
    0: "0️⃣",
    1: "1️⃣",
    2: "2️⃣",
    3: "3️⃣",
    4: "4️⃣",
    5: "5️⃣",
    6: "6️⃣",
    7: "7️⃣",
    8: "8️⃣",
    9: "9️⃣",
    " ": " ",
    // emoji list taken from https://www.reddit.com/r/copypasta/comments/1cf5dg7/emoji_alphabet_emojis_that_look_like_or_contain/
  };
  return emojimap[text] || text; // added a fall back just incase smth goes wrong
};
app.command("/emoji-bot-about", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Emoji Bot v1.0
🔥🔥🔥🔥🔥🔥🔥
This bot is a simple
project created by butterlabs
for Hackclub stardance 2026
https://github.com/Butterific`

  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();