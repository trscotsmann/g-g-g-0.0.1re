
exports.run = function(client, message) {
     message.channel.send("Beni sunucuna ekleyebilirsin^^ İşte linkim https://discordapp.com/oauth2/authorize?client_id=469888382500077568&scope=bot&permissions=2146958591")
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'ekle', 
  description: 'Botu ekleme linki verir',
  usage: 'ekle'
};