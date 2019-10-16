const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


var Discord = require('discord.js');
var client = new Discord.Client();
client.on('guildMemberAdd',member=>{
let ch = member.guild.channels.get('634011315303874572');
if(ch) return ch.send(`${member} Welcome **To** \`our\` Server ${member.guild.name}`)})

client.login(process.env.BOT_TOKEN);