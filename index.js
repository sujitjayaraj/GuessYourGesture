const dotenv = require("dotenv");
const { Client, Intents } = require("discord.js");

dotenv.config();

const client = new Client({intents: Intents.FLAGS.GUILDS});

client.once("ready", (client) => {
	console.log(`Succesfully logged into Discord as ${client.user.tag}`);
});

// eslint-disable-next-line no-undef
client.login(process.env.DISCORD_TOKEN);