const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('**Rakipsiz71 EFSANESİ** :heart:');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eren'],
  permLevel: 0
};

exports.help = {
  name: 'tugra',
  description: 'tugra gösterir.',
  usage: 'tugra'
};
