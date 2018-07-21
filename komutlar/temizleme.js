const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const sayi = args.slice(0).join(' ');
    
    if(sayi.length < 1) {
        return message.reply("Ne kadar mesaj silmeliyim? Lütfen bunu belirt.")
    } else {
        message.channel.bulkDelete(sayi + 1);
    message.channel.send("**" + sayi + "** adet mesaj sildim koçum").then(msg => {
        msg.delete("5000")
    });

    }
    

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['clear'], //farklı çağrılar ekledik
  permLevel: 2 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'temizle', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirli bir miktarda mesaj siler bro', //açıklaması
  usage: 'temizle <miktar>' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz