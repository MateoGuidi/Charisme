const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require("discord.js");
const { CharismeColor, Footer } = require('../../assets/utils.js');
//On charge les bibliotèque nécéssaires
module.exports = {
    name: "chelp",
    description: "🔧 Permet de connaître toutes les commandes de ce bot",
    timeout: 2000,
    options: [
        {
            name: 'catégorie',
            description: 'Choisis la catégorie voulu',
            type: 3,
            required: true,
            choices: [
                { name: "Tout", value: "tout" },
                { name: "Fun", value: "fun" },
                { name: "Utilitaire", value: "utilitaire" }
            ]
        }
    ],
    run: async (interaction, client) => {
        const catégorie = interaction.options.getString("catégorie");
        let title;
        let description;
        // On adapte le titre et la description selon la catégorie
        switch (catégorie) {
            case "tout":
                title = "**Voici toutes mes commandes disponibles :**";
                description = "**🎮 Fun :**\n\n**`/blague`** - Permet de se taper des barres\n**`/qi`** - Permet de connaitre son qi\n**`/compatibilité`** - Permet de connaitre ta compatibilité avec quelqu'un\n**`/randomgame`** - Permet de choisir un jeu aléatoirement\n**`/charisme`** - Permet de connaitre ton taux de charisme\n\n**🔧 Utilitaire :**\n\n**`/chelp`** - Permet de connaître toutes les commandes de ce bot\n**`/ctest`** - Permet de savoir si le bot est en fonctionnement\n**`/cuserinfo`** - Permet de savoir des infos sur un utilisateur\n**`/cbotinfo`** - Permet de savoir des infos sur le bot\n**`/cdocumentation`** - Le lien vers le doc de l'histoire de ce bot\n\n**Merci de m'utiliser**.";
                break;
            case "fun":
                title = "**🎮 Voici toutes mes commandes Fun :**";
                description = "\n**`/blague`** - Permet de se taper des barres\n**`/qi`** - Permet de connaitre son qi\n**`/compatibilité`** - Permet de connaitre ta compatibilité avec quelqu'un\n**`/randomgame`** - Permet de choisir un jeu aléatoirement\n**`/charisme`** - Permet de connaitre ton taux de charisme\n\n**Merci de m'utiliser**.";
                break;
            case "utilitaire":
                title = "**🔧 Voici toutes mes commandes Utilitaire :**";
                description = "\n**`/chelp`** - Permet de connaître toutes les commandes de ce bot\n**`/ctest`** - Permet de savoir si le bot est en fonctionnement\n**`/cuserinfo`** - Permet de savoir des infos sur un utilisateur\n**`/cbotinfo`** - Permet de savoir des infos sur le bot\n**`/cdocumentation`** - Le lien vers le doc de l'histoire de ce bot\n\n**Merci de m'utiliser**.";
                break;
        }
        // Création de l'embed
        let finalembed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setColor(CharismeColor)
            .setFooter({ text: Footer });
        //Création de tous les boutons
        const allButton = new ButtonBuilder()
            .setLabel("Tout")
            .setStyle(ButtonStyle.Secondary)
            .setCustomId('all');
        const funButton = new ButtonBuilder()
            .setLabel("Fun")
            .setStyle(ButtonStyle.Secondary)
            .setCustomId('fun');
        const utilsButton = new ButtonBuilder()
            .setLabel("Utilitaire")
            .setStyle(ButtonStyle.Secondary)
            .setCustomId('utils');

        // On change la couleur des boutons selon catégorie choisie
        switch (catégorie) {
            case "tout":
                allButton.setStyle(ButtonStyle.Primary);
                break;
            case "fun":
                funButton.setStyle(ButtonStyle.Primary);
                break;
            case "utilitaire":
                utilsButton.setStyle(ButtonStyle.Primary);
                break;
        }

        // Création de la rangée de boutons et envoi de la réponse
        const buttonRow = new ActionRowBuilder().addComponents(allButton, funButton, utilsButton);
        console.log(`${interaction.user.tag} used /chelp (${catégorie})`);
        const reponse = await interaction.reply({ embeds: [finalembed], components: [buttonRow] });

        //Création du collector
        const collector = reponse.createMessageComponentCollector({
            componentType: ComponentType.Button,
        });

        collector.on('collect', async (interaction) => {
            // On met tous les boutons en gris
            const allButtons = [allButton, funButton, utilsButton];
            allButtons.forEach(btn => btn.setStyle(ButtonStyle.Secondary));

            // On met le bouton cliqué en bleu
            switch (interaction.customId) {
                case 'all':
                    allButton.setStyle(ButtonStyle.Primary);
                    finalembed.setTitle("**Voici toutes mes commandes disponibles :**");
                    finalembed.setDescription("**🎮 Fun :**\n\n**`/blague`** - Permet de se taper des barres\n**`/qi`** - Permet de connaitre son qi\n**`/compatibilité`** - Permet de connaitre ta compatibilité avec quelqu'un\n**`/randomgame`** - Permet de choisir un jeu aléatoirement\n**`/charisme`** - Permet de connaitre ton taux de charisme\n\n**🔧 Utilitaire :**\n\n**`/chelp`** - Permet de connaître toutes les commandes de ce bot\n**`/ctest`** - Permet de savoir si le bot est en fonctionnement\n**`/cuserinfo`** - Permet de savoir des infos sur un utilisateur\n**`/cbotinfo`** - Permet de savoir des infos sur le bot\n**`/cdocumentation`** - Le lien vers le doc de l'histoire de ce bot\n\n**Merci de m'utiliser**.");
                    break;
                case 'fun':
                    funButton.setStyle(ButtonStyle.Primary);
                    finalembed.setTitle("**🎮 Voici toutes mes commandes Fun :**");
                    finalembed.setDescription("\n**`/blague`** - Permet de se taper des barres\n**`/qi`** - Permet de connaitre son qi\n**`/compatibilité`** - Permet de connaitre ta compatibilité avec quelqu'un\n**`/randomgame`** - Permet de choisir un jeu aléatoirement\n**`/charisme`** - Permet de connaitre ton taux de charisme\n\n**Merci de m'utiliser**.");
                    break;
                case 'utils':
                    utilsButton.setStyle(ButtonStyle.Primary);
                    finalembed.setTitle("**🔧 Voici toutes mes commandes Utilitaire :**");
                    finalembed.setDescription("\n**`/chelp`** - Permet de connaître toutes les commandes de ce bot\n**`/ctest`** - Permet de savoir si le bot est en fonctionnement\n**`/cuserinfo`** - Permet de savoir des infos sur un utilisateur\n**`/cbotinfo`** - Permet de savoir des infos sur le bot\n**`/cdocumentation`** - Le lien vers le doc de l'histoire de ce bot\n\n**Merci de m'utiliser**.");
                    break;
            }

            await interaction.update({ embeds: [finalembed], components: [buttonRow] });
        });
    }
};