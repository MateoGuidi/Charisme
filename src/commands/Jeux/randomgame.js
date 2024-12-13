const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require("discord.js")
const { CharismeColor, Footer } = require('../../assets/utils.js')
//On charge les bibliotèque nécéssaires
const messages = ["**Rocket League** 🏎 ?", 
                  "**Valorant** 🔫 ?", 
                  "**Minecraft** ⛏ ?", 
                  "**CS-GO** 🔫 ?", 
                  "**GTA V** 🚗 ?", 
                  "**Fortnite** 🔫 ?", 
                  "**KCulture** 🧠  ?", 
                  "**Gartic Phone** ✍️ ?", 
                  "**Skribbl.io** ✍️ ?", 
                  "**Among Us** 🔪 ?", 
                  "**Apex Legends** 🔫  ?",
                  "**League Of Legends** 🚿 ?",
                  "**Apex Legends** 🔫 ?",
                  "**Un jeu Switch** 🕹 ?",]
//On précise les phrases disponibles
module.exports = {
    name: "randomgame",
    description: "🎮 Permet de choisir un jeu aléatoirement",
    timeout: 2000,
    run: async (interaction, client) => {
        //On génère une phrase parmi celles disponibles
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        //Création de l'Embed
        const embedrg = new EmbedBuilder()
            .setColor(CharismeColor)
            .setDescription("Pourquoi pas un " + randomMessage)
            .setFooter({ text: Footer });
        //Création du bouton pour recharger une nouvelle phrase     
        const another = new ButtonBuilder()
            .setLabel("Un autre jeu")
            .setStyle(ButtonStyle.Primary)
            .setCustomId('another')
        //Réponse avec l'Embed et les boutons    
        const buttonRow = new ActionRowBuilder().addComponents(another);                
        console.log(`${interaction.user.tag} used /randomgame`);    
        const reponse = await interaction.reply({ embeds: [embedrg], components: [buttonRow] })
        //Création du collector pour récupérer les clics sur les boutons
        const collector = reponse.createMessageComponentCollector({
            componentType: ComponentType.Button,
        });
        collector.on('collect', async (interaction) => {
            //Si quelqu'un clique sur le bouton
            if (interaction.customId === 'another') {
                //On génère une nouvelle phrase
                const anotherrandomMessage = messages[Math.floor(Math.random() * messages.length)];
                //On modifie la description de l'Embed avec la nouvelle phrase
                embedrg.setDescription("Pourquoi pas un " + anotherrandomMessage)
                //On actualise l'Embed
                await interaction.update({ embeds: [embedrg] })
            }
        });
    }
}