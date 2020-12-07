const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "**Laskis - Q7 ye itaat edeceksin :heart: KRAL Q7 :heart:.!**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'yavşakahmet',
  description: 'itaat gösterir.',
  usage: 'yavşakahmet'
};
