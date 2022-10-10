/**
 * #1 if the length of sentence1 grater than or equals to 10
      assign 15 in the result1
      otherwise
      assign 10 in the result1

      given template :
      const sentence1 = 'Hello Dear, how are you doing?';
      let result1 = 0;                             
      console.log(`\n\nresult1 -> %{result1}`);
 */
     const sentence1 = 'Hello Dear, how are you doing?';
     let result1 = 0;   
     let sentence1Length = sentence1.length>= 10 ? 15 : 10   
     result1 = sentence1Length
     console.log(`\n\nresult1 -> ${result1}`);

/**
 *  #2  replace all instances of a or A with 'Alpha',print the result in console
 */


const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes'
let sentence2Replace = sentence2.replace(/a/gi, 'Alpha');
console.log(`sentence2Replace -> ${sentence2Replace}`);

/**
 *  #3: 
 * 1)the length  of sentence3 // not done
 * 2)does sentence3 starts with 'HeaLTh'(ignore cases) //true
 * 3)does sentence3 contains with 'Body'(ignore cases) // true
 * 4)index of 'BoDy' in sentence3(ignore cases) //
 * 5) the last-character in sentence3 / .
 * 6)word 'BoDy' is present only once(true or false) (ignore cases)
 */
 
 const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL."
 let sentence3Length = sentence3.length;
 console.log(`sentence3Length -> ${sentence3Length}`);
 
 let sentence3LowerCase = sentence3.toLowerCase();
 let sentence3Start = sentence3LowerCase.startsWith('health');
 console.log(`sentence3Start -> ${sentence3Start}`);
 
 let sentence3Contains = sentence3LowerCase.includes('body');
 console.log(`sentence3Contains -> ${sentence3Contains}`);
 
 let bodyIndexSent3 = sentence3LowerCase.indexOf('body');
 console.log(`bodyIndexSent3 -> ${bodyIndexSent3}`);
 
 let sentence3Last =sentence3[sentence3.length -1]; // is there another way to do it?
 console.log(`sentence3Last -> ${sentence3Last}`);

 // I am confused about #6. 