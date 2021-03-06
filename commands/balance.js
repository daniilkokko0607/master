const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**${user}'s Баланс**\n\nНа руках: ${bal}\nВ Банке: ${bank}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
    name: "balance",
    description: "Отображение баланса вашего или указанного пользователя",
    usage: "balance <mention>",
    type: "Economy"  
}
