const riddles = [
    {
        question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
        answer: "map",
        image: "images/map.png"
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answer: "footstep",
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
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

function displayRiddle() {
  const currentRiddle = riddles[currentRiddleIndex];
  riddleText.textContent = currentRiddle.question;
  resultText.textContent = '';
  answerInput.value = '';

  if (currentRiddle.image) {
    riddleImage.src = currentRiddle.image;
    riddleImage.alt = 'Riddle Image'; // Ensure alt text for accessibility
    document.getElementById('image-container').style.display = 'block'; // Show image container
    document.getElementById('image-container').style.marginTop = '20px';
    document.getElementById('image-container').style.marginBottom = '20px';
    document.getElementById('image-container').style.height = '70%';
    document.getElementById('image-container').style.width = '100%';
  } else {
    document.getElementById('image-container').style.display = 'none'; // Hide image container if no image
  }
}




function checkAnswer() {
const userAnswer = answerInput.value.trim().toLowerCase();
const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();

if (userAnswer === correctAnswer || userAnswer === correctAnswer + 's') { // Allow plural form as well
  resultText.textContent = 'Correct! Well done!';
  resultText.style.color = '#4caf50'; // Green color for correct answer
  correctSound.play();
  nextButton.style.display = 'block';
} else {
  resultText.textContent = 'Oops! Try again.';
  resultText.style.color = '#f44336'; // Red color for incorrect answer
  wrongSound.play();
}
}

function nextRiddle() {
  currentRiddleIndex++;
  if (currentRiddleIndex < riddles.length) {
    displayRiddle();
    nextButton.style.display = 'none'; // Hide next button after displaying next riddle
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

function playAudioOnClick() {
  // Create an audio element
  var audio = new Audio('audio/quiz1.mp3');
  
  // Set the volume to 70%
  audio.volume = 0.5;
  
  // Function to play audio
  function playAudio() {
      audio.play();
  }
  
  // Add a click event listener to the document
  document.addEventListener('click', playAudio);
}

// Call the function to enable audio playback on click
playAudioOnClick();
