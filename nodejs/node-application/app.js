import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
// Importer le module Express.js

// Créer une application Express
const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Activation de CORS
app.use(bodyParser.json()); // Pour les requêtes avec un contenu de type application/json

const connexionString = 
  "mongodb://mongodb/db"
  // "mongodb://localhost/db"

mongoose
  .connect(connexionString)
  .then(() => {
    console.log("Connexion à MongoDB réussie");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB :", err);
  });

// Définir une route racine
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/users", userRoutes);

// Définir le port sur lequel le serveur écoutera les requêtes

// Démarrer le serveur et écouter les connexions entrantes
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
