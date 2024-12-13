const { EmbedBuilder } = require("discord.js")
const { CharismeColor, Footer } = require('../../assets/utils.js');
//On charge les bibliotèque nécéssaires
module.exports = {
    name: "ctest",
    description: "🔧 Permet de savoir si le bot est en fonctionnement",
    timeout: 2000,
    run: async (interaction, client) => {
        //Création de l'Embed
        console.log(Footer)
        const embed = new EmbedBuilder()
            .setColor(CharismeColor)
            .setDescription("Le bot 'Charisme' est en total fonctionnement ✅")
            .setFooter({ text: Footer });  
        //Réponse avec l'Embed      
        console.log(`${interaction.user.tag} used /ctest`);                
        return interaction.reply({ embeds: [embed] })
    }
}