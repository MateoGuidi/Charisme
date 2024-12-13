const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { CharismeColor, Footer } = require('../../assets/utils.js')
//On charge les bibliotèque nécéssaires
module.exports = {
    name: "cdocumentation",
    description: "🔧 Le lien vers le doc de l'histoire de ce bot",
    timeout: 2000,
    run: async (interaction, client) => {
        //Création de l'Embed
        const embed = new EmbedBuilder()
            .setColor(CharismeColor)
            .setTitle("🖱️ Clique pour être redirigé(e) vers la documentation du bot :")
            .setDescription("https://bit.ly/DocumentationCharisme")
            .setFooter({ text: Footer });
        //Création du bouton vers la documentation
        var row = new ActionRowBuilder()
                .addComponents(new ButtonBuilder()
                    .setLabel("Documentation")
                    .setStyle("Link")
                    .setEmoji("📖")
                    .setURL("https://bit.ly/DocumentationCharisme")
                );    
        //Réponse avec l'Embed avec le bouton            
        console.log(`${interaction.user.tag} used /cdocumentation`);                        
        return interaction.reply({ embeds: [embed], components: [row]})
    }
}
