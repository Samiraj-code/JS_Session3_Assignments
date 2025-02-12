//*******************************
//********* Exercise 6 *********

/*  

A:  [] is truthy, so it's converted to the boolean true
    '![]' evaluates to false
    false is a boolean, so it's converted to the number 0.

    The comparison now becomes: [] == 0

    [] is an object, and 0 is a number. JS needs to convert [] to a primitive. This involves calling the 
     valueOf() method of the object. If valueOf() doesn't return a primitive, the toString() method is called.
    [].valueOf(): For arrays, valueOf() typically returns the array itself (which is still an object, not a primitive).
    [].toString(): Since valueOf() didn't return a primitive, toString() is called. The toString() method for an array 
    joins its elements with commas. For an empty array [], it returns an empty string "".

    The comparison now becomes: "" == 0

    "" is a string, and 0 is a number. We need to convert "" to a number.
    When an empty string "" is converted to a number, the result is 0.
    The comparison now becomes: 0 == 0

*/


//*******************************
//********* Exercise 7 *********

for (var i = 10; i >= 0; i--) 
    {

        if (i == 5){
             break;
                   }
        console.log(i);

            }
/*

A:  
Output would be 10 \n 9 \n 8 \n 7 \n 6 
This output is self-explanatory as i is a counter and counts down (print) its value since it comes to 5 but when 
it is 5 it absorbs in a conditional if and consequently it would break from the for loop.

*/

//********************************
//******** Exercise 8 ************

// A:

console.log(Exercise + 8)

for (var i = 1; i <=10; i++){

    if (i % 2 === 0){

        console.log(i);

                    }

                            }

//********************************
//******** Exercise 9 ************

var count ;

for ( var i = 1; i <= 3; i++){
  
    count += i;
                            }
console.log(count);
console.log(i);

/*
 A:
 
The for loop initializes i to 1
Count = 0

Condition: i <= 3 → 1 <= 3 → true
count = count + i → count = 0 + 1 → count = 1

i: i++ → i = 2

i <= 3 → 2 <= 3 → true
count = count + i → count = 1 + 2 → count = 3

i: i++ → i = 3

i <= 3 → 3 <= 3 → true
count = count + i → count = 3 + 3 → count = 6

i: i++ → i = 4

*/

//******************************
//******* Exercise 10 **********

/*

First, evaluate (true && false) which is equals to False
then it becomes false || false which is False
then we come to false || true || "Ali" || 0
the result of first two expressions is True and
the we have true || "Ali" || 0
Since true is already a truthy value, 
the || operator short-circuits and does not evaluate the rest of the expression ("Ali" and 0).
The result is true

*/

//*****************************
//****** Exercise 11 **********

/*

The num initializes by one and by while loop it multiplies by 2
till it becomes 32 but multiplying by 2 in while loop turns out to be 64 which violates the while condition 
for the next iteration and the final result of 64 would be printed out. 

*/


//*****************************
//******* Exercise 12 *********


var sum = 0

for(a = 1; a <= 20; a++){
    if (a % 2 == 1){
        console.log(a)
        sum += a

                    }
                       }

console.log(sum)


//*****************************
//******* Exercise 13 *********

var sum = 0
var a = [1, -2, 3, 99, -2.3]

for (i of a) {
    sum += i
}

console.log(sum)


//*****************************
//******* Exercise 14 *********

function getDayOfWeek(dayNumber) {

  switch (dayNumber) {
    case 1:
      dayName = "شنبه"; // Saturday
      break;
    case 2:
      dayName = "یکشنبه"; // Sunday
      break;
    case 3:
      dayName = "دوشنبه"; // Monday
      break;
    case 4:
      dayName = "سه شنبه"; // Tuesday
      break;
    case 5:
      dayName = "چهارشنبه"; // Wednesday
      break;
    case 6:
      dayName = "پنجشنبه"; // Thursday
      break;
    case 7:
      dayName = "جمعه"; // Friday
      break;
    default:
      dayName = "Invalid";
  }

  return dayName;
}

console.log(getDayOfWeek(1));


//*****************************
//******* Exercise 15 *********

var myString = "Hello World! This is a string with some vowels.";
var vowelCount = 0;

var lowerCaseString = myString.toLowerCase();

for (var i = 0; i < lowerCaseString.length; i++) {
  var char = lowerCaseString[i];

  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    vowelCount ++; 
  }
}

console.log("تعداد حروف صدادار در رشته شما:", vowelCount);


//*****************************
//******* Exercise 16 *********

for (var i = 0; i < 3; i++) {
  var space = "";
  var star = "";
  for (var j = 0; j < 2 - i; j++) {
      space += " ";
  }
  for (var k = 0; k < 2 * i + 1; k++) {
      star += "*";
  }
  console.log(space + star + space);
}

//*****************************
//******* Exercise 17 *********


var currentNumber = 1023;

var reversedNumber = 0;

while (currentNumber > 0) {
  const lastDigit = currentNumber % 10;
  reversedNumber = reversedNumber * 10 + lastDigit;
  currentNumber = (currentNumber - lastDigit) / 10
}

console.log(reversedNumber)

//*****************************
//******* Exercise 18 *********


for (var i = 2; i <= 100; i++) {
  var isPrime = true;
  for (var j = 2; j * j <= i; j++) {
      if (i % j == 0) {
          isPrime = false;
          break;
      }
  }
  if (isPrime) {
      console.log(i);
  }
}


//*****************************
//******* Exercise 19 *********

var num = 5;
var fact = 1;

while (num > 1) {
    fact *= num;
    num--;
}
console.log("فاکتوریل عدد", 5, " =", fact);