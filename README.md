# Site de Réservation d'Ateliers

## Installation locale

1. Décompressez l'archive ZIP.
2. Dans le dossier `backend`, installez les dépendances :

```bash
npm install express cors
node server.js
```

3. Ouvrez les fichiers HTML du dossier `frontend` dans un navigateur.

## Hébergement recommandé

- **Backend** : [https://render.com](https://render.com) (ajouter server.js)
- **Frontend** : [https://netlify.com](https://netlify.com) (glisser le dossier `frontend`)

## Fonctionnalités

- Choix de rôle (candidat, prescripteur, organisateur)
- Inscriptions à plusieurs ateliers
- Ateliers sur plusieurs jours
- Export CSV/PDF
- Sauvegarde côté serveur avec Node.js