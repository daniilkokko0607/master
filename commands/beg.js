const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

  let user = message.author;

  let timeout = 180000;
  let amount = 5;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor(16734039)
    .setDescription(`Вы уже просили недавно\n\nПрошу снова в ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  Вы просили и получали ${amount} монеты`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
    name: "beg",
    description: "Клянчить деньги",
    usage: "beg",
    type: "Economy"  
}
