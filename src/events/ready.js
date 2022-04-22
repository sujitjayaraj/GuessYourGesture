module.exports = function(client){
	console.log(`Succesfully logged into Discord as ${client.user.tag}`);

	//Registering all slash commands
	client.application.commands.set(this.commands.map(x => x.info));
	console.log("Registered all slash commands on Discord");

	client.user.setActivity("for a gesture", {type: "WATCHING"});
};