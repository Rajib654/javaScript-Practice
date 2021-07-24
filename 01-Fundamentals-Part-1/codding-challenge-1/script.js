let marksWeight= 95;
let marksHeight =1.88;
let johnsWeight= 85;
let johnsHeight =1.76;

let marksBMI=marksWeight/(marksHeight*marksHeight);
let johnsBMI=marksWeight/(johnsHeight*johnsHeight);

let markHigherBMI=marksBMI>johnsBMI;

if(markHigherBMI){
    console.log(`Mark BMI (${marksBMI}) higher than John BMI (${johnsBMI}).`);
}else{
    console.log(`John BMI (${johnsBMI}) higher than Mark BMI (${marksBMI}).`);
}