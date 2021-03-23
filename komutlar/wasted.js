const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
  const a = message.mentions.users.first() || message.author
const Data = await r.Wasted({ Image: a.displayAvatarURL, Color: c });
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['wasted'],
  permlevel: 0
}
exports.help = {
  name: 'wasted',
  category: '',
  description: '',
  usage: ''
}