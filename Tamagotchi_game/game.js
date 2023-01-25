//CREATE FUNCTION FOR EACH CHARACTER
//BABY GARFIELD 

//**figure it out**
//must have a function to trigger phrases. i.e if boredom increases by num then prompt msg "play"
//Set an interval to increase metrics 
//Conditional statements: if user plays, boredom should decrease, will calm Garfield down, but user must keep an eye on other metrics (hunger, sleepines)
//add a function for Garfield to morph at a certain age 
//function to move Garfield around the screen depending on its behavior forcing the user to click the buttons to calm him down 
//Make the game user-friendly, maybe start slow and then as Garfield gets older increase the interval 
//function for the game to end or win 


//**QUESTIONS 
// - how to link JS to HTML so numbers change? go over DOM ? 
// - how to add animated background ? 
// - Interval ? review Sat Class notes




//RULES

//If boredom reaches 20, garfield dies 
//If sleepines reaches 20, garfiel dies  
//If hunger reaches 20, garfield dies 
//Age will stop at 14, when Garfield is a senior, game should end 

//______________________________________________________________________________________

//DOM -- GET ELEMENTS


const feedButton = document.querySelector(".actionFeed")
const playButton = document.querySelector(".actionPlay")
const restButton = document.querySelector(".actionRest")
const howToButton = document.querySelector(".Instructions")
const startButton = document.querySelector(".Begin")


const boredomVal = document.querySelector("#Boredom")

//_______________________________________________________________________________________

//ALERT Messages 

let ageAlert = "'I hate birthdays!' I'm getting older human"
let gameOverAlert = "'This is it I've reached the pinnacle of laziness and gluttony..How depressing'"
let winningAlert = "'All I do is eat and sleep. Eat and sleep. There must be more to a cat's life than that. But I hope not! '"


//HOW TO Play Messages 
let playMsg = "'Love me, feed me, never leave me' Garfield is bored Click 'Play' to play with Garfield"
let hungryMsg = "'I am hungry. Therefore I am ? ' Garfield is hungry Click 'Feed' to feed Garfield "
let restMsg = "'Oh no! I overslept! I'm late! For my nap.' Garfield is tired Click 'Rest' for Garfield to rest"
let howToPlayMsg =  " Instructions: Your job is to take care of Garfield. Garfield can be sometimes annoying and will ask for food, rest and play. "
let instructionMsg = "Double click 'Feed' to feed Garfield, 'Play' to play with Garfield, 'Rest' for Garfield to rest."
let instMsgcontinued = "Your game will end if Boredom, Hunger, Sleepines (shown at the top of your screen) hits 20."

//_______________________________________________________________________________________

// alert(howToPlayMsg)
// alert(instructionMsg)
// alert(instMsgcontinued)

// startGame =() =>{
// const userName = document.querySelector("#Name").innerHTML = "Garfield's Ownwer: " + prompt('Please enter your name') + "!"
// console.log(userName)
// }
// startGame()

// alert("Let the games begin...")

//___________________________________________________________________________________

class Character {
    constructor(name, age, boredom, hunger, sleepines){
    this.name = name
    this.age = age
    this.boredom =  document.querySelector("#Boredom")
    this.hunger = document.querySelector("#Hunger")
    this.sleepines = document.querySelector("#Sleepines")
  }
 
  hungryPhrase (){
    console.log("Hey you! Human! FEED ME! I am dying here!")
    return this.boredom.value
  }

  boredPhrase (){
    console.log("Hey you! Human! I've got to do something. I'm Bored!! ")
    return this.hunger.value
  }

  tiredPhrase(){
    console.log("Hey you! Human! I need to get some sleep")
    return this.sleepines.value
  }


//increase value

decreaseSleep () {   ///set a timer?? 
    this.boredom.value += 2
    this.hunger.value += 2
    this.sleepines.value -= 1    //add conditional statement to stop at 0
}

decreaseBoredom() {
    this.boredom.value -= 1
    this.hunger.value += 2
    this.sleepines.value += 2
}

decreaseHunger () {   
    this.boredom.value += 2
    this.hunger.value -= 1
    this.sleepines.value += 2

}
}


//_________________________________________________________

//Instantiate Character class for each character 
const kittenGarfield = new Character("Kitten Garfield", 1)  //age 0-1
console.log(kittenGarfield)

//____________________________________________________________





//_______________________________________________________


howToButton.addEventListener('click', e => {    //element e & use arrow function 
    alert (howToPlayMsg)
    alert (instructionMsg)
    alert (instMsgcontinued)
})



//_________________________________________________________________________________________
//Add images ---WIP ????? 

// const imgs = [
//     {babyimg:'https://media1.giphy.com/media/KY3bghirDv3UyFInnX/200w.webp?cid=ecf05e47jm9zofbco2jpppqcy2lwygyq0al2pnek78gphpi8&rid=200w.webp&ct=g'},
//     {img:"https://media1.giphy.com/media/3JOy7A3NxiCZUqJo9c/200w.webp?cid=ecf05e47jm9zofbco2jpppqcy2lwygyq0al2pnek78gphpi8&rid=200w.webp&ct=g"},
// ];


// let babyimg = document.querySelector('.babyPet')


//___________________________________________________________________


//Increase your pet's age every x minutes

//hungryGarfield = () =>{

let age = 0;
let agetimer = setInterval(function(){
    console.log("Garfield is getting older")
    age++;

    if(age === 2) {
        alert(ageAlert + ". Garfield is now a Junior")
        let garfieldAge = document.querySelector('#Age').innerHTML = "Age: " + age++
        console.log(garfieldAge)

    }
    if(age === 6) {
       alert(ageAlert + ". Garfield is now an Adult")
       let garfieldAge = document.querySelector('#Age').innerHTML =  "Age: " + age++
       console.log(garfieldAge)
     }
     if(age === 14) {
         alert(ageAlert + ". Garfield is now a Senior")
         let garfieldAge = document.querySelector('#Age').innerHTML =  "Age: " + age++
         alert(winningAlert + ". Thanks for taking care of me Human! ")
         clearInterval(agetimer)
         console.log(garfieldAge)
     }      
}, 1000);

//}

//_________________________________________________________

//Increase your pet's hunger, sleepines and bored metrics on an interval of your choosing

//HUNGER 

let hungerStart = 0;
let hungerTimer = setInterval(function(){
    hungerStart ++;
    let hunger = document.querySelector('#Hunger').innerHTML =  "Hunger: " + hungerStart 
     console.log(hunger)
    console.log(hungerStart)
if(hungerStart === 20) {
    let hunger = document.querySelector('#Hunger').innerHTML =  "Hunger: " + hungerStart 
    console.log(hunger)
    clearInterval(hungerTimer)
    alert(gameOverAlert)
}}, 1000);

//will perform the below when rest button is double clicked 
 feedButton.addEventListener('dblclick', function(){
hungerStart -= 1;
let hunger = document.querySelector('#Hunger').innerHTML =  "Hunger: " + hungerStart 
console.log(hunger)
 })




//BOREDOM 

let boredStart = 0;
let boredTimer = setInterval(function(){
    boredStart ++;
    let bored = document.querySelector('#Boredom').innerHTML =  "Boredom: " + hungerStart 
     console.log(bored)
    console.log(boredStart)
if(boredStart === 20) {
    let bored = document.querySelector('#Boredom').innerHTML =  "Boredom: " + hungerStart 
    console.log(bored)
    clearInterval(boredTimer)
    alert(gameOverAlert)
}}, 1000);

//will perform the below when rest button is double clicked 
 playButton.addEventListener('dblclick', function(){
boredStart -= 1;
let bored = document.querySelector('#Boredom').innerHTML =  "Boredom: " + boredStart 
console.log(bored)
 })



//SLEEPINES
let sleepStart = 0;
let sleepTimer = setInterval(function(){
    sleepStart ++;
    let sleep = document.querySelector('#Sleepines').innerHTML =  "Sleepines: " + sleepStart
     console.log(sleep)
    console.log(sleepStart)
if(sleepStart === 20) {
    let sleep = document.querySelector('#Sleepines').innerHTML =  "Sleepines: " + sleepStart
    console.log(sleep)
    clearInterval(sleepTimer)
    alert(gameOverAlert)
}}, 3000);

//will perform the below when rest button is double clicked 
 restButton.addEventListener('dblclick', function(){
 sleepStart-= 1;
let sleep = document.querySelector('#Sleepines').innerHTML =  "Sleepines: " + sleepStart 
console.log(sleep)
 })




 //______________________________________________________________________


let lights = document.querySelector('body')

function turnOnLight(element) {
    element.style.backgroundColor = "#e39782"
}

function turnOffLight(element) {
    element.style.backgroundColor = "#6698b7"
}

lights.addEventListener('click', e => {    //element e & use arrow function 
    turnOnLight(lights)
})


lights.addEventListener('dblclick', e => {    //element e & use arrow function 
    turnOffLight(lights)
})














