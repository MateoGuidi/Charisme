const {EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require("discord.js")
const { CharismeColor, Footer } = require('../../assets/utils.js')
//On charge les bibliotèque nécéssaires
const frmessages = ["est inexistant 😑",
    "est un peu visible 😔",
    "est colossal 🤩",
    "est en voie de disparition 🔎",
    "est tout ce qui est de plus simple et basique 👌",
    "est négatif 😐"]
//On précise les phrases disponibles
module.exports = {
    name: "charisme",
    description: "🎮 Permet de connaitre ton taux ton charisme",
    timeout: 2000,
    run: async (interaction, client) => {
        //On génère une phrase aléatoire
        let randomMessage = frmessages[Math.floor(Math.random() * frmessages.length)];
        //Création de l'Embed
        const embed = new EmbedBuilder()
            .setColor(CharismeColor)
            .setDescription("Le charisme de " + `**${interaction.user.username}** ${randomMessage}`)
            .setFooter({ text: Footer });
        //Création du bouton pour recharger une nouvelle phrase
        const another = new ButtonBuilder()
            .setLabel("Un autre")
            .setStyle(ButtonStyle.Primary)
            .setCustomId('another')
        //Réponse avec l'Embed et les boutons
        const buttonRow = new ActionRowBuilder().addComponents(another);
        console.log(`${interaction.user.tag} used /charisme`);
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
                embed.setDescription("Le charisme de " + `**${interaction.user.username}** ${randomMessage}`)
                //On actualise l'Embed
                await interaction.update({ embeds: [embed] })
            }
        });
    }
}