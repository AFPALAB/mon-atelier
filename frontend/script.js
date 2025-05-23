document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('candidatForm')) {
    document.getElementById('candidatForm').addEventListener('submit', e => {
      e.preventDefault();
      const data = {
        type: 'candidat',
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        atelier: document.getElementById('atelier').value
      };
      localStorage.setItem('inscription_' + Date.now(), JSON.stringify(data));
      alert('Inscription enregistrée !');
      e.target.reset();
    });
  }

  if (document.getElementById('prescripteurForm')) {
    const liste = document.getElementById('listePrescripteurs');
    document.getElementById('prescripteurForm').addEventListener('submit', e => {
      e.preventDefault();
      const data = {
        type: 'prescripteur',
        entreprise: document.getElementById('entreprise').value,
        ville: document.getElementById('ville').value,
        telephone: document.getElementById('telephone').value,
        nom: document.getElementById('nomCandidat').value,
        email: document.getElementById('emailCandidat').value,
        atelier: document.getElementById('atelier').value
      };
      localStorage.setItem('inscription_' + Date.now(), JSON.stringify(data));
      alert('Inscription enregistrée !');
      e.target.reset();
      const li = document.createElement('li');
      li.textContent = `${data.nom} - ${data.entreprise} (${data.ville})`;
      liste.appendChild(li);
    });

    for (let key in localStorage) {
      if (key.startsWith('inscription_')) {
        const val = JSON.parse(localStorage.getItem(key));
        if (val?.type === 'prescripteur') {
          const li = document.createElement('li');
          li.textContent = `${val.nom} - ${val.entreprise} (${val.ville})`;
          liste.appendChild(li);
        }
      }
    }
  }

  if (document.getElementById('listeInscriptions')) {
    const liste = document.getElementById('listeInscriptions');
    for (let key in localStorage) {
      if (key.startsWith('inscription_')) {
        const val = JSON.parse(localStorage.getItem(key));
        const li = document.createElement('li');
        if (val.type === 'prescripteur') {
          li.textContent = `[Prescripteur] ${val.nom} - ${val.entreprise} (${val.ville})`;
        } else {
          li.textContent = `[Candidat] ${val.nom} - ${val.atelier}`;
        }
        liste.appendChild(li);
      }
    }
  }
});