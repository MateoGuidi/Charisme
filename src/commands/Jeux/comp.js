const {Discord, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, Component, ComponentType, InteractionResponse} = require("discord.js")
const { CharismeColor, Footer } = require('../../assets/utils.js')
//On charge les bibliotèque nécéssaires
const frmessages = ["est de 50% 👌", 
                  "est de 150% 😍", 
                  "est de 0% 😐", 
                  "est de 70% 😏", 
                  "est de 300% 🤩",
                  "est de +∞ 🤗",
                  "est de -∞ 😑"]                 
//On précise les phrases disponibles
module.exports = {
    name: "compatibilité",
    description: "🎮 Permet de connaitre ta compatibilité avec quelqu'un",
    timeout: 2000,
    options: [
        { type: 6, name: 'personne', description: 'Mentionne cette personne', required: true },
    ],
    run: async (interaction, client) => {
        //On récupère la personne saisie
        const cible = interaction.options.getUser("personne");
        //On génère une phrase aléatoire
        let randomMessage = frmessages[Math.floor(Math.random() * frmessages.length)];
        //Création de l'Embed
        const embed = new EmbedBuilder()
            .setColor(CharismeColor)
            .setDescription("La compatibilité entre " + `**${interaction.user.username}**` + " et " + `**${cible.username}** ${randomMessage}`)
            .setFooter({ text: Footer });
        //Création du bouton pour recharger une nouvelle phrase
        const another = new ButtonBuilder()
            .setLabel("Un autre")
            .setStyle(ButtonStyle.Primary)
            .setCustomId('another')
        //Réponse avec l'Embed et les boutons
        const buttonRow = new ActionRowBuilder().addComponents(another);         
        console.log(`${interaction.user.tag} used /compatibilité with ${cible.username}`);                 
        const reponse = await interaction.reply({ embeds: [embed], components: [buttonRow]  })
        //Création du collector pour récupérer les clics sur les boutons
        const collector = reponse.createMessageComponentCollector({
            componentType: ComponentType.Button,
        });
        collector.on('collect', async (interaction) => {
            //Si quelqu'un clique sur le bouton
            if (interaction.customId === 'another') {
                //On génère une nouvelle phrase aléatoire
                randomMessage = frmessages[Math.floor(Math.random() * frmessages.length)];
                //On modifie la description de l'Embed avec la nouvelle phrase
                embed.setDescription("La compatibilité entre " + `**${interaction.user.username}**` + " et " + `**${cible.username}** ${randomMessage}`);
                //On actualise l'Embed
                await interaction.update({ embeds: [embed] })
            }
        });
    }
}