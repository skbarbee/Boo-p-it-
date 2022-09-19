//need to make event listerner for each img that distorts image when clicked
//need to make a function that will randomly make a pattern to follow either bop[1], twist[2], pull[3]
//need to make a function that will listen to players click to see if it creates the same pattern
// if they follow pattern, increase pattern by 1
//if they don't game'over

const bopIt = document.querySelector("#Bop-It")
const twistIt = document.querySelector("#Twist-It")
const pullIt = document.querySelector("#Pull-It")
const readOut = document.querySelector(".read-out")
const gameBoard = document.querySelector(".game-container")
// console.log(bopIt,  twistIt, pullIt)


document.addEventListener("DOMContentLoaded", ()=>{
    console.log("bop it was loaded")
    bopIt.classList.add("bounce-top")
    twistIt.classList.add('rotate-center')
    console.log("twist it it was clicked") 
    console.log("pull it was clicked")
    pullIt.classList.add("slide-bottom")
    patternFunction();

    })




// make empty arrays for results to go it 
let computerTurn = []

let playerTurn = []

//function that will randomize between 1,2,3 
// each level must go up
let level = 0

const choices = ["Bop-It", "Twist-It", "Pull-It"]
//     let randomChoices = choices[Math.floor(Math.random()* choices.length)]
const patternFunction = ()=> {
    // const choices = ["Bop-It", "Twist-It", "Pull-It"]
    let randomChoices = choices[Math.floor(Math.random()* choices.length)]
    computerTurn.push(randomChoices)
    readOut.innerText = (computerTurn)
     
}

const gamePlay = ()=>{
    
    // add eventlistener to see if player copied
gameBoard.addEventListener("click", (e)=>{
    // add click to player array
        //    console.log(e.target.id)
           playerTurn.push(e.target.id)
            console.log(playerTurn)
            console.log(computerTurn)
        //if player follers the pattern make a new pattern
            if(playerTurn[0] == computerTurn[0]){
                level += 1
                playerTurn = []
                computerTurn = []
                let newRandomChoices = choices[Math.floor(Math.random()* choices.length)]
                computerTurn.push(newRandomChoices)
                readOut.innerText = (computerTurn)
            
            }else{
        readOut.innerText = `DOOOH!  You got to level ${level}`
        console.log("you got to level", level)
    }
})
}

gamePlay()