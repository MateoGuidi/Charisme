<h1 align="center">Charisme</h1>

<img src="https://mateoguidi.github.io/portfolio/img/projects/visuCharisme.png" 
     alt="Charisme - Discord Bot" 
     style="display: block; margin: 0 auto;">

<p align="center">
  <a href="#Présentation">Description</a>
  •
  <a href="#Installation">Installation</a>
  •
  <a href="#commandes">Commands</a>
</p>

## Description

🇫🇷 **“Charisme” est un bot Discord entièrement créé, imaginé et mis en place par Matéo GUIDI.** **Le but de ce Bot est de vous permettre d’avoir accès à des commandes supplémentaires sur le logiciel de discussion vocale Discord.**<br>
🇺🇸 **“Charisme” is a Discord bot fully created, imagined, and implemented by Matéo GUIDI.** **The purpose of this bot is to give you access to additional commands on the Discord voice chat software.**

---

## Installation

### 1. 🇫🇷Télécharger le projet depuis GitHub / 🇺🇸Download the project from GitHub
#### Option 1 : 🇫🇷Télécharger l'archive ZIP / 🇺🇸Download the ZIP archive
1. 🇫🇷Rendez-vous sur la page GitHub du bot. / 🇺🇸Go to the bot's GitHub page.
2. 🇫🇷Cliquez sur **Code** > **Télécharger ZIP**. / 🇺🇸Click on **Code** > **Download ZIP**.
3. 🇫🇷Extrayez le dossier "src" dans le dossier de votre choix. / 🇺🇸Extract the "src" folder to a directory of your choice.

#### Option 2 : 🇫🇷Cloner le dépôt avec Git / 🇺🇸Clone the repository with Git
1. 🇫🇷Copiez l'URL du dépôt GitHub. / 🇺🇸Copy the GitHub repository URL.
2. 🇫🇷Ouvrez un terminal et clonez le projet : / 🇺🇸Open a terminal and clone the project:
   ```bash
   git clone git@github.com:MateoGuidi/Charisme.git
   ```
    🇫🇷Accédez au dossier cloné : / 🇺🇸Navigate to the cloned directory:
    ```bash
    cd ./src
    ```
### 2. 🇫🇷Installer les dépendances / 🇺🇸Install dependencies
🇫🇷Ouvrez un terminal dans le dossier du projet. / 🇺🇸Open a terminal in the project directory.<br>
🇫🇷Installez les dépendances avec la commande : / 🇺🇸Install dependencies with the command:<br>
```bash
npm install
```
### 3. 🇫🇷Configurer le fichier .env / 🇺🇸Configure the .env file
🇫🇷Créez un fichier nommé .env dans le dossier du projet si ce n'est pas déjà fait. / 🇺🇸Create a file named .env in the project directory if not already created.<br>
🇫🇷Ajoutez-y les informations suivantes en remplaçant <...> par vos propres valeurs : / 🇺🇸Add the following information, replacing <...> with your own values:<br>
```env
token=<Token du Bot>
botID=<ID du Bot>
blagues=<Token de l'API trouvable en créant un compte sur blagues-api.fr>
```
🇫🇷Sauvegardez le fichier .env. / 🇺🇸Save the .env file.
### 4. 🇫🇷Lancer le bot / 🇺🇸Run the bot
🇫🇷Ouvrez un terminal dans le dossier du projet. / 🇺🇸Open a terminal in the project directory.<br>
🇫🇷Lancez le bot avec la commande : / 🇺🇸Run the bot with the command:<br>
```bash
npm start
```
🇫🇷Le bot est maintenant en ligne et prêt à être utilisé ! / 🇺🇸The bot is now online and ready to use!
## Commandes / Commands
### 🎮 🇫🇷Fun / 🇺🇸Fun
- /blague : 🇫🇷Permet de se taper des barres / 🇺🇸Tells a joke
- /qi : 🇫🇷Permet de connaitre son qi / 🇺🇸Tells your IQ
- /compatibilité : 🇫🇷Permet de connaitre ta compatibilité avec quelqu'un / 🇺🇸Check your compatibility with someone
- /randomgame : 🇫🇷Permet de choisir un jeu aléatoirement / 🇺🇸Chooses a random game
- /charisme : 🇫🇷Permet de connaitre ton taux de charisme / 🇺🇸Tells your charisma level<br>
### ⚙️ 🇫🇷Utilitaires / 🇺🇸Utilities
- /chelp : 🇫🇷Permet de connaître toutes les commandes de ce bot / 🇺🇸Lists all the bot's commands
- /ctest : 🇫🇷Permet de savoir si le bot est en fonctionnement / 🇺🇸Checks if the bot is running
- /cuserinfo : 🇫🇷Permet de savoir des infos sur un utilisateur / 🇺🇸Shows information about a user
- /cbotinfo : 🇫🇷Permet de savoir des infos sur le bot / 🇺🇸Shows information about the bot
- /cdocumentation : 🇫🇷Une commande pour voir cette documentation. / 🇺🇸A command to view this documentation.
