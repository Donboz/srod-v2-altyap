const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
  const msg = args.slice(0).join(" ")
  if(!msg) return message.channel.send("MC Kullanıcı adı girin")
const Data = await r.MCUserID({ UserName: msg, Color: "Color Here" });
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['mcuser'],
  permlevel: 0
}
exports.help = {
  name: 'mcuser',
  category: '',
  description: '',
  usage: ''
}