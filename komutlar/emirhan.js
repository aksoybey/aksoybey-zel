const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(':heart: **TABUTCU EFSANESİ** ')
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emirhan'],
  permLevel: 0
};

exports.help = {
  name: 'emirhan',
  description: 'emoyu Gösterir.',
  usage: 'emirhan'
};
