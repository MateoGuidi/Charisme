const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require("discord.js")
const {CharismeColor, Footer} = require('../../assets/utils.js')
const BlaguesAPI = require("blagues-api");
const blagues = new BlaguesAPI(process.env.blagues);
//On charge les bibliotèque nécéssaires
module.exports = {
    name: "blague",
    description: "🎮 Permet de se taper des barres",
    timeout: 2000,
    run: async (interaction, client) => {
        //Création du début de l'Embed
        const embedbl = new EmbedBuilder()
            .setColor(CharismeColor)
            .setFooter({ text: Footer });
        //Début de la récupération avec l'API
        try {
            //Récupération des données d'une blague
            const data = await blagues.random({
                disallow: [
                  blagues.categories.DARK,
                  blagues.categories.LIMIT
                ]
              });
            //Finition de l'Embed avec la blague récupéré
            embedbl.setDescription(`${data.joke}\n\n🎉 ${data.answer} 🎉`);
            //Création du bouton pour recharger une nouvelle blague
            const another = new ButtonBuilder()
                .setLabel("Une autre blague")
                .setStyle(ButtonStyle.Primary)
                .setCustomId('another');
            //Réponse avec l'Embed et les boutons
            console.log(`${interaction.user.tag} used /blague`);
            const buttonRow = new ActionRowBuilder().addComponents(another);
            const reponse = await interaction.reply({ embeds: [embedbl], components: [buttonRow] });
            //Création du collector pour récupérer les clics sur les boutons
            const collector = reponse.createMessageComponentCollector({
                componentType: ComponentType.Button,
            });
            collector.on('collect', async (interaction) => {
                //Si quelqu'un clique sur le bouton
                if (interaction.customId === 'another') {
                    //L'API recharge une nouvelle blague
                    const data = await blagues.random({
                        disallow: [
                          blagues.categories.DARK,
                          blagues.categories.LIMIT
                        ]
                      });
                    //On modifie la description de l'Embed avec la nouvelle blague
                    embedbl.setDescription(`${data.joke}\n\n🎉 ${data.answer} 🎉`);
                    //On actualise l'Embed
                    await interaction.update({ embeds: [embedbl] });
                }
            });
        } catch (error) {
            //Si le chargement de l'API ne s'est pas passé comme prévu, un message d'erreur s'affiche
            console.error(error);
            await interaction.reply({ content: "Une erreur s'est produite lors de la récupération de la blague.", ephemeral: true });
        }

    }
}