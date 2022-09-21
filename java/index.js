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
const startButton = document.querySelector("#start")


let level = 0
let playerTurn = []
let computerTurn = []
const choices = ["Bop-It","Twist-It","Pull-It"]
let randomChoice = choices[Math.floor((Math.random())* (choices.length))]

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("bop it was loaded")
    bopIt.classList.add("bounce-top")
    twistIt.classList.add('rotate-center')
    console.log("twist it it was loaded") 
    
    pullIt.classList.add("slide-bottom")
    console.log("pull it was loaded")
    
})




const startGame = ()=>{
// board has to be empty

    gameBoard.style.visibility='visible'
    playerTurn = []
    computerTurn = []
    level = 0
    readOut.style.color = "#bada55"
    readOut.innerText = "ready..."
//call the first direction give player a chance to get ready
    setTimeout(()=>{
        readOut.innerText = randomChoice
        computerTurn.push(randomChoice)
    }, 1000)
//timeout set because interval was going too fast
    
    gameBoard.addEventListener("click", (e)=>{
   // add's player click to array 
        playerTurn.push(e.target.id)
        
            const intervalID = setInterval(()=>{
            
                if(playerTurn[0]=== computerTurn[0]){
                // clear out arrays
                    playerTurn =[]
                    computerTurn=[]
                // add level
                    level += 1
                 // set new choice 
                    let randomChoice = choices[Math.floor((Math.random())* (choices.length))]
                    // console.log(`it's level ${level}`,playerTurn, computerTurn, computerTurn[0] === playerTurn[0])
                    readOut.innerText= `...${randomChoice}`
                    computerTurn.push(randomChoice)
                
                //change text color incase random choice is the same choice
                    if (level % 2 !== 0){
                        readOut.style.color = "black"
                    } else {
                        readOut.style.color = "purple"
                    }
                }else{
                    console.log("game lost")
                    clearInterval(intervalID)
                    gameBoard.style.visibility ="hidden" 
                    readOut.innerText = `you got to level ${level}`} 
         
            },3000)
            
        
     })
    
}


   

startButton.addEventListener("click", startGame)