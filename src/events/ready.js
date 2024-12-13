const { Events } = require('discord.js');
const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log("\x1b[34m%s\x1b[0m", `Connecté en tant que ${client.user.tag} 🤖`)
        client.user.setActivity(`/chelp`)
        //Affiche sur quel compte le bot est connecté, mets son activité et charge la langue de tous les serveurs
    }
};

module.exports.eventEmitter = eventEmitter;