const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://i.hizliresim.com/rue4iV.png",
          color: 0xD97634,
		  description: ":heart:**Ula Kerim abi Seviliyorsun**:heart:"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kerimbey',
  description: 'kerimbey gösterir.',
  usage: 'kerimbey'
};
