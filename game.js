const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computer = choice[Math.floor(Math.random() * choice.length)];
    //console.log(computer);
    return computer;
}

function getHumanChoice(){
    let displayMessage = prompt("Write rock, paper or scissors!");
    //console.log(displayMessage.toLowerCase());
    return(displayMessage.toLowerCase());
}

function playRound(humanChoice, computerChoice){
    if(!(choice.includes(humanChoice.toLowerCase()))){
        console.log("Wrong choice!!! only rock,paper or scissors")
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "paper" ){
        console.log("You lose! Paper beats Rock.");
        return computerScore+=1;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors" ){
        console.log("You lose! Scissors beats Paper.")
        return computerScore+=1;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock" ){
        console.log("You lose! Rock beats Scissors.")
        return computerScore+=1;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors" ){
        console.log("You won! Rock beats Scissors.");
        return humanScore+=1;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock" ){
        console.log("You won! Paper beats Rock.");
        return humanScore+=1;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper" ){
        console.log("You won! Scissors beats Paper.");
        return humanScore+=1;
    }
    else {console.log("Draw! You chose " + humanChoice.toLowerCase() + " and the computer chose " + computerChoice);}

}


function playGame(){
    console.log("Hello World");
    while(humanScore < 3 && computerScore <3){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log("YOU: " + humanScore + "  COMP: " + computerScore);
        
     } 
    if(humanScore > computerScore){
        alert("You Won!!!");
    } else {alert("Computer Won!!!");}
   
}

playGame();