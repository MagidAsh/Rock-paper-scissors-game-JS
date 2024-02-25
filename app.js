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
