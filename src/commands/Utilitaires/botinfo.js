const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const {c_owner, c_djs, c_github, c_node, c_slash} = require("../../assets/emojis.json")
const { CharismeColor, Footer } = require('../../assets/utils.js')
//On charge les bibliotèque nécéssaires
module.exports = {
    name: "cbotinfo",
    description: "🔧 Permet de connaitre des infos sur le bot",
    timeout: 2000,
    run: async (interaction, client) => {
        //Création de l'Embed
        const embed = new EmbedBuilder()
            .setTitle("Informations Bot :")
            .setColor(CharismeColor)
            .addFields(
                {
                    name: "🙍‍♂️  " + "Créateur", 
                    value: `\`\`\`Matéo GUIDI\`\`\``, 
                    inline: true 
                },
                {
                    name: c_owner + "  Propriété", 
                    value: `\`\`\`Mateo GUIDI©\`\`\``, 
                    inline: true 
                },
                {
                    name: "🤖  Type de bot", 
                    value: `\`\`\`Légendraire\`\`\``, 
                    inline: true
                },
                {
                    name: c_github + " Version du bot", 
                    value: `\`\`\`v1.0.0\`\`\``, 
                    inline: true
                },
                {
                    name: c_djs + "  Version de DiscordJS", 
                    value: `\`\`\`v14.16.3\`\`\``, 
                    inline: true
                },
                {
                    name: c_node + "  Version de NodeJS", 
                    value: `\`\`\`v20.18.1\`\`\``, 
                    inline: true
                },
                {
                    name: c_slash + "  Commandes", 
                    value: `\`\`\`10\`\`\``, 
                    inline: true
                },
                {
                    name: "🌐  " + "  Serveurs", 
                    value: `\`\`\`${client.guilds.cache.size}\`\`\``, 
                    inline: true
                },
                {
                    name: "🗓  Création du compte", 
                    value: `\`\`\`${client.user.createdAt.toDateString()}\`\`\``, 
                    inline: true
                }
            )
            .setFooter({ text: Footer });
        //Création des boutons     
        var row = new ActionRowBuilder()
			.addComponents(new ButtonBuilder()
                .setLabel("Documentation")
                .setStyle("Link")
                .setEmoji("📖")
                .setURL("https://bit.ly/DocumentationCharisme")
            ).addComponents(new ButtonBuilder()
                .setLabel("Github")
                .setStyle("Link")
                .setEmoji(c_github)
                .setURL("https://github.com/mateoguidi/Charisme")
            );
        //Réponse avec l'Embed    
        console.log(`${interaction.user.tag} used /cbotinfo`);
        return interaction.reply({ embeds: [embed], components: [row]})
    }
}