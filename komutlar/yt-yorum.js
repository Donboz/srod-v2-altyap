const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
const msg = args[0]
  if(!msg) return message.channel.send("ad girin")
  const msg1 = args.slice(1).join(" ")
  if(!msg1) return message.channel.send("Lütfen bir yazı girin")
  const Data = await r.YoutubeComment({ Name: msg,age: message.author.displayAvatarURL, Comment: msg1,Color: c});
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['yt-yorum'],
  permlevel: 0
}
exports.help = {
  name: 'yt-yorum',
  category: '',
  description: '',
  usage: ''
}