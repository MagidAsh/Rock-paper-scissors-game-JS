const choices = ["rock", "paper", "scissors"];

let playerSocre = 0;
let computerSocre = 0;

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
    playerSocre++;
  } else if (result === "computer") {
    console.log("You lose!");
    computerSocre++;
  } else {
    console.log("It's a tie.");
  }

  console.log(`Your score: ${playerSocre}`);
  console.log(`Computer's score: ${computerSocre}`);
  console.log(".............................");
};

const play = () => {
  if (playerSocre === 2 || computerSocre === 2) {
    if (playerSocre === 2) {
      console.log("You win overall.");
      return;
    } else if (computerSocre === 2) {
      console.log("You lost overall!");
      return;
    }
  } else {
    const plyerChoice = prompt("Choose rock, paper, scissors");

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
    play();
  }
};

play();
