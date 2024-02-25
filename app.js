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

const play = () => {
  if (choices.indexOf(plyerChoice.toLowerCase()) !== -1) {
    console.log(`You choose ${plyerChoice.toLowerCase()}`);
  } else {
    console.log("You cheated");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoise = choices[randomNumber];
  console.log(`Computer chooses: ${computerChoise}`);

  const result = checkWinner(plyerChoice, computerChoise);
  console.log(result);
};

play();
