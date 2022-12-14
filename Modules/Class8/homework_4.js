
/**
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */
 const sports = ['Football','Soccer', 'Baseball','Rugby'];
 let word ='BASKETBALL';
 if(word === sports[0]||word === sports[1]||word === sports[3]){
     console.log("BASKETBALL is mentioned in the sports array");
 }else if ( word === sports[2]){
     console.log( "BASKETBALL is present at index-2")
 }else if (word !== sports[0] || word !== sports[1] || word !== sports[2] || word !== sports[3]){
     sports.fill(word,2,3)
     console.log(sports)
 }

/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */
 let planets = ['Earth','Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 let planet = planets[0];
 if( planet == 'Earth'){
   console.log("Earth is mentioned in expected index") ;
 
 }else{
     planets.unshift('Earth')
     console.log(planets)
 }
/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */
 let studentScore ='149';
 let maxScore = 150;
 
 let grade = (studentScore/maxScore)*100
 console.log(grade)
 
 if ( grade >= 91 && grade <= 100){
     console.log('Grade A')
 }else if ( grade >= 81 && grade<=90.99){
     console.log('Grade B')
 }else if (grade >= 71 && grade <= 80.99){
     console.log('Grade C')
 }else if ( grade >=61 && grade <=70.99){
     console.log('Grade D')
 }else if (grade>=51 && grade<=60.99){
     console.log('Grade E')
 }else if (grade< 51){
     console.log('Grade F')    //all right up below
 }else if(studentScore > maxScore || studentScore < 0){
     console.log("Invalid student score")
 }else {
     console.log("Your percentage is XX.yy and your Grade is Z")
 }                       

/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */
 let myNumber = ''; //add any number in here :)
 if(myNumber%5==0 && myNumber%3!==0 ){
     console.log('divisible by 5');
 }else if (myNumber%3==0 && myNumber % 5!== 0 ){
     console.log('divisible by 3');
 }else if(myNumber % 5== 0 && myNumber % 3== 0){                   
     console.log('divisible by 5 and 3');
 }else if( myNumber %5 !== 0 && myNumber % 3 !==0){
     console.log(`${myNumber}`)
 }