module.exports = (client) => {
    process.on("unhandledRejection", (reason, p) => {
        console.log(reason, p)
    })
    process.on("uncaughtException", (err, origin) => {
        console.log(err, origin)
    })
}
//Permet d'afficher le message d'erreur dans la sortie par défaut plutôt que de faire crash le bot en affichant l'erreur