// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.
// .toString() returns a number as a string.
let a = 15;
a.toString();
console.log(a) // practice 1 using let and letter ('let' identifer that may be reassigned)

let hello = 20;
hello.toString();
console.log(hello) // practice 2 using let and word

const displayString = () => {
  const b = 25;
  b.toString();
  document.getElementById('demo').innerHTML = b;
} // practice 3 using const and onclick button ('const' identifer that won't be reassigned)


// Write a JavaScript program to convert a string to the number.
//parseInt() function, which parses a string and returns an integer 
// know the differences between string – a string literal to be parsed; radix – an integer between 2 and 36.
let x = parseInt(10, 2);
console.log(x)
// practice 1 using let

const y = '8';
console.log(parseInt(y, 10));
// expected output: 8 
// practice 2 using const 

const displayNum = () => {
  const z = '100';
  parseInt(50.25, 100, );
  document.getElementById('demo2').innerHTML = z;
}
// practice 3 using const and onclick button





// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String
const dataType = (car) => {
  return typeof car;
}



let carRun = true
console.log(dataType(true))
// boolean

const displayOperator3 = () => {
  const itemThree =  true
  document.getElementById('item3').innerHTML = (typeof itemThree);
}
// boolean & button

const walk = null
console.log(walk)
// null



const displayOperator = () => {
const itemOne = 0
document.getElementById('item1').innerHTML = (typeof itemOne);

}
//number & button

let miles = 50;
console.log(dataType(miles))
// number

let carColor;
console.log(dataType(carColor))
// undefined

const displayOperator2 = () => {
  const itemTwo = ' '
  document.getElementById('item2').innerHTML = (typeof undefined);

  }
 //undefined & button 

function myCar(f) {
  if (isNaN(f)) {
    return NaN;
  }
  return f;
}
console.log(myCar('NotANumber'))
// NaN


let vechicle = 'van, suv, truck';
console.log(dataType(vechicle))
// string

const displayOperator4 = () => {
  const itemFour = 'cat, dog, hamster'
  document.getElementById('item4').innerHTML = (typeof itemFour);
  
  }
  // string & button



// Write a JavaScript program that adds 2 numbers together.
let num1 = 5;
let num2 = 1;
let sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
// practice 1 adding 2 numbers 

const displaySum = () => {
  let number1 = 5;
  let number2 = 2;
  let thesum = number1 + number2;
  document.getElementById('demo3').innerHTML = thesum;
} // practice 2 adding 2 numbers onclick button

function add_number() {

  let first_number = parseInt(document.getElementById("Text1").value);
  let second_number = parseInt(document.getElementById("Text2").value);
  let result = first_number + second_number;

  document.getElementById('txtresult').value = result;
} // practice 3 user input 2 numbers using function

// Write a JavaScript program that runs only when 2 things are true.
const trueNum = (ab) => {
  if (ab > 0 && ab < 10) {
    return true;
  } else {
    return false;
  }
}
console.log(trueNum(6));

function display_function() {
  alert(true_num(1));
}

const true_num = (xy) => {
  if (xy > 0 && xy < 10) {
    return true;
  } else {
    return false;
  }

}


// Write a JavaScript program that runs when 1 of 2 things are true.
const trueNum1 = (a) => {
  if (a > 0 || a < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(trueNum1(3));

function display_function1() {
  alert(true_num1(9));
}
const true_num1 = (a) => {
  if (a > 0 || a < 10) {
    return true;
  } else {
    return false;
  }
}






// Write a JavaScript program that runs when both things are not true.
const falseNum = (a) => {
  if (a > 0 && a < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(falseNum(15));


function display_function2() {
  alert(false_num(-7));
}
const false_num = (a) => {
  if (a > 0 && a < 10) {
    return true;
  } else {
    return false;
  }
}




// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
