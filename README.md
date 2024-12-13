<h1 align="center">Charisme</h1>

<img src="https://mateoguidi.github.io/portfolio/img/projects/visuCharisme.png" 
     alt="Charisme - Discord Bot" 
     style="display: block; margin: 0 auto;">

<p align="center">
  <a href="#Présentation">Présentation</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#commandes">Commandes</a>
</p>

# Présentation

**“Charisme” est un bot Discord entièrement créé, imaginé et mis en place par Matéo GUIDI.** **Le but de ce Bot est de vous permettre d’avoir accès à des commandes supplémentaires sur le logiciel de discussion vocale Discord.**

# Installation

## 1. Télécharger le projet depuis GitHub
### Option 1 : Télécharger l'archive ZIP
1. Rendez-vous sur la page GitHub du bot.
2. Cliquez sur **Code** > **Télécharger ZIP**.
3. Extrayez le dossier "src" dans le dossier de votre choix.

### Option 2 : Cloner le dépôt avec Git
1. Copiez l'URL du dépôt GitHub.
2. Ouvrez un terminal et clonez le projet :
   ```bash
   git clone git@github.com:MateoGuidi/Charisme.git
   ```
3. Accédez au dossier cloné  :
    ```bash
    cd ./src
    ```
## 2. Installer les dépendances
1. Ouvrez un terminal dans le dossier du projet.
2. Installez les dépendances avec la commande :
   ```bash
   npm install
   ```

## 3. Configurer le fichier `.env`
1. Créez un fichier nommé .env dans le dossier du projet si ce n'est pas déjà fait.
2. Ajoutez-y les informations suivantes en remplaçant <...> par vos propres valeurs :
    ```env
    token=<Token du Bot>
    botID=<ID du Bot>
    blagues=<Token de l'API trouvable en créant un compte sur blagues-api.fr>
    ```
3. Sauvegardez le fichier .env.

## 4. Lancer le bot
1. Ouvrez un terminal dans le dossier du projet.
2. Lancez le bot avec la commande :
   ```bash
   npm start
   ```
3. Le bot est maintenant en ligne et prêt à être utilisé !

**Vous pouvez maintenant tester les commandes du bot sur votre serveur Discord !**

# Commandes

**🎮 Fun**

- `/blague` - **Permet de se taper des barres**

- `/qi` - **Permet de connaitre son qi**

- `/compatibilité` **- Permet de connaitre ta compatibilité avec quelqu'un**

- `/randomgame` **- Permet de choisir un jeu aléatoirement**

- `/charisme` **- Permet de connaitre ton taux ton charisme**

**🎵 Musique**

- `/cplay` **- Permet de jouer de la musique**

- `/cfilter` **- Permet d'appliquer un filtre au son joué'**

- `/clyrics` **- Permet d'afficher les paroles d'une chanson**

**⚙️ Utilitaires**

- `/chelp` **- Permet de connaître toutes les commandes de ce bot**

- `/ctest` **- Permet de savoir si le bot est en fonctionnement**

- `/cuserinfo` - **Permet de savoir des infos sur un utilisateur**

- `/cbotinfo` - **Permet de savoir des infos sur le bot**

- `/cdocumentation` **- Une commande pour voir cette documentation.**
