const Discord = require('discord.js');
exports.run = (client, message, args, level) => {

    let question = args.slice(0).join(" ");
  
    if (args.length === 0)
    return message.reply('**Doğru kullanım:** `g!anket <Question>`')
  
    const embed = new Discord.RichEmbed()
    .setTitle("Anket başladı!")
    .setColor("#5599ff")
    .setDescription(`${question}`)
    .setFooter(`Anketi başlatan kişi: ${message.author.username}`, `${message.author.avatarURL}`)
  
    message.channel.send({embed})
    message.react('👍')
    .then(() => message.react('👎'))
    .then(() => message.react('🤷'))
    .catch(() => console.error('Emoji yüklenemedi.'));
  
  }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'anket',
  description: 'Anket başlatır.',
  usage: 'anket <soru>'
};
