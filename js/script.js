const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello.

// Milestone 0:
// Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
// dal js (dentro al nostro 'carousel-item', per capirci).

// Milestone 1:
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile.

// Milestone 2:
// Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine.

const divList = [];
const box = document.querySelector('div.carousel-image');

images.forEach((image) => {
    const imageBox = document.createElement('div');
    const tagImage = document.createElement('img');
    tagImage.src = `./${image.image}`;
    imageBox.classList.add('my_carousel-item');
    imageBox.append(tagImage);
    box.append(imageBox);
    divList.push(imageBox);
});

console.log(divList);

divList[0].classList.add('active');
let counter = 0;

const previousButton = document.querySelector('div.previous');
const nextButton = document.querySelector('div.next');

nextButton.addEventListener('click', function() {
    divList[counter].classList.remove('active');
    counter++;
    if (counter >= divList.length) {
        counter = 0;
    }
    divList[counter].classList.add('active');
});

previousButton.addEventListener('click', function() {
    divList[counter].classList.remove('active');
    counter--;
    if (counter < 0) {
        counter = (divList.length - 1);
    }
    divList[counter].classList.add('active');
});

const divListThumbnail = [];

const sideBigBox = document.querySelector('div.carousel-wrapper');
const sideBox = document.createElement('div');
sideBox.classList.add('carousel-thumbnails');
sideBigBox.append(sideBox);

images.forEach((image) => {
    const imageBoxThumbnail = document.createElement('div');
    const tagImageThumbnail = document.createElement('img');
    tagImageThumbnail.src = `./${image.image}`;
    imageBoxThumbnail.classList.add('my_carousel-thumbnail', 'p-2');
    imageBoxThumbnail.append(tagImageThumbnail);
    sideBox.append(imageBoxThumbnail);
    divListThumbnail.push(imageBoxThumbnail);
});

const clickImageThumbnail = document.querySelector('div.my_carousel-thumbnail');

clickImageThumbnail.addEventListener('click', function() {
    counter = 1;
});