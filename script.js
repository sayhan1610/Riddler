let riddles = [];
let currentRiddleIndex = 0;

const riddleText = document.getElementById('riddle-text');
const riddleImage = document.getElementById('riddle-image');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-answer');
const resultText = document.getElementById('result-text');
const nextButton = document.getElementById('next-riddle');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

async function loadRiddles() {
  try {
    const response = await fetch('riddles.json');
    riddles = await response.json();
    displayRiddle();
  } catch (error) {
    console.error('Error loading riddles:', error);
    riddleText.textContent = 'Failed to load riddles.';
  }
}

const skipButton = document.getElementById('skip-question');

skipButton.addEventListener('click', () => {
  wrongSound.play(); // Play wrong answer sound
  nextRiddle(); // Load the next riddle
});


function displayRiddle() {
    const currentRiddle = riddles[currentRiddleIndex];
    if (!currentRiddle) {
      riddleText.textContent = 'No riddles available.';
      return;
    }
  
    riddleText.textContent = currentRiddle.question;
    resultText.textContent = '';
    answerInput.value = '';
  
    // Show skip button and submit button
    submitButton.style.display = 'inline-block';
    skipButton.style.display = 'inline-block';
  
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
      skipButton.style.display = 'inline-block'; // Hide skip button as well
    } else {
      riddleText.textContent = 'Congratulations! You have completed all riddles.';
      answerInput.style.display = 'none';
      submitButton.style.display = 'none';
      nextButton.style.display = 'none';
      skipButton.style.display = 'inline-block'; // Hide skip button as well
    }
  }
  

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextRiddle);

// Start the game
loadRiddles();

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
