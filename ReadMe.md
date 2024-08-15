# Riddle Game

Welcome to the **Riddle Game**! This is a fun and interactive web-based game where you can solve riddles and challenge your mind. The game keeps track of your score as you try to answer correctly and proceed through a series of riddles.

## Features

- **Interactive Riddle Solving**: Test your wits by answering various riddles.
- **Score Tracking**: Your score increases with each correct answer.
- **Skip Option**: Skip a riddle if you're stuck, but at the cost of losing points.
- **Audio Feedback**: Enjoy sound effects for correct and incorrect answers.
- **Dynamic Backgrounds**: Visually engaging backgrounds that animate as you play.

## Getting Started

### Prerequisites

To run this project, you'll need Python installed on your machine. The game is hosted on a local server using Python's `http.server` module.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sayhan1610/riddler.git
   cd riddler
   ```

2. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the game:

   ```bash
   python app.py
   ```

   The game will automatically open in your default web browser.

### How to Play

1. Once the game loads in your browser, a riddle will be displayed along with a text box for your answer.
2. Enter your answer and click the "Submit" button.
3. If your answer is correct, you'll see a congratulatory message and your score will increase.
4. If you're stuck, you can click "Skip Question" to move to the next riddle.
5. Continue answering riddles until you've completed them all!

### Project Structure

- `app.py`: Python script that sets up a local server to host the game.
- `index.html`: Main HTML file that structures the game interface.
- `styles.css`: Contains the styling for the game interface.
- `script.js`: JavaScript file that manages game logic, including loading riddles, handling user input, and updating the score.
- `riddles.json`: JSON file that contains the riddles and their respective answers.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contributing

Feel free to fork this repository and make your own contributions. Pull requests are welcome!

### Credits

Developed by Sayhan1610.
