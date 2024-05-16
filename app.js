let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");
const userS = document.querySelector("#user");
const compS = document.querySelector("#comp");
const restart = document.querySelector(".restart");
const exit = document.querySelector(".exit");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

const draw = () => {
    msg.innerText = "It's a draw! Play Again";
    msg.style.backgroundColor = "#081b31";
} 

const showWinner = (userWin, user, comp) => {
    if(userWin) {
        msg.innerText = `You win!! Your ${user} beats ${comp}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userS.innerText = userScore;
    } else {
        msg.innerText = `You lost!! ${comp} beats your ${user}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compS.innerText = compScore;
    }
}

const userChoice = (user) => {
    const comp = genCompchoice();

    if(user == comp) {
        draw();
    } else {
        let userWin = true;
        if(user === "rock") {
            userWin = comp === "paper" ? false : true;
        } else if (user === "paper") {
            userWin = comp === "scissor" ? false : true;
        } else {
            userWin = comp === "rock" ? false : true;
        }
        showWinner(userWin, user, comp);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user = choice.getAttribute("id");
        userChoice(user);
    })
})

restart.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    compS.innerText = compScore;
    userS.innerText = userScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
})

exit.addEventListener("click", () => {
    // console.log("click");
    msg.innerText = "You choose to exit!!";
    setTimeout(() => {
        msg.innerText = "Click restart button to start a new game.";
    }, 2000);
    msg.style.backgroundColor = "purple";
    userScore = 0;
    compScore = 0;
    compS.innerText = compScore;
    userS.innerText = userScore;
})