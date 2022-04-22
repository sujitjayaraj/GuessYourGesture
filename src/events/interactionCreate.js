module.exports = async function(interaction){
	const command = this.commands.get(interaction.commandName);
	try{
		await command.execute(this, interaction);
	}
	catch(err){
		console.error(err);
	}
};