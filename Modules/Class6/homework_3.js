

//#1 Print the length of the country name (without using string.length ot length property from string-library)
  
  let countryName= 'Russia';
  let countryName_split = countryName.split('');
  let countryNameLength = countryName_split.length;
  console.log(`Country name length -> ${countryNameLength}`)

  //#2 Find the number of words in the given sentence

  const sentence_2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL."
  let sentence_2Array = sentence_2.split(' ');
  let sentence_2AmountWords = sentence_2Array.length;
  console.log(`The number of words in given sentence -> ${sentence_2AmountWords}`)

// #3 Create abbreviation for a 4-word sentence
 // 1
let sentence = 'You aLL liVE oNCE';
sentence =sentence.toUpperCase();
let arr= sentence.split(' ');
let firstWord = arr[0];
let secondWord = arr[1];
let thirdWord = arr[2];
let forthWord = arr[3];
let result = firstWord[0].concat(secondWord[0],thirdWord[0], forthWord[0])
console.log(`Abbreviation for 'You aLL liVE oNCE' ->${result}`)

// 2
let sentence1= 'Talk tO you Later';
sentence1 =sentence1.toUpperCase();
let arr1= sentence1.split(' ');
let firstWord1 = arr1[0];
let secondWord1 = arr1[1];
let thirdWord1 = arr1[2];
let forthWord1 = arr1[3];
let result1 = firstWord1[0].concat(secondWord1[0],thirdWord1[0], forthWord1[0])
console.log(`Abbreviation for 'Talk tO you Later' -> ${result1}`)

//3
let sentence2= 'THank YOU so much';
sentence2 =sentence2.toUpperCase();
let arr2= sentence2.split(' ');
let firstWord2 = arr2[0];
let secondWord2 = arr2[1];
let thirdWord2 = arr2[2];
let forthWord2 = arr2[3];
let result2 = firstWord2[0].concat(secondWord2[0],thirdWord2[0], forthWord2[0])
console.log(`Abbreviation for 'THank YOU so much' -> ${result2}`)

//4
let sentence3= 'if i RECALL CorreCTLY';
sentence3 =sentence3.toUpperCase();
let arr3= sentence3.split(' ');
let firstWord3 = arr3[0];
let secondWord3 = arr3[1];
let thirdWord3 = arr3[2];
let forthWord3 = arr3[3];
let result3 = firstWord3[0].concat(secondWord3[0],thirdWord3[0], forthWord3[0])
console.log(`Abbreviation for 'if i RECALL CorreCTLY' -> ${result3}`)


 //#4 in Titlecase

 //1
let sentence4 = 'You aLL liVE oNCE';
sentence4 =sentence4.toUpperCase();
let arr4= sentence4.split(' ');
let firstWord4 = arr4[0].charAt(0) + arr4[0].substring(1).toLowerCase();;
let secondWord4 = arr4[1].charAt(0) + arr4[1].substring(1).toLowerCase();;
let thirdWord4 = arr4[2].charAt(0) + arr4[2].substring(1).toLowerCase();;
let forthWord4 = arr[3].charAt(0) + arr4[3].substring(1).toLowerCase();
let result4= firstWord4.concat(' ',secondWord4,' ',thirdWord4, ' ', forthWord4);
console.log(`Titlecase for 'You aLL liVE oNCE' -> ${result4}`)

//2

let sentence6 = 'Talk tO you Later';
sentence6 =sentence6.toUpperCase();
let arr6= sentence6.split(' ');
let firstWord6 = arr6[0].charAt(0) + arr6[0].substring(1).toLowerCase();;
let secondWord6 = arr6[1].charAt(0) + arr6[1].substring(1).toLowerCase();;
let thirdWord6 = arr6[2].charAt(0) + arr6[2].substring(1).toLowerCase();;
let forthWord6 = arr6[3].charAt(0) + arr6[3].substring(1).toLowerCase();
let result6= firstWord6.concat(' ',secondWord6,' ',thirdWord6, ' ', forthWord6);
console.log(`Titlecase for  'Talk tO you Later' -> ${result6}`)

//3

let sentence7 = 'THank YOU so much';
sentence7 =sentence7.toUpperCase();
let arr7= sentence7.split(' ');
let firstWord7 = arr7[0].charAt(0) + arr7[0].substring(1).toLowerCase();;
let secondWord7 = arr7[1].charAt(0) + arr7[1].substring(1).toLowerCase();;
let thirdWord7 = arr7[2].charAt(0) + arr7[2].substring(1).toLowerCase();;
let forthWord7 = arr7[3].charAt(0) + arr7[3].substring(1).toLowerCase();
let result7= firstWord7.concat(' ',secondWord7,' ',thirdWord7, ' ', forthWord7);
console.log(`Titlecase for 'THank YOU so much' -> ${result7}`)

//4
let sentence8 = 'if i RECALL CorreCTLY';
sentence8 =sentence8.toUpperCase();
let arr8= sentence8.split(' ');
let firstWord8 = arr8[0].charAt(0) + arr8[0].substring(1).toLowerCase();;
let secondWord8 = arr8[1].charAt(0) + arr8[1].substring(1).toLowerCase();;
let thirdWord8 = arr8[2].charAt(0) + arr8[2].substring(1).toLowerCase();;
let forthWord8 = arr8[3].charAt(0) + arr8[3].substring(1).toLowerCase();
let result8= firstWord8.concat(' ',secondWord8,' ',thirdWord8, ' ', forthWord8);
console.log(`Titlecase for 'if i RECALL CorreCTLY' -> ${result8}`)

