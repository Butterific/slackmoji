<img src="assets/bot_pfp.png" width="150" alt="SlackMoji Pfp">

# SlackMoji

A Slack bot designed to help you mess around and have fun with emojis along with other cool things!

## Quick Start
Simple quick start guide to help you setup the bot and get it running!

### Requirements
 - A Slack bot with socket mode enabled and has the following Bot Token Scopes: `app_mentions:read`, `channels:read`, `chat:write`
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
  npm init -y
  npm install
  node index.js
```
MacOS/Linux
```bash
  npm init -y
  npm install
  node index.js
```
<small>I dont know why I put linux and windows, they are LITTERY the same thing 🥀</small>

## How it Works
 The bot uses socket mode which means it connects to Slack using a websocket. When a user sends a /command, it sends a request to the server side with the code where it processes and sends a responce.
 The bot uses the `profanease` library for the moderation. 

## Commands
The bot currently features `6` commands:
 - `/emoji-bot-ping` - Checks the bots latency
 - `/emoji-bot-catfact` - Get a cat fact from the `https://catfact.ninja/fact` api
 - `/emoji-bot-fire` - Replies a single '🔥' emoji (joke command)
 - `/emoji-bot-help` - Shows the help message
 - `/emoji-bot-convert` - Returns the provided text in emoji form
 - `/emoji-bot-about` - Displays info about the bot

