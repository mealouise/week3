let rollCeil;

const diceRoll = () => {
    rollCeil = Math.ceil(Math.random() * 100); //remove let
    console.log(`I am the rollCeil variable ${rollCeil}`)

}