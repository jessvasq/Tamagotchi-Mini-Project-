
//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________


//DOM -- GET ELEMENTS


const feedButton = document.querySelector(".actionFeed")
const playButton = document.querySelector(".actionPlay")
const restButton = document.querySelector(".actionRest")
const startButton = document.querySelector("button#Start")
const boredomVal = document.querySelector("#Boredom")


//_______________________________________________________________________________________________________________________________________________________________________________

//ALERT Messages 

let ageAlert = "'I hate birthdays!' I'm getting older human"
let gameOverAlert = "'This is it I've reached the pinnacle of laziness and gluttony..How depressing'"
let winningAlert = "'All I do is eat and sleep. Eat and sleep. There must be more to a cat's life than that. But I hope not! '"


//HOW TO Play Messages 
let howToPlayMsg =  " Instructions: Your job is to take care of Garfield. Garfield can be sometimes annoying and will ask for food, rest and play."
let instructionMsg = "Double click 'Feed' to feed Garfield, 'Play' to play with Garfield, 'Rest' for Garfield to rest."
let instMsgcontinued = "Your game will end if Boredom, Hunger, Sleepines (shown at the top of your screen) hits 20."


let howToPlay =  " Instructions: Your job is to take care of Garfield. Garfield can be sometimes annoying and will ask for food, rest and play. Double click 'Feed' to feed Garfield, 'Play' to play with Garfield, 'Rest' for Garfield to rest.Your game will end if Boredom, Hunger, Sleepines (shown at the top of your screen) hits 20."


//_______________________________________________________________________________________________________________________________________________________________________________

//IMAGES : Array 


characterImgs = ["https://media1.giphy.com/media/KY3bghirDv3UyFInnX/200w.webp?cid=ecf05e47jm9zofbco2jpppqcy2lwygyq0al2pnek78gphpi8&rid=200w.webp&ct=g",
"https://media1.giphy.com/media/3JOy7A3NxiCZUqJo9c/200w.webp?cid=ecf05e47jm9zofbco2jpppqcy2lwygyq0al2pnek78gphpi8&rid=200w.webp&ct=g",
"https://media1.giphy.com/media/4SY6axurzhiTeVUiKY/200.webp?cid=ecf05e47x665u9t9llqdshjyg4fatzkcspssne15zu8ga67j&rid=200.webp&ct=g",
"https://media4.giphy.com/media/pzryvxGeykOxeC0fWb/200.webp?cid=ecf05e470yrxj5kfrl2wgbpbz6np5gfre3ad5zs45fz6dgmi&rid=200.webp&ct=g",]    

actionImgs = [
    "https://media3.giphy.com/media/ZgULzq4qhqafhSCBA0/giphy.webp?cid=ecf05e470yrxj5kfrl2wgbpbz6np5gfre3ad5zs45fz6dgmi&rid=giphy.webp&ct=g",
    "https://media2.giphy.com/media/KZe02gpoAj4yVjxKQt/200.webp?cid=ecf05e470yrxj5kfrl2wgbpbz6np5gfre3ad5zs45fz6dgmi&rid=200.webp&ct=g",
    "https://media3.giphy.com/media/2wYrkKvETbAwWAM4Gy/200.webp?cid=ecf05e47jm9zofbco2jpppqcy2lwygyq0al2pnek78gphpi8&rid=200.webp&ct=g",
]

otherImgs = [
    "https://media2.giphy.com/media/jbExQ3a0ikmk216MMF/200w.webp?cid=ecf05e47wtqs5bcv9tc5c25zkhw8rxhhfnhdd75sztuoj97g&rid=200w.webp&ct=g",  //game over
    "https://media3.giphy.com/media/7NISx4WCE7CI3k8PiQ/200w.webp?cid=ecf05e479pt67ua6lo8f2tcv9ch0d6m54g9m6rg6yl48hgsj&rid=200w.webp&ct=g",
    "https://cdn.wallpapersafari.com/14/53/CaNXMQ.jpg"
]

//_____________________________________________________________________________________________________________________________________________________________________________
//TURN OFF THE LIGHTS 

let buttnLight =  document.querySelector('button#light')  // querySelector()method to return light button element 


let lights = document.querySelector('body')

function turnOnLight(element) {                          //functions to change color 
    element.style.backgroundColor = "#e39782"
}

function turnOffLight(element) {
    element.style.backgroundColor = "#6698b7"
}


buttnLight.addEventListener('dblclick', e => {           //element e & arrow function, event listener 
    turnOffLight(lights)                                 //invoked ^ function 
})

buttnLight.addEventListener('click', e => {              //element e & arrow function 
    turnOnLight(lights)
})


let howToButton = document.querySelector('button#Rules')
let instruct = document.querySelector('div#text')

howToButton.addEventListener('click', e => {document.querySelector('div#text').innerHTML = howToPlay})  // one-liner code: arrow function, event listener 
howToButton.addEventListener('dblclick', e => {document.querySelector('div#text').innerHTML = "" })  

 




//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________


//Start Game 

//Prompt User to enter name
let userName = prompt('Please enter your name')
if(userName === null || userName === ""){
    alert("Please enter a valid name")
    prompt('Please enter your name')
}else {
const user = document.querySelector("#Name").innerHTML = "Garfield's Ownwer: " + userName
console.log(user)
}


//Add Event Listener to "start" button to start the game  
startButton.addEventListener('dblclick', function(){     
let ans = prompt("Are you ready to play? Type 'yes' to start")
if (ans !== "yes") {
    prompt("Please type 'yes' to start")     //if answer is yes the game will start
}



//_______________________________________________________________________________________________________________________________________________________________________________

//Increase your pet's age every x minutes

let age = 0;  //Assign variable starting at 0
let agetimer = setInterval(function(){
    console.log("Garfield is getting older")
    age++;                                              //variable will increase every 4 seconds. Every second is equal to a year

    if(age === 2) {                                     //Conditional statements used throughout the game  
        alert(ageAlert + ". Garfield is now a Junior")  //once "age" hits 2. Garfield will grow up. Image will change 
        let garfieldAge = document.querySelector('#Age').innerHTML = "Age: " + age++
        document.querySelector(".babyPet").src = characterImgs[1];    //select class from html and assign a new photo morph Garfield to an adult
        console.log(garfieldAge)                       //console.log to check if the resutls were correct  
    }
    if(age === 6) {
       alert(ageAlert + ". Garfield is now an Adult")
       let garfieldAge = document.querySelector('#Age').innerHTML =  "Age: " + age++
       document.querySelector(".babyPet").src = characterImgs[2];
       console.log(garfieldAge)
     }

     
     if(age === 14) {                                   
         alert(ageAlert + ". Garfield is now a Senior")
         let garfieldAge = document.querySelector('#Age').innerHTML =  "Age: " + age++
         document.querySelector(".babyPet").src = characterImgs[3];
         alert(winningAlert + ". This is the end of the game. Thanks for taking care of me " + user + "! ")
         clearInterval(agetimer)
         console.log(garfieldAge)
     }      
}, 5000);


//_________________________________________________________________________________________________________________________________________________________________________________

//Increase your pet's hunger, sleepines and bored metrics on an interval of your choosing

//HUNGER

let hungerStart = 0;                                                   //same idea^^
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
    document.querySelector(".GameOver").src = otherImgs[1];
}}, 800);

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
    let bored = document.querySelector('#Boredom').innerHTML =  "Boredom: " + boredStart 
     console.log(bored)
    console.log(boredStart)
if(boredStart === 20) {
    let bored = document.querySelector('#Boredom').innerHTML =  "Boredom: " + boredStart 
    console.log(bored)
    clearInterval(boredTimer)
    //alert(gameOverAlert)
    document.querySelector(".GameOver").src = otherImgs[1];
}}, 700);

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
    alert("GAME OVER")
    document.querySelector(".GameOver").src = otherImgs[0];
}}, 1100);

//will perform the below when rest button is double clicked 
 restButton.addEventListener('dblclick', function(){
 sleepStart-= 1;
let sleep = document.querySelector('#Sleepines').innerHTML =  "Sleepines: " + sleepStart 
console.log(sleep)
 })

})


//________________________________________________________________________________________________________________________________________________________________________________