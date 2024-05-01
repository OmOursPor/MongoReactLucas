# Utiliser l'image officielle de Node.js
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json dans le conteneur
COPY react-application/package*.json ./

# Installer les dépendances
RUN npm install

RUN rm -rf src

# Copier le reste des fichiers dans le conteneur
COPY react-application .

# Construire l'application React
RUN npm run build

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Commande par défaut pour démarrer l'application
CMD ["npm", "start"]
