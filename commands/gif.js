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

    superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle(":smirk: Хентай")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: gif`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                title: "Что-то пошло не так... :cry:"
            }}));
}

module.exports.help = {
    name: "gif",
    description: "Показать случайную хентай-гифку",
    usage: "gif",
    type: "NSFW" 
} 