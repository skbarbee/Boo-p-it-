//need to make event listerner for each img that distorts image when clicked
//need to make a function that will randomly make a pattern to follow either bop[1], twist[2], pull[3]
//need to make a function that will listen to players click to see if it creates the same pattern
// if they follow pattern, increase pattern by 1
//if they don't game'over

const bopIt = document.querySelector("#boo-p")
const twistIt = document.querySelector("#ghost")
const pullIt = document.querySelector("#spider")
const readOut = document.querySelector(".read-out")
// console.log(bopIt,  twistIt, pullIt)


bopIt.addEventListener("click", (e)=>{
    console.log("bop it was clicked")
    bopIt.classList.add("bounce-top")
})

twistIt.addEventListener("click", (e)=>{
    console.log("twist it it was clicked") 
    let classList = twistIt.classList.add('rotate-center')
    
    
})

pullIt.addEventListener("click", (e)=>{
    console.log("pull it was clicked")
    pullIt.classList.add("slide-bottom")
})

const twistFunction = (e) => {
    twistIt.classList.add("rotate-center")}