const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('**PEZEVENK AHMET** :heart:');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ahmet'],
  permLevel: 0
};

exports.help = {
  name: 'ahmet',
  description: 'ahmeti gösterir.',
  usage: 'ahmet'
};
