import express from "express";
import User from "../models/User.js";
import "dotenv/config";

const router = express.Router();

// Route GET pour récupérer tous les utilisateurs
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route POST pour créer un nouvel utilisateur
router.post("/", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // Ajoutez d'autres champs selon vos besoins
  });

  try {
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route GET pour récupérer un utilisateur par ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route PUT pour mettre à jour un utilisateur
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route DELETE pour supprimer un utilisateur
router.delete("/:id", async (req, res) => {
  try {
    if (req.body.adminPassword == process.env.ADMIN_DELETE_PASSWORD) {
      // const user = await User.findById(req.params.id);
      const user = null;
      if (user) {
        // await User.findByIdAndDelete(req.params.id);
        res.json({ success: true });
      } else {
        // Si aucun utilisateur correspondant n'est trouvé, renvoyer un message approprié.
        res.json({ success: false, message: "User not found" });
      }
    } else {
      res.json({ success: false, message: "Invalid admin password" });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

export default router;
