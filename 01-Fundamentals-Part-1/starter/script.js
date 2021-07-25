/********************* 
let js = "amizing";
if (js === "amizing") alert("JavaScript is FUN!");

console.log(20 + 30 + 50 + 8);
*******************/
/****************** 
 
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// Re-assigned javascriptIsFun variables
javascriptIsFun = 'Yes!'
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

**************************/

//**********Math Operator */


// const now = 2021;
// const ageRajib = now - 1996;
// const ageSweety = now - 1998;

// console.log(ageRajib, ageSweety);
// console.log(ageRajib * 2, ageSweety / 2, 2 ** 3)//2**3 means 2 to the power 3,2*2*2=8


//***********Assignment Operator */


// let x = 10 + 5;//x=15
// //Re-assign the value of variables x
// x += 10; //x=x+10;  x=25;
// x++   //x=x+1;
// x--   //x=x-1;
// console.log(x);


// //Comperasion Oprator
// console.log(ageRajib > ageSweety);

// *******String Concatination************

// const firstName='Rajib';
// const job='Web Developer';
// const birthYear=1996;
// const year=2021;
// const rajib="Hi i'm "+firstName+",a "+(year-birthYear)+" years old "+job+"!";
// console.log(rajib);

// // Lets Practice this things with ES6 Templete String
// const rajibNew=`Hi i'm ${firstName},a ${year-birthYear} years old ${job}!`;
// console.log(rajibNew);

// console.log("this is a string with \n\
// multiple\n\
// line");
// // this same things with es6
// console.log(`this is a string with
// multiple
// line`);

// ***********************if else Statement**********************************
// const firstName='Rajib';
// const age =15;
// if(age>=18){
//     console.log(`${firstName} can start driving license`)
// }else{
//     console.log(`${firstName} is too young, wait for ${18-age} years`)
// }

/*

// *************Type Conversion************
const inputYear="1991";
console.log(inputYear+18);//output=199118 this is string
console.log(Number(inputYear)+18); //here firstly convert string(1991) to number by the Number() function than addition operator works.and given output=2009 as a number
console.log(Number('rajib')); //output = NaN; that means 'rajib' not a number;
console.log(typeof NaN); //output = number; actually NaN is a Invalid Number
console.log(String(23),23); //String() function convert Number to String;

// ***********Type Coercion**************

console.log('I am '+ 24+ ' Years Old'); //Here 23 number automatically convert to string ---the + operator forced 23 to convert to string
console.log('23'-'10'-3); //output= 10; because here String(23 & 10) automatically convert to Number ----the (-)Operator force to convert string to number
console.log('15'*'2'); //output=30;
console.log('14'/2) //output =7;
console.log('145'>25); //output=true;


let n='1'+1;//n=11 as string
n-=1 //n='11'-1;
console.log(n)

*/

/*

//Five Falsy Value in JS
// 0,"",Undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
 
let money =0;
if(money){
    console.log(`Don't Spend it all`); 
}else{
    console.log('You should get a job');
}

let height=0;
if(height){
    console.log(`Height is ${height}`);
}else{
    console.log('Height is not defined');
}
*/

/*
//Equality Operators

const age='18';
if(age===18) console.log('You just became an adult :D (Strict)');
if(age==18) console.log('You just became an adult :D (lose)');


//Take input from user by promt function
const favoriteNumber=Number(prompt('Input Your Favorite Number'));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);
if(favoriteNumber===23){
    console.log('Your input number is 23');
}else if(favoriteNumber===7){
    console.log('Your input number is 7'); 
}else{
    console.log('Input Number dose not match storage Number')
}
if(favoriteNumber!==23) console.log('Why not input 23?')

*/
// const isDrivingLicense=true;
// const isGoodVision=true;
// const isTired=false;

// console.log(isDrivingLicense||isGoodVision||isTired);
// console.log(isDrivingLicense&&isGoodVision&&isTired);

// if(isDrivingLicense&&isGoodVision&& !isTired){
//     console.log('Rajib is able to drive');
// }else{
//     console.log('someone else should drive....');
// }

//**************** */ Cooding Challenge-2***************

// let dolphinScore=[97,112,101];
// let koalaScore=[109,95,106];

// let sumDol=0;
// let sumKol=0;
// let resultDolphin;
// let resultKoala;
// for(let i=0;i<dolphinScore.length;i++){
//     resultDolphin=sumDol+=dolphinScore[i];  
// }
// for(let j=0;j<koalaScore.length;j++){
//     resultKoala=sumKol+=koalaScore[j];  
// }
// const dolphinAvarageScore=resultDolphin/3;
// const koalaAvarageScore=resultKoala/3;
// console.log(dolphinAvarageScore);
// console.log(koalaAvarageScore);

// if(dolphinAvarageScore>koalaAvarageScore&&dolphinAvarageScore>=100){
//     console.log('Dolphins Team Winner');
// }else if(koalaAvarageScore>dolphinAvarageScore&&koalaAvarageScore>=100){
//     console.log('Koalas Team Winner');
// }else if(dolphinAvarageScore===koalaAvarageScore&&dolphinAvarageScore>=100&&koalaAvarageScore>=100){
//     console.log('Draw the game');
// }else{
//     console.log('No one Won the Troffy');
// }


// const day='thusday';
// if(day==='monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }else if(day==='tuesday'){
//     console.log('Prepare theury vedios');
// }else if(day==='wednesday'||day==='thusday'){
//     console.log('Write code example');
// }else if(day==='friday'){
//     console.log('Record vedios');
// }else if(day==='saturday'||day==='sunday'){
//     console.log('Enjoy the weekend');
// }else{
//     console.log('Not a valid day')
// }

// ***********Switch Statement****************************


// const day = prompt('Input your Favorite Number');
// switch (day){
//     case '1':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case '2':
//         console.log('Prepare theury vedios');
//         break;
//     case '3':
//     case '4': 
//         console.log('Write code example');
//         break;
//     case '5':
//         console.log('Record vedios');
//         break;
//     case '6':
//     case '7':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// ****************Conditional/Ternary Operator***************

const age =15;
age>=18 ? console.log('You able to drink wine') : console.log('You able to drink water');

const drink=age>=18 ? 'wine' : 'Water';
console.log(drink);

console.log(`I like to drink ${age>=18 ? 'wine' : 'Water'}`);
