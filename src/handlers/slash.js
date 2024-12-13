const { readdirSync } = require("fs")
module.exports = (client) => {
    try {
        let amount = 0
        readdirSync("./commands/").forEach((dir) => {
            const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"))
            for (const file of commands) {
                const pull = require(`../commands/${dir}/${file}`)
                if (pull.name) {
                    client.slash.set(pull.name, pull)
                    amount++
                } else {
                    console.log(file, "error -> missing a help.name, or help.name is not a string.")
                    continue
                }
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name))
            }
        })
        console.log("\x1b[31m%s\x1b[0m", `[Chargement terminé] ${amount} Commandes initiée(s)`)
    } catch (e) {
        console.log(e)
    }
}
//Permet d'initialiser les commandes et vérifie que ces derniers comporte bien un nom
