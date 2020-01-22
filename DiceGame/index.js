// logic first
//html&css
//1. create random number between 1 and 6

let rollCeil;
let pointScored = 0;
// let currentScore;

const diceRoll = () => {
    rollCeil = Math.ceil(Math.random() * 6); //remove let
    console.log(`I am the rollCeil variable ${rollCeil}`)

}

const winOrLose = () => {
    // rollCeil = 2;  // if roll 1 they loose so starts at the next number 2 as you can't loose with 2
    // pointScored = 21;
    // updatePointScore() //can't have the function here
    if (rollCeil == 1) { //if roll 1 they loose
        console.log("Try again");
        pointScored = 0;
    } else if (pointScored >=20) {
        console.log("How did you win");
        pointScored = 0;
    } else {
        console.log("Carry on")
    }
    updatePointScore() 
}
// currentScore += diceRoll
// diceRoll();

    const updatePointScore = () => { // addition function which could be used elsewhere
        diceRoll()
        pointScored += rollCeil; //thought it was diceRoll
        console.log(`My total is ${pointScored}`);
    }

    updatePointScore()
    updatePointScore()
    updatePointScore()



// console.log(rollCeil); //havent called function and got no value so will be undefined
// diceRoll();
// winOrLose();
// diceRoll();

// console.log(rollCeil);

// let rollCeil = Math.ceil(Math.random() * 6); //using ceil to get number between 1 and 6
// let rollFloor = Math.floor(Math.random() * 6);



