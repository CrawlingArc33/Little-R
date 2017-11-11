const config = require("../config.json");

module.exports.run = (bot, message, args) => {
  var msgArray = [];
  msgArray.push(`Hello, I'm ${bot.user.username}, a Discord bot.`);
  msgArray.push(`I'm currently running on Discord.js version 11.2.1, which utilizes the latest version of Discord.js, an *unofficial* Discord libary by hydrabolt.`);
  msgArray.push(`The developer of my source code is <@140487710727995392>.`);
  msgArray.push(`To see what I can do, use ${config.prefix}help`);
  msgArray.push(`My invocation method is using prefixes, currently, I only respond to messages beginning with ${config.prefix}`);
  message.channel.send(msgArray).then(m => m.delete(15000))
}

module.exports.help = {
  name: "info",
  usage: ``,
  information: "I'll tell you some information about myself."
}

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Info"
}
