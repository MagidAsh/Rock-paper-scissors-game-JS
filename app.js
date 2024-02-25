const choices = ["rock", "paper", "scissors"];

const plyerChoice = prompt("Choose rock, paper, scissors");

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "equal";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You win.");
  } else if (result === "computer") {
    console.log("You lose!");
  } else {
    console.log("It's a tie.");
  }
};

const play = () => {
  if (choices.indexOf(plyerChoice?.toLowerCase()) !== -1) {
    console.log(`You choose ${plyerChoice.toLowerCase()}`);
  } else {
    console.log("You cheated");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoise = choices[randomNumber];
  console.log(`Computer chooses: ${computerChoise}`);

  const gameResult = checkWinner(plyerChoice, computerChoise);
  showResult(gameResult);
};

play();
