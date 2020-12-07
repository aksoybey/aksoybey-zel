const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "BEYLERBEYI",
              icon_url: "https://i.hizliresim.com/C7qhuz.png"
            },
			    "thumbnail": {
				 "url": "https://i.hizliresim.com/C7qhuz.png"
			},
            title: "BEYLERBEYİ Bot Nedir ?",
            description: "Loncamızın kolay işlevli bir bottur .",
            fields: [
				{
                name: "Genel Komutlar",
				inline: true,
                value: "g!**Destek**\ng!**Yardim**\ng!**Değişiklikler**\ng!**SunucuBilgi**\ng!**Davet**\ng!**Ailemiz**\n"
			  },
				{
                name: "Mod komutları",
				inline: true,
                value: "g!**Temizle**\ng!**ban**\ng!**duyuruyap**\ng!**uyar**\ng!**kick**\n",
              },
			  {
                name: "Eğlenceli Komutlar",
				inline: true,
                value: "g!**kedi**\ng!**köpek**\ng!**coolresim**\ng!**hastebin**\ng!**köpekadı**\ng!**kediadı**\ng!**twerk**\ng!**sins-aga**\n"
              },
              {
                name: "Kullanıcı Komutları",
				inline: true,
                value: "g!**kullanıcıbilgim**\ng!**avatarım**\ng!**ping**\ng!**altınlarım**\ng!**altın-kontrol**\ng!**madencilik**\n"
              },
              {
                name: "Güncel Sürüm",
                value: "v1.0 BETA"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.hizliresim.com/C7qhuz.png",
              text: "© AKSOYBEY 2020"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardim [komut]'
};
