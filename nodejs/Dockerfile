# Utiliser l'image officielle de Node.js
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json dans le conteneur
COPY node-application/package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers dans le conteneur
COPY node-application .

# Exposer le port sur lequel l'application écoute
EXPOSE 3001

# Commande par défaut pour démarrer l'application
CMD ["node", "app"]
