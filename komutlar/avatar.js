const Discord = require('discord.js');


exports.run = function(client, message) {

  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setImage(message.author.avatarURL)

   message.channel.send(embed); 
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['avatarım', 'resmim'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'avatar', //adını belirledik (kullanmak için gereken komut)
  description: 'Avatarınızı gösterir', //açıklaması
  usage: 'avatar' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz