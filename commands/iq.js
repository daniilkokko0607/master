const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
try {

const iq = Math.floor(Math.random() * 226);
const embed = new Discord.RichEmbed()
  .setTitle(":brain: IQ Тест:")
  .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
  .setColor(`RANDOM`)
  .setTimestamp()
message.channel.send(embed);

} catch (err) {
    message.channel.send({embed: {
      color: 16734039,
      description: "Что-то пошло не так... :cry:"
    }})
  }
}

module.exports.help = {
    name: "iq",
    description: "Отображение IQ пользователя",
    usage: "iq",
    type: "Fun"   
}

