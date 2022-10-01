//[1, 2, 3, 4, 5, 6, ] = 1 - find a smaller number
// variables -  is an entity to store the data temporary,
//It gets created during the program excecution and get destroyed at the end of excecution.


/**
 * single-character 
 * gender
 * grades
 * 
 * multi-character 
 * name 
 * cityName
 * addresses
 * 
 * numbers
 * whole (age, date, numbersOfCars, year,SSN...)
 * decimal (weight, height, accountBallance...)
 * 
 * yes/no (true/false)
 *  is light on/off?
 * are you above 18?
 * 
 * 
 * Datatypes in programming :
 * 1. char (to store only sinle-characters)
 * the value/data  must be enclosed in <single-quotes>
 * 'u'
 * '1'
 * 2. String - to store multi-character data
 * the value/data  must be enclosed in <double-quotes>
 * "New York City"
 * 
 * -> JS consider char/String as String-Datatypes
 * 
 * 3. byte,short, int, long , the most usable is INT - to store a number (whole) value/data
 * 12
 * 1000
 * 12
 * 4. float,double - to store a  number (decimal) value/data
 * 12.1
 * 100.0
 * 1000.32
 * 60.2
 *   JS considers any digit (whole/decimal) as Number-Datatypes
 * 
 * 5. boolean-Datatypes - to store true/false value/data
 * 6. JS specific datatypes:
 * 
 * null -> to define nothing
 *  Datatypes of null-value data is object
 * 
 * undefined -> to define undefined
 * Datatypes of undefined-value is undefined
 * 
 * Variables:
 * depending upon the datatype-of-value , we need type of variable to store the value
 * 
 * in JS, if we want to store int-value, we need a variable 
 * 
 * Syntax to create a variable in JS:
 * 
 * let varName = myValue;
 * 
 * Creating a variable (varName) and assigning myValue to the variable
 * 
 * create a variable to store my age
 */

let myAge;
//what is the value in the value? - undefined

//to print the value inside any variable
console.log(myAge);

//to put null in the myAge1 variable
myAge =null;
console.log(myAge);

/**
 * Operator - typeof
 * 
 * helps us to check the type of value stored in the variable
 * 
 */

console.log(typeof myAge);

/**
 * 
 * Keywords to create a variable:
 * let
 * var
 * const
 * 
 * let->  does Not allow to create variables using the same name with the same scope.
 * var-> does allow to create variables using the same name with the same scope.
 * const -> to create a constant variable (assign only once)
 * 
 * let is a better option 
 * 
 * 
 */

var myName = 34;
var myName = 35;

/**
 * 
 * Good practices 
 * 1.variables :
 *    -> name should relate to the stored value
 *    -> cannot use js-keywords (let,var,typeof,console,log...)
 *    -> cant use spaces 
 *    -> never start with digit or special character
 *    -> name starts with lowercase
 *    -> use camelCase
 * 
 * 2.Package(folder)/Files :
 *    -> name should relate to the stored content in File/Package
 *    -> cannot use js-keywords (let,var,typeof,console,log...)
 *    -> cant use spaces 
 *    -> never start with digit or special character
 *    -> name starts with Uppercase
 *    -> use camelCase
 * 
 * 
 * Print like this: My name is Polina, I am 22 years old
 * console.log('My name is Polina, I am 22 years old);
 * console.log(My name is  '+userName+' , and I am '+userAge+'years old)
 *  console.log(`My name is ${userName}, I am ${userAge} years old`); -the most common is jS
 */


