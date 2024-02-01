/**
 * Ajout d'un participant à la liste
 */
function addParticipant()
{
    // Récupération de la valeur du input NOM dans le formulaire
    const nameInput = document.getElementById("participantName");
    // Nettoyage de la valeur récupérée
    const name = nameInput.value.trim();

    // Récupération de la valeur du input PRENOM dans le formulaire
    const firstNameInput = document.getElementById("participantFirstName");
    // Nettoyage de la valeur récupérée
    const firstName = firstNameInput.value.trim();

    // Vérification des valeurs reçues
    // On ne fait jamais confiance à l'utilisateur!
    if (name !== "" && firstName !== "")
    {
        // Récupération de l'élément HTML qui affichera la liste des participants
        const participantsList = document.getElementById("participantsList");


        // https://developer.mozilla.org/fr/docs/Web/API/HTMLTableElement/insertRow
        // Insère une ligne dans la table à l'indice de ligne 0
        let nouvelleLigne = participantsList.insertRow(0);

        // Insère une cellule dans la ligne à l'indice 0
        let nouvelleCelluleNom = nouvelleLigne.insertCell(0);

        // Ajoute un nœud texte à la cellule
        let nouveauNom = document.createTextNode( name );
        nouvelleCelluleNom.appendChild(nouveauNom);

        // Insère une cellule dans la ligne à l'indice 1
        let nouvelleCellulePrenom = nouvelleLigne.insertCell(1);

        // Ajoute un nœud texte à la cellule
        let nouveauPrenom = document.createTextNode( firstName );
        nouvelleCellulePrenom.appendChild(nouveauPrenom);

        // Réinitialise les champs de saisie
        nameInput.value = "";
        firstNameInput.value = "";
    }
}

/**
 * Mélange du tableau
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Tirage au sort
 */
function drawParticipant() {
    const participants = Array.from(document.querySelectorAll("#participantsList tr"));

    // Vérifie qu'il y a au moins deux participants pour effectuer le tirage
    if (participants.length < 2) {
        alert("Ajoutez au moins deux participants avant de faire le tirage.");
        return;
    }

    shuffleArray(participants);

    // Crée une nouvelle div pour afficher les résultats
    const drawResultDiv = document.getElementById("tirageauSort");
    drawResultDiv.innerHTML = "<h2>Résultat du tirage :</h2>";

    participants.forEach((participant, index) => {
        const recipientIndex = (index + 1) % participants.length;
        const recipient = participants[recipientIndex].textContent;

        // Ajoute un emoji de Noël (🎅🎁🌟) pour rendre cela festif
        const drawResultItem = document.createElement("div");
        drawResultItem.textContent = `${participant.textContent} => ${recipient} ${getChristmasEmoji()}`;
        drawResultDiv.appendChild(drawResultItem);
    });
}

/**
 * Sélection d'un emoji
 */
function getChristmasEmoji() {
    const emojis = ["🎅", "🎁", "🌟", "⛄", "🎄", "🔔", "🕯️", "❄️", "🦌", "👼",
        "🤶", "🍬", "🍭", "🎶", "🦌", "🍪", "🥛", "🧦", "🎊", "🎈",
        "🥳", "🎆", "🎇", "🕰️", "🍾", "🥂", "🌠", "📯", "🎤", "🎸"];

    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// =================================================================


/**
 * Evenement sur le bouton
 */
document.getElementById('btnAdd').addEventListener('click', addParticipant);