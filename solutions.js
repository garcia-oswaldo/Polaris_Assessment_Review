// Write your Solutions here!!

function doingJavaScriptRightNow(){
    return true;
}


function onMarsRightNow(){
    return false;
}

function isNegative(input) {
    if (input > 0 || input === 0 || input ==="0") {
        return false;
    }
    if (parseFloat(input) > 0 || parseFloat(input) < 0) {
        return true;
    }
}


function isPositive(input) {
    return input > 0;
}

function plusTwo(input) {
       return parseInt(input) + 2;
}

function addOne(input) {
    return parseInt(input) + 1;
}


function isNumeric(num) {

    if (isNaN(num) || (typeof num == 'boolean' || num == null || num === 'string' || num === '')) {
        return false;
    }
    if (typeof num === 'number' || typeof num === 'string') {
        return true;
    }
}



function isNotNumeric(value){
    if(isNaN (value) || typeof value == 'boolean' || value == null || value == 'string'){
        return true;
    }
    if (value === '') {
        return true;
    }
    return false;
}

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

function isVowel(vowel) {
if (typeof vowel === 'E' || 'e' || 'A'||'a'|| 'I' ||'i'|| 'O'|| 'o'|| 'U' || 'u'){
    return true;
}
  if (vowel =='') {
    return false;
  }
    }
