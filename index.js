const { Client, Events, GatewayIntentBits } = require("discord.js");
require("dotenv/config");
const { OpenAIApi, Configuration } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(config);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (clientUser) => {
    console.log(`Logged in as ${clientUser.user.tag}`);
  });

  client.login(process.env.BOT_TOKEN);

const BOT_CHANNEL = "1089628711348867122";
const PAST_MESSAGES = 5;
const COOLDOWN_PERIOD = 0; // 30 seconds
const cooldowns = new Map();

client.on(Events.MessageCreate, async (message) => {
  try {
    if (message.author.bot) return;
    if (message.channel.id !== BOT_CHANNEL) return;

    console.log(`Received message: "${message.content}" from ${message.member.displayName}`);

        // Check cooldown
        const now = Date.now();
        const cooldownKey = `${message.guild.id}-${message.author.id}`;
        const cooldown = cooldowns.get(cooldownKey) || 0;
        if (now < cooldown) {
          const remainingTime = (cooldown - now) / 1000;
          console.log(`User ${message.member.displayName} is on cooldown for ${remainingTime.toFixed(1)} seconds.`);
          await message.channel.send(
            `Please wait ${remainingTime.toFixed(1)} seconds before using the bot again.`
          );
          return;
        }
    
        // Update cooldown
        cooldowns.set(cooldownKey, now + COOLDOWN_PERIOD);
    
        message.channel.sendTyping();
    
        let messages = Array.from(
          await message.channel.messages.fetch({
            limit: PAST_MESSAGES,
            before: message.id,
          })
        );
        messages = messages.map((m) => m[1]);
        messages = messages.concat([message]);
    
        let users = [
          ...new Set([
            ...messages.map((m) => m.member.displayName),
            client.user.username,
          ]),
        ];
        
    let lastUser = users.pop();

    let prompt = `The following is a conversation between ${users.join(
      ", "
    )}, and ${lastUser}. \n\n`;

    for (let i = messages.length - 1; i >= 0; i--) {
      const m = messages[i];
      prompt += `${m.member.displayName}: ${m.content}\n`;
    }
    prompt += `${client.user.username}:`;
    console.log("Prompt:", prompt);

    const response = await openai.createCompletion({
      prompt,
      model: "text-davinci-003",
      max_tokens: 500,
      stop: ["\n"],
    });

    const botResponse = response.data.choices[0].text;
    console.log(`Responding with: "${botResponse}"`);
    await message.channel.send(botResponse);
  } catch (error) {
    console.error("Error processing message:", error);
    await message.channel.send(
      "An error occurred while processing your message. Please try again later."
    );
  }
});