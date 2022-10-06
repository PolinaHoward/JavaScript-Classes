/**
 *       1)  Convert temerature values into different units
 *       2)  Extra: try to find how to get 2-digits after the decimal point (ex: 15.555555 -> 15.55)
 */



/**
 * #1 F->C
 * T(°C) = (T(°F) - 32) / 1.8
 */
let fTemp1 = 60;
let cTemp1 = ( fTemp1- 32) / 1.8;
console.log(`\n${fTemp1}°F is equal to ${cTemp1}°C`);
let FtoC;
FtoC= cTemp1.toFixed(2);
console.log(`\nFtoC -> ${FtoC}`);

/**
 * #2 F->K
 * T(K) = (T(°F) + 459.67)× 5/9
 */
let fTemp2 = 120;
let kTemp2 = ( fTemp2 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equal to ${kTemp2}°K`);
let FtoK;
FtoK= kTemp2.toFixed(2);
console.log(`\nFtoK -> ${FtoK}`);

/**
 * #3 F->R
 * T(°R) = T(°F) + 459.67
 */
let fTemp3 = 69;
let rTemp3 = fTemp3 + 459.67;
console.log(`\n${fTemp3}°F is equal to ${rTemp3}°R`);
let FtoR;
FtoR= rTemp3.toFixed(2);
console.log(`\nFtoR -> ${FtoR}`);

/**
 * #4 C->F
 * T(°F) = T(°C) × 1.8 + 32
 */
let cTemp4 = 25;
let fTemp4 = cTemp4 * 1.8 + 32;
console.log(`\n${cTemp4}°C is equal to ${fTemp4}°F`);
let CtoF;
CtoF= fTemp4.toFixed(2);
console.log(`\nCtoF -> ${CtoF}`);

/**
 * #5 C->K
 * T(K) = T(°C) + 273.15
 */
let cTemp5 =49;
let kTemp5 = cTemp5 + 273.15;
console.log(`\n${cTemp5}°C is equal to ${kTemp5}°K`);
let CtoK;
CtoK= kTemp5.toFixed(2);
console.log(`\nCtoK -> ${CtoK}`);

/**
 * #6 C->R
 * T(°R) = (T(°C) + 273.15) × 9/5
 */
let cTemp6 = 37;
let rTemp6 = (cTemp6 + 273.15) * 9/5;
console.log(`\n${cTemp6}°C is equal to ${rTemp6}°R`);
let CtoR;
CtoR= rTemp6.toFixed(2);
console.log(`\nCtoR -> ${CtoR}`);

/**
 * #7 
 * K->F
 * T(°F) = T(K) × 9/5 - 459.67
 */
let kTemp7 = 109;
let fTemp7 = kTemp7 * 9/5 - 459.67;
console.log(`\n${kTemp7}°K is equal to ${fTemp7}°F`);
let KtoF;
KtoF= fTemp7.toFixed(2);
console.log(`\nKtoF -> ${KtoF}`);

/**
 * #8 K->C
 * T(°C) = T(K) - 273.15
 */
let kTemp8 = 47;
let cTemp8 = kTemp8 - 273.15;
console.log(`\n${kTemp8}°K is equal to ${cTemp8}°C`);
let KtoC;
KtoC= cTemp8.toFixed(2);
console.log(`\nKtoC-> ${KtoC}`);

/**
 * #9 K->R
 * T(°R) = T(K) × 9/5
 */
let kTemp9 = 93.6;
let rTemp9 = kTemp9 * 9/5;
console.log(`\n${kTemp9}°K is equal to ${rTemp9}°R`);
let KtoR;
KtoR= rTemp9.toFixed(2);
console.log(`\nKtoR-> ${KtoR}`);

/**
 * #10 R->F
 * T(°F) = T(°R) - 459.67
 */
let rTemp10 = 89;
let fTemp10 = rTemp10 - 459.67;
console.log(`\n${rTemp10}°R is equal to ${fTemp10}°F`);
let RtoF;
RtoF= fTemp10.toFixed(2);
console.log(`\nRtoF-> ${RtoF}`);

/**
 * #11 R->C
 * T(°C) = (T(°R) - 491.67) × 5/9
 */
let rTemp11 = 86.32;
let cTemp11 = (rTemp11 - 491.67) * 5/9;
console.log(`\n${rTemp11}°R is equal to ${cTemp11}°C`);
let RtoC;
RtoC= cTemp11.toFixed(2);
console.log(`\nRtoC-> ${RtoC}`);

/**
 * #12 R->K
 * T(K) = T(°R) × 5/9
 */
let rTemp12 = 31;
let kTemp12 = rTemp12 * 5/9;
console.log(`\n${rTemp12}°R is equal to ${kTemp12}°K`);
let RtoK;
RtoK= kTemp12.toFixed(2);
console.log(`\nRtoK-> ${RtoK}`);
