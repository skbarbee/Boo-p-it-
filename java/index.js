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
let interval = 2000

const lostSound = document.createElement("audio")
lostSound.id ="lost"
lostSound.src = "java/GameSounds/Die_01.m4a"
lostSound.type = "audio/mp4"
lostSound.preload = "auto"

const bopItSound = document.createElement("audio")
bopItSound.id ="bopsound"
bopItSound.src = "java/GameSounds/Bop.m4a"
bopItSound.type = "audio/mp4"
bopItSound.preload = "auto"

const twistItSound = document.createElement("audio")
twistItSound.id ="twistsound"
twistItSound.src = "java/GameSounds/Twist.m4a"
twistItSound.type = "audio/mp4"
twistItSound.preload = "auto"

const pullItSound = document.createElement("audio")
pullItSound.id ="twistsound"
pullItSound.src = "java/GameSounds/Pull.m4a"
pullItSound.type = "audio/mp4"
pullItSound.preload = "auto"

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("bop it was loaded")
    bopIt.classList.add("bounce-top")
    twistIt.classList.add('rotate-center')
    console.log("twist it it was loaded") 
    pullIt.classList.add("slide-bottom")
    console.log("pull it was loaded")
    
    
})
//record player choice into an array
const recordPlayerChoice= (e) =>{
    playerTurn.push(e.target.id)
}
//get random choice
const getRandomChoice = () => {
 return choices[Math.floor((Math.random())* (choices.length))]
}

const playSound = ()=>{
    if (randomChoice === choices[0]){
        bopItSound.play()
        bopItSound.playbackRate = 1.5
     }else if (randomChoice === choices[1]){
        twistItSound.play()
        twistItSound.playbackRate = 1.5
    }else if (randomChoice === choices[2]){
        pullItSound.play()
        pullItSound.playbackRate = 1.5
    }
}

//stop interval from running and player from playing
const stopGame = ()=>{
    lostSound.play()
    console.log('game lost')
    clearInterval(intervalID)
    gameBoard.style.visibility = 'hidden'
    readOut.innerText = `you got to level ${level}`
}
//want to change the speed of the pattern as level increases
function changeChoice() {
console.log("this function ran")
   intervalID = setInterval(compareChoices,interval) 

}


function compareChoices () {
    console.log(`it's level ${level}\n`, 
    `player: ${playerTurn[0]} \n`,
    `computer: ${computerTurn[0]} \n`,
     computerTurn[0] === playerTurn[0])
     if(playerTurn[0] === computerTurn [0]){
        //clear out arrays
        playerTurn = []
        computerTurn = []
        // add level
        level += 1
        if(level %2 !== 0){
            readOut.style.color = "black"
        }else{
            readOut.style.color = "purple"
        }
         if (level < 2){
            interval = 3000
            console.log(`interval is now:${interval} `)
         }else if ((level > 2) && (level < 5)){
            clearInterval(intervalID)
            interval = 2000
            changeChoice();
            console.log(`interval is now:${interval}\n `)
         }else if ((level >4) && (level < 10)){
            clearInterval(intervalID)
            interval = 1200
            changeChoice();
            console.log(`interval is now:${interval}\n `)
        }else if ((level > 9) && (level < 15)){
            clearInterval(intervalID)
            interval = 1000
            changeChoice();
            console.log(`interval is now:${interval}\n `)}
        //set my new choice
        randomChoice = getRandomChoice()
        playSound()
        readOut.innerText = `...${randomChoice}`
        computerTurn.push(randomChoice)
        //chang etext color in case random choice is the same choice
            
     }else{
        stopGame()
     }
}


const startGame = ()=> {
// board has to be empty
    interval = 3000
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
        playSound()
    }, 1000)
    
     changeChoice()
    
}
startButton.addEventListener('click', startGame)
gameBoard.addEventListener('click', recordPlayerChoice)