const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const PORT = 3000;
require('dotenv').config();


// Connexion à MongoDB (linceycluster)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ Connecté à MongoDB !!"))
  .catch(err => console.error("Erreur de connexion:", err));

// Route pour les hommes > 45 ans
app.get('/hommes/plus-de-45', async (req, res) => {
  try {
    const result = await User.find(
      { gender: 'M', age: { $gt: 45 } },
      { _id: 0, name: 1, age: 1, occupation: 1 }
    );
    console.log(result); // Log des résultats
    res.json(result);
  } catch (error) {
    console.error(error); // Log des erreurs 
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

app.listen(PORT, () => {
  console.log(` Serveur en écoute : http://localhost:${PORT}`);
});
