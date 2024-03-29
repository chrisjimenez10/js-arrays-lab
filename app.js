/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
foods.push("pizza", "cheeseburger");

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
foods.unshift("taco");


console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
const favFood = foods.at(1);

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
foods.splice(2, 0, "tofu"); //First parameter indicates the index we want to start, 0 indicates we are not deleting anything, third parameter is the item we are inserting

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
foods.splice(1, 1, "sushi", "cupcake"); //The second parameter indicates how many items in the current array are going to be deleted following the start of the insertion (indicated by the first parameter via index value)

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
//const foodsCopy = [...foods];
let yummy = foods.slice(1, -2); //The slice() method takes two arguments - the first parameter indicates the index position we are starting on the current array and the second parameter indicates the end (which we dont include)/If it's negative, it's counting from the end to start

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
let soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
let allFoods = foods.join(" -> "); //In the parameter we assign the separator/delimiter as a string and will be used to separate the elements of array when they become a string

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/
let hasSoup = foods.includes("soup");

console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

function isEven(n){ //Using the modulo operator as the method to check if elements in array are even numbers or odd numbers
   return n % 2 === 0; //Checks for the remainder after numbers are divided - if 0 then function returns true (even)
}

for(let oddNumber of nums){ //Using for...of loop because we just want the result of even numbers being being push() into the odds array
    if(isEven(oddNumber) === false){ //Identifying the odd numbers, which will return false from the modulo operator
        oddNumber; //assigning element iteration to variable to reference during push() method
        odds.push(oddNumber);
    }
}

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
const fizz = []; //Setting up the arrays to populate
const buzz = [];
const fizzbuzz = [];

const divisor1 = 3; //Declaring the divisors as variables to use in the condition
const divisor2 = 5;

nums.forEach((x)=> {
    if(x % divisor1 === 0 && x % divisor2 === 0){ //If the element is divisible by the divisor then remainder is zero, which returns true - using logical operator to ensure element is divisible by both divisors to populate fizzbuzz array
        x;
        fizzbuzz.push(x);
    } if(x % divisor1 === 0){ //Tried to use if...else and else...if statements, but it didn't work - For those elements that can populate all three arrays, only showed up in the fizzbuzz (I think it's because with else...if/if...else, it only allows it to hold true for one condition) - FEEDBACK PLEASE!
        x; 
        fizz.push(x);
    } if(x % divisor2 === 0){
        x;
        buzz.push(x);
    }
})

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length -1]; //Instead of hard-coding the index [3], we used the syntax for identifying the last element in an array (taking the length of array and subtracting one, since max index value is -1 of its length)

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
const num = numArrays[numArrays.length - 2][1];

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/
let total = 0;

for(let i=0; i<numArrays.length; i++){ //I initially wanted to do two forEach(), but I was having issue with assigning the variable "total" in the nested forEach() - I would get error for the "=" in total = total + x (FEEDBACK Please!)
      numArrays[i]; 
      //console.log(numArrays[i]); // I was having issue getting a result from the nested forEach(), so wanted to print the result of first loop as a starting reference point 
      numArrays[i].forEach((x)=> { //This forEach() is iterating over the second set of arrays - using the for...loop notation "numArrays[i]" helped visualizing how each element (in this case an entire array) from the main array would also get iterated and its own elements would be added together
         total = total + x; //At this point, each number is added individually to the previous number and so on...(broke down the two-dimensional array into individual numbers/elements of the nested arrays)
      })
}      
//I was on this exercise for a while - tried two forEach(), first loop forEach with nested for...loop, and eventually was able to run the above code successfully
console.log('Exercise 15 result:\n', total);
