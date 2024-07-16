const riddles = [
    {
        question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
        answer: "map",
        image: "images/map.png"
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answer: "footsteps",
        image: "images/footsteps.avif"
    },
    {
        question: "I have keys but open no locks. I have space but no room. You can enter, but you can’t go inside. What am I?",
        answer: "keyboard",
        image: ""
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "m",
        image: ""
    },
    {
        question: "What gets wetter and wetter the more it dries?",
        answer: "towel",
        image: ""
    },
    {
        question: "What has one eye but can’t see?",
        answer: "needle",
        image: ""
    },
    {
        question: "What has a neck but no head?",
        answer: "bottle",
        image: ""
    },
    {
        question: "What has keys but can't open locks?",
        answer: "piano",
        image: "images/piano.jpg"
    },
    {
        question: "What belongs to you, but other people use it more than you do?",
        answer: "name",
        image: ""
    },
    {
        question: "What has many teeth but can’t bite?",
        answer: "comb",
        image: ""
    },
    {
        question: "What begins with T, ends with T, and has T in it?",
        answer: "teapot",
        image: "images/teapot.webp"
    },
    {
        question: "What is full of holes but still holds water?",
        answer: "sponge",
        image: "images/sponge.jpg"
    },
    {
        question: "What is at the end of a rainbow?",
        answer: "w",
        image: ""
    },
    {
        question: "What can you catch but not throw?",
        answer: "cold",
        image: ""
    },
    {
        question: "What has a head, a tail, is brown, and has no legs?",
        answer: "penny",
        image: ""
    },
    {
        question: "What has a heart that doesn't beat?",
        answer: "artichoke",
        image: "images/artichoke.webp"
    },
    {
        question: "What has a thumb and four fingers but is not alive?",
        answer: "glove",
        image: ""
    }
    // Add more unique riddles as needed
];



let currentRiddleIndex = 0;
  
const riddleText = document.getElementById('riddle-text');
const riddleImage = document.getElementById('riddle-image');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-answer');
const resultText = document.getElementById('result-text');
const nextButton = document.getElementById('next-riddle');

function displayRiddle() {
  const currentRiddle = riddles[currentRiddleIndex];
  riddleText.textContent = currentRiddle.question;
  resultText.textContent = '';
  answerInput.value = '';
  
  if (currentRiddle.image) {
    riddleImage.src = currentRiddle.image;
    riddleImage.style.display = 'block';
  } else {
    riddleImage.style.display = 'none';
  }

  nextButton.style.display = 'none';
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    resultText.textContent = 'Correct! Well done!';
    resultText.style.color = '#4caf50'; // Green color for correct answer
    nextButton.style.display = 'block';
  } else {
    resultText.textContent = 'Oops! Try again.';
    resultText.style.color = '#f44336'; // Red color for incorrect answer
  }
}

function nextRiddle() {
  currentRiddleIndex++;
  if (currentRiddleIndex < riddles.length) {
    displayRiddle();
  } else {
    riddleText.textContent = 'Congratulations! You have completed all riddles.';
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
  }
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextRiddle);

// Start the game
displayRiddle();
