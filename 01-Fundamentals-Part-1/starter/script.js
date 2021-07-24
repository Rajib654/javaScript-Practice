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
const firstName='Rajib';
const age =15;
if(age>=18){
    console.log(`${firstName} can start driving license`)
}else{
    console.log(`${firstName} is too young, wait for ${18-age} years`)
}