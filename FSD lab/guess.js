function numberGuessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;
  
    console.log("Guess a number between 1 and 100!");
  
    while (guess !== target) {
      guess = parseInt(prompt("Your guess:"), 10);
      attempts++;
  
      if (isNaN(guess)) {
        console.log("Not a number, try again!");
      } else if (guess < target) {
        console.log("Too low!");
      } else if (guess > target) {
        console.log("Too high!");
      } else {
        console.log(`You got it! The number was ${target}. Attempts: ${attempts}`);
      }
    }
  }
  
  numberGuessingGame();
  