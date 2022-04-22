const { MessageEmbed } = require("discord.js");
module.exports = {
	info: {
		name: "ping",
		description: "Displays the bot's latency and uptime"
	},
	execute: function(app, interaction){
		const replyEmbed = new MessageEmbed()
			.setTitle("🏓Pong!")
			.setTimestamp(interaction.createdTimestamp)
			.addField("Latency", `${app.client.ws.ping}`, true)
			.addField("Uptime", `<t:${Math.round(app.client.readyTimestamp/1000)}:R>`);
		interaction.reply({embeds: [replyEmbed]});
	}
};