const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
    .setDescription("**Sunucu Iconu**")
    .setImage(message.guild.iconURL)

   message.channel.send(embed); 

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['server-icon','sunucu-iconu'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'guild-icon', //adını belirledik (kullanmak için gereken komut)
  description: 'Sunucunun iconunu gösterir', //açıklaması
  usage: 'guild-icon' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz