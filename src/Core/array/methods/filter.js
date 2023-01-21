//Return an array of all the values in the ages array that are 18 or over:
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

let a = ages.filter(checkAdult, 18);
console.log(a);   //32,33,40
