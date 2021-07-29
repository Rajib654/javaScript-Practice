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
// const calcAvarage=(score1,score2,score3)=> (score1+score2+score3)/3;
// let avgDolphins=calcAvarage(44,23,71);
// let avgKoalas=calcAvarage(65,54,49);
// const double=avgScore=>avgScore*2;
// function checkWinner(avgDolphins,avgKoalas){
//     const doubleDolphins=double(avgDolphins);
//     const doubleKoalas=double(avgKoalas);
//     if(avgDolphins>=doubleKoalas){
//         console.log(`Dolphins win ${avgDolphins} VS ${avgKoalas}`);
//     }else if(avgKoalas>=doubleDolphins){
//         console.log(`Koalas win ${avgKoalas} VS ${avgDolphins}`); 
//     }else{
//         console.log('No Teams Wins');
//     }
// }
// checkWinner(avgDolphins,avgKoalas);
// // Test 2
// avgDolphins=calcAvarage(85,54,41);
// avgKoalas=calcAvarage(23,34,27);
// checkWinner(avgDolphins,avgKoalas);

// ***********Array***********
/*
// Declare an Array with Array literal syntax
const friends=['Ujjal','Ezharul','Zonayed'];
// Declare an Array with Array constructor syntax
const birthYear=new Array(1985,1991,1969);
console.log(friends[0]);//this is log first element of Array
console.log(friends[friends.length-1]);//this is shows last element of Array
console.log(friends.indexOf('Ujjal'));//this is log index Number of 'Ujjal'
console.log(friends.includes('Ujjal')) //this is checked avability of 'Ujjal' in friends Array.is 'Ujjal' is available in friends Array its return true else it return false //output=true;
console.log(friends.includes('Sajib')); //output =false;
// push Methode
friends.push('Sajib'); //here push() methode add element 'Sajib' in friends Array in last.
console.log(friends);
console.log(friends.push('Sajib'))

// unshift Methode
friends.unshift('Sweety'); //here unshift() methode add element 'Sweety' in friends Array in first.
console.log(friends);
console.log(friends.unshift('Sweety'));

// pop Methode
friends.pop(); //here push() methode remove element 'Sajib' in friends Array from last.
console.log(friends);
console.log(friends.pop());
// shift Methode
friends.shift(); //here shift() methode remove element 'Sweety' in friends Array in first.
console.log(friends);
console.log(friends.shift());

*/

//**************Cooding Challeng-2 */

/*
const bills=[125,555,44]
const tip=[];
const total=[];
function calcTip(bill){
    if (bill>=50&&bill<=300){
        const tips= bill*0.15;
        tip.push(tips);
        return tips;
    }else{
        const tips2= bill*0.2;
        tip.push(tips2)
        return tips2;
    }
}
function totalBT(bill,tips){
    const totalBill=bill+tips;
    total.push(totalBill)
}
//Calling calcTip function
console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));
//Calling totalBT function
totalBT(125,tip[0]);
totalBT(555,tip[1]);
totalBT(44,tip[2]);
//print tip array
console.log(tip);
//print total array
console.log(total)
*/
//*************Objects ****************************
// const rajib={
//     firstName:'Rajib',
//     lastName:'Hossain',
//     age:2021-1996,
//     job:'Web Developer',
//     friends:['Sweety','Zikra','sajib']
// }
// const intersetedIn=prompt('What do you want to know about Rajib? Chose Between firstName, LastName,age,job,friends');
// if(rajib[intersetedIn]){
//     console.log(rajib[intersetedIn]);
// }else{
//     console.log('Wrong Keyword!Chose Between firstName, LastName,age,job,friends')
// }
// //challenge
// //rajib has 3 friends & his best friend is sweety
// console.log(`${rajib.firstName} has ${rajib.friends.length} friends & his best friend is ${rajib.friends[0]} `);
/*
const rajib={
        firstName:'Rajib',
        lastName:'Hossain',
        birthYear:1996,
        job:'Web Developer',
        friends:['Sweety','Zikra','sajib'],
        hasDrivingLicense:false,
        calcAge:function(){
            this.age= 2021-this.birthYear;
            return this.age;
        },
        getSummery:function(){
            return `${this.firstName} is ${this.calcAge()} Years old ${this.job} and he has ${this.hasDrivingLicense? 'a' :'no'} Driving License`
        }
    }
    console.log(rajib.calcAge());
    
//Challenge 
console.log(rajib.getSummery());
*/
//Cooding Challenge
/*
const mark={
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
const john={
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
if(mark.calcBMI()>john.calcBMI()){
    console.log(`${mark.fullName} BMI (${mark.calcBMI()}) Higher than ${john.fullName} (${john.calcBMI()})`);
}else if(john.calcBMI()>mark.calcBMI()){
    console.log(`${john.fullName} BMI (${john.calcBMI()}) Higher than ${mark.fullName} (${mark.calcBMI()})`);
}
*/


