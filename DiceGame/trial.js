
let rollCeil;

const diceRoll = () => {
    rollCeil = Math.ceil(Math.random() * 6); //remove let
    console.log(`I am the rollCeil variable ${rollCeil}`)
}