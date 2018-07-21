const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("[ggg] Yeniden başlatılıyor !").then(msg => {
        console.log("Yeniden Başlatılıyor!");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['yeniden'], //farklı çağrılar ekledik
  permLevel: 4 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'reboot', //adını belirledik (kullanmak için gereken komut)
  description: 'SADECE FANIMATOR TR KULLANIR', //açıklaması
  usage: 'reboot' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz