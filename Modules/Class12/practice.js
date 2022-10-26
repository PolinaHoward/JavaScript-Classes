/**Create a function to return reverse a given array (without using reverse-function from array-class)
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> [hopeful, peaceful, live, laugh, hello]
        input -> [hello, laugh, live, king, queen]
        ans -> [queen, king, live, laugh, hello]
        let s = ['hello', 'laugh', 'live', 'king', 'queen'] */


        let s = ['hello', 'laugh', 'live', 'peaceful', 'hopeful']
  function stringReverce (userSentence){
  let result = ''
 for ( let i=userSentence.length -1 ; i>=0 ; i--){
   result = result + userSentence[i] + ' '
 }
return result.trim()
  }
  console.log(stringReverce(s));

  
/**Create a function to return the largest string(s) from a given string array.
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> peaceful
        input -> [hello, laugh, live, king, queen]
        ans -> hello, laugh, queen
         let sent = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];*/
         let sent =['hello', 'laugh', 'live', 'peaceful', 'hopeful']
        function findLargestString ( userInput){
            let longestWord = '';
         userInput.forEach(function(word){
          if(word.length> longestWord.length){
            longestWord =word
          }
         });
         return longestWord
         }    
           console.log(findLargestString(sent))
/*Create a function to return color name(s) appearing maximum number of times in given string array
    example:
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
        ans -> red
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
        ans -> blue, red
        input -> []
        ans -> 
        */




/** 
Create a function to return minimum value in the given numbers-array
    example:
        input -> [12, 34, 25, 7, 4, 67, 19]
        ans -> 4
        input -> [34, 54, 12, -8, 0, 45]
        ans -> -8
        input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
        ans -> 10
        */
        function findNumber ( userArray){
            let minNumber = userArray[0]
         for (let i = 0; i < userArray.length  ; i++){
            if (userArray[i] < minNumber ){
                minNumber = userArray[i]
            }
         }
           return minNumber
        }
        console.log(findNumber([34, 54, 12, -8, 0, 45]))