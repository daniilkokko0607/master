const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {  
    if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "Вы можете использовать эту команду в канале NSFW!"
            }})
	}

    superagent.get('https://nekos.life/api/v2/img/futanari')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setTitle(":smirk: Фута")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: фута`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                title: "Что-то пошло не так... :cry:"
            }}));

}

module.exports.help = {
    name: "futa",
    description: "Отображение случайного изображения/gif-изображения Futa",
    usage: "futa",
    type: "NSFW" 
} 