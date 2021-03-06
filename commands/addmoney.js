const Discord = require("discord.js");
const db = require("quick.db");
const prefix = process.env.PREFIX;

module.exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
  let user = message.mentions.members.first();

if (!user) return message.channel.send({embed: {
                    color: 16734039,
                    description: "Вы должны упомянуть кого-то, чтобы добавить деньги!"
                }})
    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "Вы должны ввести сумму денег, которую нужно добавить!"
                }})
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:white_check_mark: Added ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "У вас нет разрешения на добавление денег!"
                }})
	}
}

module.exports.help = {
    name: "addmoney",
    description: "Отдать деньги указанному пользователю",
    usage: "addmoney <user> <money>",
    type: "Economy"  
}