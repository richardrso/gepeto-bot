# Discord Bot for Chatting with Text-Davinci-003 Model

This Discord bot is implemented in JavaScript and uses the Completions API to enable chat conversations with the Text-Davinci-003 model. Additionally, the Moderations API is utilized for message filtering.

## Features

- Chat with the Text-Davinci-003 model using natural language prompts.
- Filter messages using the Moderations API to prevent inappropriate content.
- Easy to use and customize for your specific needs.


## Installation
Install the required dependencies using the following commands:

```bash
npm npm init -y
```
```bash
npm i discord.js dotenv openai
```
Create a .env file in the root directory of the project and add the following variables:
```.env
DISCORD_BOT_TOKEN=your-bot-token-here
OPENAI_API_KEY=your-openai-api-key-here
```
Start the bot using the following command:
```bash
node index.js
```

## Contributing

If you would like to contribute to this project, please follow these steps:

Fork this repository to your own account.
Create a new branch for your feature or bug fix.
Make your changes and commit them to your branch.
Create a pull request to merge your changes back into the main repository.