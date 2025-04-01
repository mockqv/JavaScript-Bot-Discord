const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Return a user's profile photo"),

    async execute(interaction) {
        const avatarUrl = interaction.user.displayAvatarURL({ dynamic: true, size: 512 });
        await interaction.reply(avatarUrl);
    }
};