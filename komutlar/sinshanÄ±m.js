const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://i.hizliresim.com/uryZil.jpg",
          color: 0xD97634,
		  description: "Ula kissa hanım seviliyorsun <3"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sinshanım',
  description: 'kedileri gösterir.',
  usage: 'sinshanım'
};
