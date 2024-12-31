let user_score = 0;
let comp_score = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranId = Math.floor(Math.random() * 3);
  return options[ranId]; 
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    user_score++;
    userScorePara.innerText = user_score;
    msg.innerText = `You Win! Your  ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor = "green";

  } else {
    comp_score++;
    compScorePara.innerText = comp_score; 
    msg.innerText = `You lost! ${compChoice} beats your  ${userChoice}`;
    msg.style.backgroundColor = "red";
  };
};
// for draw Game 
const drawGame = () => {
  msg.innerText = "Game was draw.Play again!";
   msg.style.backgroundColor = "#081b31";

};

const playGame = (userChoice) => {
  console.log("User choice =", userChoice);
  // Generate computer choice
  const compChoice = genCompChoice();
  console.log("Computer choice =", compChoice);

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // scissors or paper
      userWin = compChoice === "scissors" ? true : false; 
    } else if (userChoice === "paper") {
      // rock or scissors
      userWin = compChoice === "rock" ? true : false; 
    } else if (userChoice === "scissors") {
      // rock or paper
      userWin = compChoice === "paper" ? true : false; 
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); 
  });
});
