// 1. On récupère les éléments du formulaire et toutes les cartes de tournois
const searchInput = document.getElementById('search');
const typeSelect = document.getElementById('type-jeu');
const jeuSelect = document.getElementById('choix-jeu');
const statutSelect = document.getElementById('statut-tournoi');
const btnFiltrer = document.getElementById('btn-filtrer');
const cards = document.querySelectorAll('.tournoi-card');

// 2. Fonction principale qui vérifie chaque carte
function filtrerTournois() {
    // On récupère les valeurs choisies par l'utilisateur
    const texteRecherche = searchInput.value.toLowerCase().trim();
    const typeChoisi = typeSelect.value;     // ex: "tous", "fps", "moba"...
    const jeuChoisi = jeuSelect.value;       // ex: "tous", "valorant", "lol"...
    const statutChoisi = statutSelect.value; // ex: "tous", "avenir", "encours", "passe"

    // On parcourt chaque carte une par une
    cards.forEach(card => {
        // On récupère tout le texte de la carte en minuscules pour la recherche libre
        const texteCarte = card.textContent.toLowerCase();

        // Vérification 1 : Le texte tapé est-il présent dans la carte ?
        const matchTexte = texteCarte.includes(texteRecherche);

        // Vérification 2 : Le type de jeu correspond-il ?
        const matchType = (typeChoisi === 'tous') || card.classList.contains('cat-' + typeChoisi);

        // Vérification 3 : Le jeu précis correspond-il ?
        const matchJeu = (jeuChoisi === 'tous') || card.classList.contains('jeu-' + jeuChoisi);

        // Vérification 4 : Le statut correspond-il ?
        const matchStatut = (statutChoisi === 'tous') || card.classList.contains('status-' + statutChoisi);

        // Si TOUTES les conditions sont vraies, on affiche la carte, sinon on la cache
        if (matchTexte && matchType && matchJeu && matchStatut) {
            card.style.display = 'flex'; // 'flex' pour conserver l'alignement des boutons en bas
        } else {
            card.style.display = 'none';
        }
    });
}

// 3. Déclencher le filtrage au clic sur le bouton "Filtrer"
btnFiltrer.addEventListener('click', filtrerTournois);

//: Déclencher aussi le filtrage en direct quand on tape ou change un menu
searchInput.addEventListener('input', filtrerTournois);
typeSelect.addEventListener('change', filtrerTournois);
jeuSelect.addEventListener('change', filtrerTournois);
statutSelect.addEventListener('change', filtrerTournois);
