const Discord = require('discord.js');
const superagent = require("superagent");
const Client = new Discord.Client();
const OwnerID = "130515926117253122";

const prefix = "gt!"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `gt!help`, type: 0} });
});

// welcome message

Client.on("guildCreate", guild => {
	console.log("Some one added the GameTalker bot to a server created by: " + guild.owner.user.username)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "say") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("!help", "Will give the current command list")
		.addField("!ping", "WIll show the ping time for the bot")
		.addField("!say [text]", "Will make the bot say something")
		.addField("!announcement [text]", "Will make the bot say an announcement and tag everyone")
		message.channel.send({embed})
	}

});

Client.login("NDQ0Mzk0NjIzNDE5NTQ3NjQ4.DdbSXw.wqyIzaceckBW4d-8RsVRpMayD74");