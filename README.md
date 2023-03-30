# Discord Bot for Chatting with Text-Davinci-003 Model

This Discord bot is implemented in JavaScript and uses the Completions API to enable chat conversations with the Text-Davinci-003 model. Additionally, the Moderations API is utilized for message filtering.

## Features

- Chat with the Text-Davinci-003 model using natural language prompts.
- Filter messages using the Moderations API to prevent inappropriate content.
- Easy to use and customize for your specific needs.

## Create a Discord application through the Discord Developer Portal
1. Go to the Discord Developer Portal website and log in using your Discord account credentials.

2. Click on the "New Application" button located on the top right corner of the dashboard.

3. Enter a name for your application and click on the "Create" button.

4. On the left-hand side of the dashboard, click on the "Bot" tab, and then click on the "Add Bot" button.

5. Enter a name for your bot and click on the "Create" button.

6. Under the "Bot" tab, you can customize the bot's avatar, username, and other settings.

7. On the left-hand side of the dashboard, click on the "OAuth2" tab.

8. Under the "OAuth2" tab, select the "bot" scope and then select the permissions you want your bot to have.

9. Copy the generated URL and paste it into your web browser. This will allow you to invite your bot to your Discord server.

10. Once your bot has been added to your server, you can start coding and implementing its functionality.


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