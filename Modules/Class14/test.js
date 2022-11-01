
// Question - 1 - 20
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 */ 

 function removeNumFromArray(num, numArray) {
let newArray = ar.filter((item) => item !== num)
 return newArray
 }

const ar = [1, 2, 3, 4, 5];
const numArrayAfterRemoval1_1 = removeNumFromArray(5, ar);
console.log(numArrayAfterRemoval1_1);


// Question - 2 - 30
/**
 * Create a function to convert all student-names into Titlecase.
 * Return the updated allStudentsData
 * 
 */


let allStudentData2_1 = [
   {
       id: 1,
       name: 'haRrY',
   },
   {
       id: 2,
       name: 'KiNG',
   },
   {
       id: 3,
       name: 'laNa',
   },
   {
       id: 4,
       name: 'cHaSe',
   },
   {
       id: 5,
       name: 'mAYa',
   }
];

function titleCaseAllStudentNames(allStudentData) {

    for( const Name in allStudentData){
         let temp = allStudentData[Name].name
         
         
        let title= temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase()
        
          // resultString = resultString + arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' '                                               
         
       console.log(` id:${[Name]}  \nname:${title}`)
      
    }
  
}
console.log(titleCaseAllStudentNames(allStudentData2_1)) 




    









