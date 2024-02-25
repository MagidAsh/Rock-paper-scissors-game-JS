// step1 : Getting selected values from user and computer

const choices = ["rock", "paper", "scissors"];

const plyerChoice = prompt("Choose rock, paper, scissors");

// const computerValue = prompt("Choose rock, paper, scissors").toLowerCase();

// if (plyerChoice === "" || plyerChoice === null) {
//   console.log("You cheated");
// } else {
//   console.log(`You choose ${plyerChoice}`);
// }

// چون مقدار نال و استرینگ خالی یک مقدار فالزی است میتوان شرط را اینگونه نوشت
// if (!plyerChoice) {
//   console.log("You cheated");
// } else {
//   console.log(`You choose ${plyerChoice}`);
// }

// یا اینکه شرط بالا را برعکس کرد
if (plyerChoice) {
  console.log(`You choose ${plyerChoice}`);
} else {
  console.log("You cheated");
}

const randomNumber = Math.floor(Math.random() * choices.length);
const computerChoise = choices[randomNumber];
console.log(`Computer chooses: ${computerChoise}`);

// step2 : Determine the winner of the game

if (plyerChoice === computerChoise) {
  console.log("It's a tie.");
} else if (plyerChoice === "rock") {
  if (computerChoise === "scissors") {
    console.log("You win.");
  } else {
    console.log("You lose!");
  }
} else if (plyerChoice === "paper") {
  if (computerChoise === "rock") {
    console.log("You win.");
  } else {
    console.log("You lose!");
  }
} else {
  if (computerChoise === "paper") {
    console.log("You win.");
  } else {
    console.log("You lose!");
  }
}
