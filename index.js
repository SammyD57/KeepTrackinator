const config = require("./config.json")
const { Client, Events, GatewayIntentBits } = require("discord.js")

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, client =>{
    console.log("Client Ready")
});

client.login(config.token);