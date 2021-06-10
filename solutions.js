// Write your Solutions here!!

function doingJavaScriptRightNow(){
    return true;
}


function onMarsRightNow(){
    return false;
}

function isNegative(input) {
    let answer = parseFloat(input);
    if (isNaN(answer)){
   return NaN;
}
     return input <0;
}



function isPositive(input) {
    let answer = parseFloat(input);
    if (isNaN(answer)){
   return NaN;
}
     return input >0;
}

function plusTwo(input) {
       return parseFloat(input) + 2;
}

function addOne(input) {
    return parseFloat(input) + 1;
}


function isNumeric(num) {

    if (isNaN(num) || (typeof num == 'boolean' || num == null || num === 'string' || num === '')) {
        return false;
    }
    if (typeof num === 'number' || typeof num === 'string') {
        return true;
    }
}

 /*
function isNumberic(value){
 let answer= parseFloat(value);
 return isNaN(answer);
}

  */

function isNotNumeric(value){
    if(isNaN (value) || typeof value == 'boolean' || value == null || value == 'string'){
        return true;
    }
    if (value === '') {
        return true;
    }
    return false;
}
/*
function isNotNumberic(vaalue);{
 let answer= parseFloat(value);
 return isNaN(answer):
 }

]
 */


function sayHello(strg) {

    if (typeof strg == 'number' || typeof strg === 'boolean' || strg == null || strg ===''|| !isNaN(parseFloat(strg))  ) {
        return "Hello, world!";
    }
    else {
        return "Hello, " + strg + "!";
    }
}

console.log(sayHello('ozzy'));
console.log(sayHello());

function isVowel(value) {
    if (typeof value !== 'string')
        return false;
    if (value.length !== 1)
        return false;

        value = value.toUpperCase();
        switch (value) {
            case"A":
                return true;
            case"E":
                return true;
            case"I":
                return true;
            case"O":
                return true;
            case "U":
                return true;
        }
        return false;
}




