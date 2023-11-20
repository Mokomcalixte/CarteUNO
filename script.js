
// Tableau des nombres possibles
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Tableau pour stocker les cartes
const unoTab = [];

// Fonction pour obtenir une couleur de fond aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Génération des cartes
for (let i = 0; i < 64; i++) {
    // Création d'une carte avec une couleur aléatoire et un nombre aléatoire
    const card = {
        color: getRandomColor(),
        number: numbers[Math.floor(Math.random() * numbers.length)]
    };

    // Ajout de la carte au tableau
    unoTab.push(card);
}

// Affichage des cartes dans le format spécifié
unoTab.forEach(card => {
    // Création de l'élément de carte
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.style.backgroundColor = card.color; // Définition de la couleur de fond de la carte

    // Création de l'élément interne de la carte
    const innerCardElement = document.createElement('div');
    innerCardElement.classList.add('innerCard');

    // Création de l'élément pour le nombre en haut de la carte
    const upperNumberElement = document.createElement('div');
    upperNumberElement.classList.add('uppernumber');
    upperNumberElement.style.backgroundColor = card.color; // Utilisation de la couleur de la carte mère
    const numberSpan = document.createElement('span');
    numberSpan.textContent = card.number;
    upperNumberElement.appendChild(numberSpan);

    innerCardElement.appendChild(upperNumberElement);

    // Création de l'élément de cercle
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');

    // Création de l'élément interne du cercle
    const innerCircleElement = document.createElement('div');
    innerCircleElement.classList.add('innerCircle');
    innerCircleElement.style.backgroundColor = card.color; // Utilisation de la couleur de la carte mère
    const centerSpan = document.createElement('span');
    centerSpan.classList.add('center');
    centerSpan.textContent = card.number;
    innerCircleElement.appendChild(centerSpan);

    circleElement.appendChild(innerCircleElement);
    innerCardElement.appendChild(circleElement);

    // Création de l'élément pour le nombre en bas de la carte
    const reverseUpperNumberElement = document.createElement('div');
    reverseUpperNumberElement.classList.add('reverse', 'uppernumber');
    reverseUpperNumberElement.style.backgroundColor = card.color; // Utilisation de la couleur de la carte mère
    const reverseNumberSpan = document.createElement('span');
    reverseNumberSpan.textContent = card.number;
    reverseUpperNumberElement.appendChild(reverseNumberSpan);

    innerCardElement.appendChild(reverseUpperNumberElement);

    // Ajout de l'élément interne à l'élément de carte
    cardElement.appendChild(innerCardElement);

    // Ajout de l'élément de carte au corps du document
    document.body.appendChild(cardElement);
});
