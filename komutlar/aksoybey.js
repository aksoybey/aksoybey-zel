const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('**TEŞKİLAT-I AKSOYBEY EFSANESİ** :heart:');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aksoybey'],
  permLevel: 0
};

exports.help = {
  name: 'aksoybey',
  description: 'efsaneyi gösterir.',
  usage: 'aksoybey'
};
