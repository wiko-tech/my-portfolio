// Initialize variables and arrays
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// DOM Elements
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate game cards
function generateCards() {
    gameContainer.innerHTML = '';
    cards.forEach(color => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        card.addEventListener('click', handleCardClick);
        gameContainer.appendChild(card);
    });
}

// Handle card click event
function handleCardClick() {
    if (selectedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.style.backgroundColor = this.dataset.color;
        this.textContent = '';
        selectedCards.push(this);
        
        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

// Check if two selected cards match
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
        card1.textContent = '?';
        card2.textContent = '?';
    }
    selectedCards = [];
}

// Start Game Timer
function startGameTimer() {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

// Start Game
startbtn.addEventListener('click', () => {
    score = 0;
    timeLeft = 30;
    generateCards();
    startGameTimer();
});
