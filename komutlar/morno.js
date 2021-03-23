const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
    const msg = args[0]
  if(!msg) return message.channel.send("birşey yaz")
    const msg1 = args.slice(1).join(" ")
  if(!msg1) return message.channel.send("Yorum yaz")
const Data = await r.PornhubComment({ Name: msg ,Image: message.author.displayAvatarURL, Comment: msg1, Color: c });
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['mornhub-yorum'],
  permlevel: 0
}
exports.help = {
  name: 'pornhub-yorum',
  category: '',
  description: '',
  usage: ''
}