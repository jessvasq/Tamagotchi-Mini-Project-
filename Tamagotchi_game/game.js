
//Create CLASS

class Character {
    constructor(name, age, boredom, hunger, sleepines){
    this.name = name
    this.age = age
    this.boredom = 0
    this.hunger = 0
    this.sleepines = 0
  }
 
  hungryPhrase (){
    console.log("Hey you! Human! FEED ME! I am dying here!")
  }

  boredPhrase (){
    console.log("Hey you! Human! I've got to do something. I'm Bored!! ")
  }

  tiredPhrase(){
    console.log("Hey you! Human! I need to get some sleep")
  }


}


//Instantiate Character class for each character 
const kittenGarfield = new Character("Kitten Garfield", 1)  //age 0-1
console.log(kittenGarfield)



kittenGarfield.hungryPhrase()
kittenGarfield.boredPhrase()
kittenGarfield.tiredPhrase()


const juniorGarfield = new Character("Junior Garfield", 2) //age 1-2
console.log(juniorGarfield)

const adultGarfield = new Character("Adult Garfield", 6) //age 3-11
console.log(adultGarfield)

const seniorGarfield = new Character("Senior Garfield", 1) //age 11-14
console.log(seniorGarfield)

