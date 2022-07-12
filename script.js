const box = document.querySelector(".box")
const computer = document.querySelector(".computer")
const playerOne = document.querySelector(".player01")
const button = document.querySelector("button")

button.addEventListener("click", playGame)

function playGame(e){
    const player01 = playerOne.value.toLowerCase()
    const compOptions = ["rock", 'paper', 'scissors']
    computer.value = compOptions[Math.floor(Math.random() * compOptions.length)]
    //console.log(player01)
    function compare(computerPlay, humanPlay){
        if(computer.value.indexOf(player01) != -1 && player01 != ""){
            console.log("It's a draw")
        }
        if(computer.value === "rock" && player01 === "scissors"){
            console.log("you lose, rock beats scissors")
        }
        else if(computer.value === "paper" && player01 === "rock"){
            console.log("You lose, paper covers rock")
        }
        else if(computer.value === "scissors" && player01 === "paper"){
            console.log("You lose, scissors tears paper")
        }
        else if(computer.value === "scissors" && player01 === "rock"){
            console.log("You win, rock beats scissors!")
        }
        else if(computer.value === "rock" && player01 === "paper"){
            console.log("You win, paper covers rock!")
        }
        else if(computer.value === "paper" && player01 === "scissors"){
            console.log("You win, scissors tears paper!")
        }
        else if (player01 === ""){
            console.log("no input from player")
        }

    }

    compare(computer.value, player01)
}