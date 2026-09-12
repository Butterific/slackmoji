<img src="assets/bot_pfp.png" width="150" alt="SlackMoji Pfp">

# SlackMoji

A Slack bot designed to help you mess around and have fun with emojis along with other cool things!

## Quick Start
Simple quick start guide to help you setup the bot and get it running!

### Requirements
 - A Slack bot with socket mode enabled and that has the following Bot Token Scopes: `app_mentions:read`, `channels:read`, `chat:write`
 - The following slash commands created on the bot page 
 ```text
/emoji-bot-ping
/emoji-bot-fire
/emoji-bot-cat-fact
/emoji-bot-help
/emoji-bot-convert
/emoji-bot-about
 ```

 - Node.js/NPM

### Prerequisites
Make sure you have a .env with the following set:
```env
SLACK_BOT_TOKEN=your_slack_bot_token
SLACK_APP_TOKEN=your_slack_app_token
```
### Setup
Windows
```powershell
  npm install
  node index.js
```
MacOS/Linux
```bash
  npm install
  node index.js
```
<small>I dont know why I put linux and windows, they are LITERALLY the same thing 🥀</small>

## How it Works
 The bot uses socket mode which means it connects to Slack using a websocket. When a user sends a /command, it sends a request to the server side with the code where it processes and sends a response.
  - The bot uses the `profanease` library for the moderation to filter bad words when using the `/emoji-bot-convert` command.
  - The bot uses the `axios` library for web requests for the `/emoji-bot-cat-fact` command. 



## Commands
The bot currently features `6` commands:
 - `/emoji-bot-ping` - Checks the bots latency
 - `/emoji-bot-cat-fact` - Get a cat fact from the `https://catfact.ninja/fact` api
 - `/emoji-bot-fire` - Replies a single '🔥' emoji (joke command)
 - `/emoji-bot-help` - Shows the help message
 - `/emoji-bot-convert` - Returns the provided text in emoji form
 - `/emoji-bot-about` - Displays info about the bot

 ## Credits
  - Special thanks to [this](https://www.reddit.com/r/copypasta/comments/1cf5dg7/emoji_alphabet_emojis_that_look_like_or_contain/) reddit post for the Emoji substitution list
  - Special thanks to the [Profanease](https://www.npmjs.com/package/profanease) library for the moderation features 


# This bot was made for HackClub Stardance 2026
![Stardance logo](assets/stardance.avif)