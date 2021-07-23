let marksWeight= 95;
let marksHeight =1.88;
let johnsWeight= 85;
let johnsHeight =1.76;

let marksBMI=marksWeight/(marksHeight*marksHeight);
let johnsBMI=marksWeight/(johnsHeight*johnsHeight);

let markHigherBMI=marksBMI>johnsBMI;
console.log( 'Marks BMI = '+marksBMI);
console.log('Johns BMI = '+johnsBMI);
if(markHigherBMI==true){
    console.log('Mark has a higher BMI than John.');
}else{
    console.log('John has a higher BMI than Mark.');
}