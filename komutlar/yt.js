const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Komutlari Gonderdim. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .addField("**Eğlence ve Kullanıcı Komutları:**", `g!banned = Dene ve Gör! \ng!youtube = Youtube kanalımın linkini bulabilir siniz. \ng!website = Web Sitemizin linki bulabilirsiniz. \ng!avatarım = Avatarınınızı Gösterir. \ng!herkesebendençay = Herkese Çay Alırsınız. \ng!koş = Koşarsınız.\ng!çayiç = Çay İçersiniz. \ng!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \ngh!çayaşekerat = Çaya Şeker Atarsınız. \ngh!yumruh-at = Yumruk Atarsınız. \ng!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \ng!sunucuresmi = BOT Sunucunun Resmini Atar. \ng!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \ng!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
    .addField("**Yetkilisi Komutlar**", `g!ban = İstediğiniz Kişiyi Sunucudan Banlar. \ng!kick  = İstediğiniz Kişiyi Sunucudan Atar. \ng!unban = İstediğiniz Kişinin Yasağını Açar. \ng!sustur = İstediğiniz Kişiyi Susturur. \ng!oylama = Oylama Açar. \ng!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
    .addField("**Ana Komutlar**", "g!yardım = BOT Komutlarını Atar. \ng!bilgi = BOT Kendisi Hakkında Bilgi Verir. \ng!ping = BOT Gecikme Süresini Söyler. \ng!davet = BOT Davet Linkini Atar. \ng!istatistik = BOT İstatistiklerini Atar.")
    .addField("**Yapımcı**", " **Mustafa Aksoy** ")
    .setFooter('**--------------------------**')
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'sq',
  description: 'Botun davet linkini gönderir.',
  usage: 'sq'
};
