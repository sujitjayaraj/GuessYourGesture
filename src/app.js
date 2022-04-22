const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");

class GuessYourGesture{
	constructor(){
		this.client = new Client({intents: Intents.FLAGS.GUILDS});
		this.commands = new Collection();
	}
	launch(){
		this.loadEvents();
		this.loadCommands();
		// eslint-disable-next-line no-undef
		this.client.login(process.env.DISCORD_TOKEN);
	}
	loadEvents(){
		// eslint-disable-next-line no-undef
		const eventFiles = fs.readdirSync(__dirname + "/events").filter(file => file.endsWith(".js"));
		for (const file of eventFiles){
			const event = require(`./events/${file}`);
			const eventName = event.name || file.split(".")[0];
			if(eventName == "ready"){
				this.client.once("ready", event.bind(this));
			}
			else{
				this.client.on(eventName, event.bind(this));
			}
			delete require.cache[require.resolve(`./events/${file}`)];
		}
		console.log("All Discord event files have been loaded");
	}
	loadCommands(){
		// eslint-disable-next-line no-undef
		const categories = fs.readdirSync(__dirname + "/commands");
		for(const category of categories){
			// eslint-disable-next-line no-undef
			let commandFiles = fs.readdirSync(__dirname + `/commands/${category}`).filter(file => file.endsWith(".js"));
			for(const file of commandFiles){
				const command = require(`./commands/${category}/${file}`);
				command.name = file.split(".")[0];
				command.category = category;
				this.commands.set(command.name, command);
			}
		}
		console.log("All slash command files have been loaded");
	}
}

module.exports = GuessYourGesture;