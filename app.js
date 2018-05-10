const Discord = require('discord.js');
const superagent = require("superagent");
const Client = new Discord.Client();
const OwnerID = "309081957604786176";

const prefix = "+"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ stream: { name: `+help`, type: 0} });
});

// welcome message

bot.on(`guildMemberAdd`, async member => {
  console.log(`${member.id} has joined the server!`);
  let welcomechannel = member.guild.channels.find(`name`, "welcome_leave");
  welcomechannel.send(`Wow, ${member} has joined the server!!! `);
});

bot.on(`guildMemberRemove`, async member => {
  console.log(`${member.id} has left the server!`);
  let welcomechannel = member.guild.channels.find(`name`, "welcome_leave");
  welcomechannel.send(`Sad story, ${member} has left the server.`);
});

Client.on("guildCreate", guild => {
	console.log("Some one added the test bot to a server created by: " + guild.owner.user.username)
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

   if (command === "cat") {
	   const { body } = await superagent
	   .get('aws.random.cat/meow');
	   const embed = new Discord.RichEmbed()
	   .setColor(0x954D23)
	   .setTitle("Meow :cat:")
	   .setImage(body.file)
	   message.channel.send({embed})
   } else

   if (command === "announcement") {
	   if (message.member.hasPermission("ADMINISTRATOR")) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("0x" + color)
		   .setTitle("Important Announcement:")
		   .setDescription(text);
		   message.channel.send("@everyone")
		   message.channel.send({embed})
	   }
   } else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("+help", "Will give the current command list")
		.addField("+ping", "WIll show the ping time for the bot")
		.addField("+say [text]", "Will make the bot say something")
		.addField("+announcement [text]", "Will make the bot say an announcement and tag everyone")
		.addField("+cat", "Will send a random cat image");
		message.channel.send({embed})
	}

});

Client.login("NDQyNzQ0MjIzMjAxMDk5Nzc3.DdY1wg.EC7ot5iy73hPObgNW8AiJuU1kHg"); //replace with your token dont share yours.
