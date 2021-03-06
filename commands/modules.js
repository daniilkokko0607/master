const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  try {
    let output = '';
    Object.keys(require('../package').dependencies).forEach((pack) => output += pack + ', ');
    
	let finaloutput = output.split("...")

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(":floppy_disk: Список модулей:")
	.setDescription(finaloutput)
    .setFooter(Object.keys(require('../package').dependencies).length + " modules")
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
    name: "modules",
    description: "Возвращает список зависимостей, которые я использую",
    usage: "modules",
    type: "Utility" 
}
