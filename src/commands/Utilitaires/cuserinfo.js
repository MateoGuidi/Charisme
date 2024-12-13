const { Discord, EmbedBuilder } = require("discord.js")
const { CharismeColor, Footer } = require('../../assets/utils.js')
//On charge les bibliotèque nécéssaires
module.exports = {
    name: "cuserinfo",
    description: "🔧 Permet de connaitre des infos sur un utilisateur",
    timeout: 2000,
    options: [
        { type: 6, name: 'utilisateur', description: 'Mentionne cet utilisateur', required: false },
        //L'utilisateur peut préciser un autre utilisateur
    ],
    run: async (interaction, client) => {
        //On récupère l'utilisateur précisé
        const cible = interaction.options.getUser("utilisateur");
        //Si on a précisé un autre utilisateur
        if (cible !== null) {
            //Alors on va regarder cet utilisateur
            member = interaction.options.getUser("utilisateur");
            console.log(`${interaction.user.tag} used /cuserinfo on the user "${member.tag}"`);
        } else {
            //Sinon on va regarder celui qui a éxecuté la commande
            member = interaction.user
            console.log(`${interaction.user.tag} used /cuserinfo on himself`);
        }
        //On vérifie si l'utilisateur est un bot ou non
        if (member.bot === true) {
            bot = "🤖 Bot";
        } else {
            bot = "🙍‍♂️ Humain";
        }
        //Création de l'Embed
        const embed = new EmbedBuilder()
            .setTitle("Informations utilisateur :")
            .setColor(CharismeColor)
            .addFields(
                {
                    name: "#️⃣ Nom d'utilisateur", 
                    value: `${member.tag}`, 
                    inline: false 
                },
                {
                    name: "🆔 Identifiant", 
                    value: `${member.id}`, 
                    inline: false 
                },
            )
            .addFields(
                {
                    name: "❓ Type", 
                    value: `${bot}`, 
                    inline: false
                },
                {
                    name: "🗓 Création du compte", 
                    value: `${member.createdAt.toLocaleString()}`, 
                    inline: false
                }
            )
            .setThumbnail(member.displayAvatarURL({format: 'png', dynamic: 'true', size: 2048}))
            .setFooter({ text: Footer });  
        //Réponse avec l'Embed
        return interaction.reply({ embeds: [embed] })
    }
}