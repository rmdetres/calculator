
let numbersArray =[];
let numbersArrayBeforeAction = [];
let captureOperator = '';
let newCaptureOperator= [];
let displayTotal = [];



//add event listers
const zeroButton = document.getElementById('0');
zeroButton.addEventListener('click', function() {
console.log("I clicked zero")
numbersArray.push(0);
console.log(numbersArray);
displayTotal.push(0);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));

});

const oneButton = document.getElementById('1');
oneButton.addEventListener('click', function() {
numbersArray.push(1);
console.log(numbersArray);   
console.log("I clicked one")
displayTotal.push(1);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});


const twoButton = document.getElementById('2');
twoButton.addEventListener('click', function() {
numbersArray.push(2);
console.log(numbersArray);   
console.log("I clicked two")
displayTotal.push(2);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});

const threeButton = document.getElementById('3');
threeButton.addEventListener('click', function() {
numbersArray.push(3);
console.log(numbersArray);
console.log("I clicked three");
displayTotal.push(3);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});

const fourButton = document.getElementById('4');
fourButton.addEventListener('click', function() {
numbersArray.push(4);
console.log(numbersArray);
console.log("I clicked four");
displayTotal.push(4);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});

const fiveButton = document.getElementById('5');
fiveButton.addEventListener('click', function() {
numbersArray.push(5);
console.log(numbersArray);
console.log("I clicked five")
displayTotal.push(5);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));});

const sixButton = document.getElementById('6');
sixButton.addEventListener('click', function() {
numbersArray.push(6);
console.log(numbersArray);
console.log("I clicked six");
displayTotal.push(6);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});

const sevenButton = document.getElementById('7');
sevenButton.addEventListener('click', function() {
numbersArray.push(7);
console.log(numbersArray);
console.log("I clicked 7");
displayTotal.push(7);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));

});

const eightButton = document.getElementById('8');
eightButton.addEventListener('click', function() {
numbersArray.push(8);
console.log(numbersArray);
console.log("I clicked 8");
displayTotal.push(8);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});

const nineButton = document.getElementById('9');
nineButton.addEventListener('click', function() {
numbersArray.push(9);
console.log(numbersArray);
console.log("I clicked 9");
displayTotal.push(9);
document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});



///working here-- 


const divideButton = document.getElementById('/');
divideButton.addEventListener('click', function() {
    newCaptureOperator.push('/');
    let lastNumber = numbersArray.join('');
    numbersArrayBeforeAction.push(lastNumber);
    numbersArray.length = 0;
    console.log(numbersArrayBeforeAction);
    console.log("I clicked /")
    displayTotal.push('/');
    document.getElementById('result').innerHTML = (String(displayTotal.join('')));});

const multiplyButton = document.getElementById('*');
multiplyButton.addEventListener('click', function() {
    newCaptureOperator.push('*');
    let lastNumber = numbersArray.join('');
    numbersArrayBeforeAction.push(lastNumber);
    numbersArray.length = 0;
    console.log(numbersArrayBeforeAction);
    console.log("I clicked *")
    displayTotal.push('*');
    document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});

const minusButton = document.getElementById('-');
minusButton.addEventListener('click', function() {
      newCaptureOperator.push('-');
      let lastNumber = numbersArray.join('');
      numbersArrayBeforeAction.push(lastNumber);
      numbersArray.length = 0;
      console.log(numbersArrayBeforeAction);
      console.log("I clicked -");
      displayTotal.push('-');
      document.getElementById('result').innerHTML = (String(displayTotal.join(''))); });


///working on this one
const plusButton = document.getElementById('+');
plusButton.addEventListener('click', function() {
    newCaptureOperator.push('+');
    let lastNumber = numbersArray.join('');
    numbersArrayBeforeAction.push(lastNumber);
    numbersArray.length = 0;
    console.log(numbersArrayBeforeAction);
    console.log("I clicked +")
    displayTotal.push('+');
    document.getElementById('result').innerHTML = (String(displayTotal.join('')));
});

  

const pointButton = document.getElementById('.');
pointButton.addEventListener('click', function() {
    numbersArray.push('.');
    console.log("I clicked .");
    displayTotal.push('.');
    document.getElementById('result').innerHTML = (String(displayTotal.join('')));

});

const clearButton = document.getElementById('c');
clearButton.addEventListener('click', function() {
    numbersArray.length = 0;
    numbersArrayBeforeAction.length = 0;
    document.getElementById('result').innerHTML = '';
    console.log("I clicked C");
    displayTotal.length = 0;

});


const equalButton = document.getElementById('=');
equalButton.addEventListener('click', function() {
    console.log(numbersArrayBeforeAction.length);
if(numbersArrayBeforeAction.length >= 1){
    let lastNumber = numbersArray.join('');
    numbersArrayBeforeAction.push(lastNumber);

    let result = Number(numbersArrayBeforeAction[0]);

    for(i=0; i < newCaptureOperator.length; i++){

        let nextNumber = Number(numbersArrayBeforeAction[i+1]);

        console.log(result);
        console.log(nextNumber);
        

        switch(newCaptureOperator[i]){
            case '+':
                    result += nextNumber;
                    break;
            case '-':
                    result -= nextNumber;
                    break;
            case '*':
                    result *= nextNumber;
                    break;
            case '/':
                    console.log("iamrunning");
                    result /= nextNumber;
                    break;
        }
       
    }

    displayTotal.length = 0;
    displayTotal.push(result);
    document.getElementById('result').innerHTML = (String(displayTotal));
    console.log(result);

    //Reset the arrays to zero
   
    newCaptureOperator.length = 0;
    numbersArray.length = 0;
    numbersArray.push(result);
    numbersArrayBeforeAction.length = 0;
}
});



 





