var commando = require("discord.js-commando");
var yourbot = new commando.Client();

yourbot.login('V37iVo1yxxENk5nJ1HLyN6PIf9DkKToB');

yourbot.registry.registerGroup('other', 'Other');
yourbot.registry.registerCommandsIn(__dirname + "/commands")
yourbot.registry.registerDefaults();
