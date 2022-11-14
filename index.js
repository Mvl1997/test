import rl from "readline-sync";

const number = 5;
// take range input from the user
const range = 5;

//creating a multiplication table
for (let i = 1; i <= range; i++) {
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}

/*************************************************************/

const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  console.log(`de som is ${sum}`);
}
const voorNaam = ["David", "Els", "Mo", "Bert", "Fatima", "Gunther"];
const achterNaam = [
  "Verhulst",
  "Vermeiren",
  "Michiels",
  "Legrand",
  "Errazzouki",
  "Gunther",
];

if (voorNaam.length != achterNaam.length) {
  console.log("we miss a name");
} else {
  console.log("perfect!");
}

for (let i = 0; i < voorNaam.length; i++) {
  console.log(`${voorNaam[i]} ${achterNaam[i]}`);
}
/******************************************************************** */

/*
let vriendenLijst = [];

const askHoeveel = rl.question("Hoeveel vrienden wens je in te geven?");
console.log(askHoeveel);
for (let i = 0; i < askHoeveel; i++) {
  const askPerKeer = rl.question(`Geef vriend ${i + 1} in?`);
  console.log(askPerKeer);
  vriendenLijst.push(askPerKeer);
}
/*console.log(`${vriendenLijst}     // print de lijst niet onder elkaar uit
`); */
/*
for (let i = 0; i < vriendenLijst.length; i++) { // hierdoor print de lijst wel onder elkaar uit 
  console.log(`-${vriendenLijst[i]}\n`);
}
*/
/************************************************************************************ */

function guessNumber() {
    let userIsGuessing = false;
    const toGuess = Math.floor(Math.random() * 31);
    while (!userIsGuessing) {
      let question = rl.question("Geef een getal in tussen 0 en 30 aub? ");
      if (Number(question) === toGuess) {
        userIsGuessing = true;
      } else if (question < toGuess) {
        console.log("Tip: hoger!");
      } else {
        console.log("Tip: lager!");
      }
    }
    return `Perfect! Het te raden getal was inderdaad ${toGuess} :-)`;
  }
  console.log(guessNumber());


