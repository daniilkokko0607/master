const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
            color: 16734039,
            description: "У вас нет прав на проверку предупреждений участников!"
        }})

let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send({embed: {
            color: 16734039,
            description: "Не могу найти пользователя!"
        }})
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  let warnlevel = warns[wUser.id].warns
  
  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warns")
  .setColor("#FFB500")
  .addField("Количество " + `<@${wUser.id}>` + " предупреждений:", `${warnlevel}`)
  .setTimestamp()
  message.channel.send(warnEmbed);
  
  

}

module.exports.help = {
    name: "warns",
    description: "Показать количество предупреждений",
    usage: "warns <user>",
    type: "Moderation"
}