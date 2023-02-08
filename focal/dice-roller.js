//let dice = function (max, min) {
  //for (let dice of dice){
  //return Math.floor (Math.random () * (max - min) + min);
  //}
//}
//console.log (dice (1,7));

//grab user input of a number
const userInput = Number(process.argv.slice(2))
//console.log(userInput)
const userOutput = [];
for (i = 0; i < userInput; i++) {
  let random = ( Math.floor (Math.random () * (7 - 1) + 1));
  userOutput.push(random);
}
console.log('rolled ' + userInput + ' dice: ' + userOutput);
  
//generate a number between 1-6 by the user amount of times


//output message random number