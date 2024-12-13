const { Collection, Discord, Client, GatewayIntentBits} = require("discord.js")
const humanizeDuration = require("humanize-duration")
const { Routes } = require("discord-api-types/v9")
const { REST } = require("@discordjs/rest")
const { readdirSync } = require("fs")
const path = require("path")
const fs = require("fs")
//Importation de toutes les bibliothèques
//Création du client
require("dotenv").config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
    ], shards: "auto"})
client.slash = new Collection();
const Timeout = new Set()
const commands = []

//Chargement des commandes
readdirSync("./commands/").map(async dir => {
    readdirSync(`./commands/${dir}/`).map(async (cmd) => {
        commands.push(require(path.join(__dirname, `./commands/${dir}/${cmd}`)))
    })
})
const rest = new REST({ version: "10" }).setToken(process.env.token);
(async () => {
    try {
        await rest.put(
            Routes.applicationCommands(process.env.botID),
            { body: commands }
        )
        console.log("\x1b[34m%s\x1b[0m", "Toutes les commandes ont été chargées ✅")
    } catch (error) {
        console.error(error)
    }
})();

//Vérification des fichier Events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

//Lancement des fonctions
["slash", "anticrash"].forEach(handler => {
    require(`./handlers/${handler}`)(client)
})

//Event interactionCreate
client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        if (!client.slash.has(interaction.commandName)) return
        if (!interaction.guild) return
        const command = client.slash.get(interaction.commandName)
        try {
            if (command.timeout) {
                if (Timeout.has(`${interaction.user.id}${command.name}`)) {
                    return interaction.reply({ content: `Tu as besoin d'attendre **${humanizeDuration(command.timeout, { round: true })}** pour encore utiliser cette commande`, ephemeral: true })
                }
            }
            if (command.permissions) {
                if (!interaction.member.permissions.has(command.permissions)) {
                    return interaction.reply({ content: `❌ Tu as besoin de \`${command.permissions}\` pour utiliser cette commande`, ephemeral: true })
                }
            }
            command.run(interaction, client)
            Timeout.add(`${interaction.user.id}${command.name}`)
            setTimeout(() => {
                Timeout.delete(`${interaction.user.id}${command.name}`)
            }, command.timeout)
            if (interaction.isAutocomplete()){
                try {
                    await command.autocomplete(interaction);
                } catch (err) {return;}
            }
        } catch (error) {
            console.error(error)
            await interaction.reply({ content: "❌ Une erreur est parvenue lors de l'execution de cette commande", ephemeral: true })
        }
    }
})

//Initiation du client
client.login(process.env.token)
