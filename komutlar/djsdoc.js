const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
  const msg = args.slice(0).join(" ")
  if(!msg) return message.channel.send("Lütfen bir yazı girin")
const Data = await r.DiscordJSDocs({ Query: msg, Color: c });
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['djsdoc'],
  permlevel: 0
}
exports.help = {
  name: 'djs-documents',
  category: '',
  description: '',
  usage: ''
}