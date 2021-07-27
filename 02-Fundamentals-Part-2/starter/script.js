'use strict';
/*

let hasDriversLicense=false;
const passTest=true;
if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log("I can Drive");

// let interface =true;
// let private=5635;
*/
// ***************Function**************
// function fruitProcessor(oranges,apples){
//     const juice=`juice with ${oranges} Oranges and ${apples} Apples`;
//     return juice;
// }
// const juiceWithApple=fruitProcessor(0,5);
// const juiceWithOrangeApple= fruitProcessor(2,3);
// console.log(juiceWithApple);
// console.log(juiceWithOrangeApple);

// // Function Decleration
// const age1=calcAge1(1991);
// function calcAge1(birthYear){
//     return 2037-birthYear;
// }
// console.log(age1);

// // Function Expression
// const calcAge2=function(birthYear){
//     return 2037-birthYear;
// }
// const age2=calcAge2(1991);
// console.log(age1,age2);
// // Arrow Function
// const calcAge3=birthYear=>2037-birthYear;
// const age3=calcAge3(1991);
// console.log(age3);

// Calculate Retuirment Age using arrow function
// const ageLeftRetairment= (birthYear,firstName)=>{
//     const age= 2037-birthYear;
//     const retairment=65-age;
//     return `${firstName} is Retaire in ${retairment} Years`;
// }
// console.log(ageLeftRetairment(1991,'Rajib'));

// Function call another function

// const cutFruits=fruit=>fruit*4;

// const fruitProcessor=(apple,orange)=>{
//     const pieceApple=cutFruits(apple);
//     const pieceOrange=cutFruits(orange);
//     return `Juice with ${pieceApple} Piece Apple and ${pieceOrange} Piece Orange`
// }
// console.log(fruitProcessor(2,3));

// Calculate Retuirment Age using arrow function
// const calcAge=birthYear=>2037-birthYear;
// const ageLeftRetairment= (birthYear,firstName)=>{
//     const age=calcAge(birthYear)
//     const retairment=65-age;
//     if(retairment>0){
//         console.log(`${firstName} is Retaire in ${retairment} Years`);
//         return retairment;
//     }else{
//         console.log(`${firstName} has already retaired`);
//         return -1;
//     }
// }
// console.log(ageLeftRetairment(1991,'Rajib'));
// console.log(ageLeftRetairment(1970,'sarah'));

// Cooding Challenge-1
// Test 1
const calcAvarage=(score1,score2,score3)=> (score1+score2+score3)/3;
let avgDolphins=calcAvarage(44,23,71);
let avgKoalas=calcAvarage(65,54,49);
const double=avgScore=>avgScore*2;
function checkWinner(avgDolphins,avgKoalas){
    const doubleDolphins=double(avgDolphins);
    const doubleKoalas=double(avgKoalas);
    if(avgDolphins>=doubleKoalas){
        console.log(`Dolphins win ${avgDolphins} VS ${avgKoalas}`);
    }else if(avgKoalas>=doubleDolphins){
        console.log(`Koalas win ${avgKoalas} VS ${avgDolphins}`); 
    }else{
        console.log('No Teams Wins');
    }
}
checkWinner(avgDolphins,avgKoalas);
// Test 2
avgDolphins=calcAvarage(85,54,41);
avgKoalas=calcAvarage(23,34,27);
checkWinner(avgDolphins,avgKoalas);
