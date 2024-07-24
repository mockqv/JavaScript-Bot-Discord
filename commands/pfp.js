const { SlashCommandBuilder } = require("discord.js")
let avatarUrl = user.displayAvatarURL()



module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Return a user's profile photo"),

    async execute(interaction){
        await interaction.reply(avatarUrl)
    }
}