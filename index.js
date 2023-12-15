const config = require("./config.json")
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js")
const fs = require("node:fs");
const path = require("node:path");


const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

commandFiles.forEach(file => {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    client.commands.set(command.data.name, command)
    console.log(filePath)
});

client.once(Events.ClientReady, client =>{
    console.log("Ready")
});

client.login(config.token);