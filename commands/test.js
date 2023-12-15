const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("It's a test command :/"),

    async execute(interaction){
        await interaction.reply("Test Successful")
    },
}
