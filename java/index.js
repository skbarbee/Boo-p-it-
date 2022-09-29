// BIG NOTE TO START, java and javaScript are 2 wildly different things, the directory this is in should be renamed


//need to make event listener for each img that distorts image when clicked
//need to make a function that will randomly make a pattern to follow either bop[1], twist[2], pull[3]
//need to make a function that will listen to players click to see if it creates the same pattern
// if they follow pattern, increase pattern by 1
//if they don't game'over

// good organizational grouping 
const bopIt = document.querySelector("#Bop-It")
const twistIt = document.querySelector("#Twist-It")
const pullIt = document.querySelector("#Pull-It")
const readOut = document.querySelector(".read-out")
const gameBoard = document.querySelector(".game-container")
const startButton = document.querySelector("#start")
const bopItGame = document.querySelector(".bop-it-game")


let level = 0
// looking at the code is there ever a time we expect the player and computer turn to contain more than 1 value ? 
// if we don't using arrays would be counter intuitive 
let playerTurn = []
let computerTurn = []
const choices = ["Bop-It","Twist-It","Pull-It"]
// is this redundant with get random choice function ?
let randomChoice = choices[Math.floor((Math.random())* (choices.length))]
let interval = 2000

// looks like you could refactor this with an Audio class
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

const bopItClick = document.createElement("audio")
bopItClick.id ="bopclick"
bopItClick.src = "java/GameSounds/Bop_R.m4a"
bopItClick.type = "audio/mp4"
bopItClick.preload = "auto"

const twistItSound = document.createElement("audio")
twistItSound.id ="twistsound"
twistItSound.src = "java/GameSounds/Twist.m4a"
twistItSound.type = "audio/mp4"
twistItSound.preload = "auto"

const twistClick = document.createElement("audio")
twistClick.id ="twistsound"
twistClick.src = "java/GameSounds/Twist_C.m4a"
twistClick.type = "audio/mp4"
twistClick.preload = "auto"

const pullItSound = document.createElement("audio")
pullItSound.id = "pullItsound"
pullItSound.src = "java/GameSounds/Pull.m4a"
pullItSound.type = "audio/mp4"
pullItSound.preload = "auto"

const pullClick = document.createElement("audio")
pullClick.id ="pullClicksound"
pullClick.src = "java/GameSounds/Pull_R.m4a"
pullClick.type = "audio/mp4"
pullClick.preload = "auto"



document.addEventListener("DOMContentLoaded", ()=>{
    // nit : be consistent, put this first log after the class add
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
//be consistent - even with comments - no function labels 
const clickSound = (e)=>{
    if(e.target.id === "Bop-It"){
        bopItClick.play()
        bopItClick.playbackRate = 1.5
    }else if(e.target.id === "Pull-It"){
        pullClick.play()
        pullClick.playbackRate = 1.5
    }else if(e.target.id === "Twist-It"){
        twistClick.play()
        twistClick.playbackRate = 3
    }
}
// no function label
const playSound = ()=>{
    if (randomChoice === choices[0]){
        bopItSound.play()
        bopItSound.playbackRate = 1.5
        // partial indentation
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
    bopItGame.style.visibility = 'hidden'
    readOut.innerText = `you got to level ${level}`
}
//want to change the speed of the pattern as level increases
function changeChoice() {
console.log("this function ran")
// partial indentation , 3 spaces ?
// i would use a different name than interval id here - use something a little more semantic,
// currently an unintentional(i assume) reference to underlying code functionality 
   intervalID = setInterval(compareChoices,interval) 

}

// no function label, also i count 7 lines with bad indentation
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
    bopItGame.style.visibility='visible'
    // is this clear of the array redundant if we are using changeChoice which does that as well ?
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
    // INDENTATION! - 5spaces ?! 
     changeChoice()
    
}
startButton.addEventListener('click', startGame)
bopItGame.addEventListener('click', recordPlayerChoice)
bopItGame.addEventListener('click', clickSound)
