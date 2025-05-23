const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let dataPath = './data.json';
let db = fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath)) : { ateliers: [], inscriptions: [] };

app.get('/api/ateliers', (req, res) => {
  res.json(db.ateliers);
});

app.post('/api/ateliers', (req, res) => {
  db.ateliers.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(db));
  res.status(201).send();
});

app.get('/api/inscriptions', (req, res) => {
  res.json(db.inscriptions);
});

app.post('/api/inscriptions', (req, res) => {
  db.inscriptions.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(db));
  res.status(201).send();
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});