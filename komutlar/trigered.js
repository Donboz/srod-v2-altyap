const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
const Data = await r.Triggered({ Image: message.author.displayAvatarURL, Color: c });
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['triggered'],
  permlevel: 0
}
exports.help = {
  name: 'triggered',
  category: '',
  description: '',
  usage: ''
}