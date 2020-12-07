const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "**LONCADAKİ AJANA SESLENİYORUM ANANI GÖTTEN SİKEYİMMM. ! **"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ajan',
  description: 'kedileri gösterir.',
  usage: 'ajan'
};
