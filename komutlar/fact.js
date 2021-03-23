const Discord = require("discord.js")
const r = require("srod-v2")
const c = "RANDOM"


exports.run = async (client, message, args) => {
const Data = await r.GetFact({Color: c});
return message.channel.send(Data);
    }
                                                                                                                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['fact'],
  permlevel: 0
}
exports.help = {
  name: 'fact',
  category: '',
  description: '',
  usage: ''
}