const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
  const a = message.mentions.users.first() 
  if(!a) return message.channel.send("Birini etiketle")
const Data = await r.WhoWouldWin({ Image: message.author.displayAvatarURL, Image2: a.displayAvatarURL, Color: c });
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kimkazanacak'],
  permlevel: 0
}
exports.help = {
  name: 'kimkazanacak',
  category: '',
  description: '',
  usage: ''
}