const riddles = [
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "echo"
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answer: "footsteps"
    },
    {
        question: "What can travel around the world while staying in a corner?",
        answer: "stamp"
    }
];

let currentRiddleIndex = 0;

const riddleText = document.getElementById('riddle-text');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-answer');
const resultText = document.getElementById('result-text');
const nextButton = document.getElementById('next-riddle');

function displayRiddle() {
    riddleText.textContent = riddles[currentRiddleIndex].question;
    resultText.textContent = '';
    nextButton.style.display = 'none';
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultText.textContent = 'Correct! Well done!';
        nextButton.style.display = 'block';
    } else {
        resultText.textContent = 'Oops! Try again.';
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
    }
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextRiddle);

// Start the game
displayRiddle();
