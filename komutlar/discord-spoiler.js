const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
  const msg = args.slice(0).join(" ")
  if(!msg) return message.channel.send("Lütfen bir yazı girin")
const Data = await r.DiscordSpoiler({ Message: msg, Color: c });
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['dspoiler'],
  permlevel: 0
}
exports.help = {
  name: 'discord-spoiler',
  category: '',
  description: '',
  usage: ''
}