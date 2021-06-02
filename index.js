const Discord = require("discord.js");
const bot = new Discord.client();

bot.login(process.env.token);

bot.on('message', (message) => {
	if (message.content == '!time') {
		var data = new Date();
		var ora = data.getHours();
		var minuto = data.getMinutes();

		message.channel.send(':alarm_clock: ORA SONO LE :' + ora + ':' + minuto);
	}
});