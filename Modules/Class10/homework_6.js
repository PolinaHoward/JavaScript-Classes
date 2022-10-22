//  Due: Fri (Oct 21)


/**
 * Q1. Print the object data as mentioned above.
 */
 let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}
let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}
for (exp in student1_1){
    if (exp !== 'pastJobs' && exp !== 'knownSkills'){
        console.log( ` ${exp} : ${student1_1[exp]}`)
    }else if (exp == 'pastJobs'){
        let pastJobsStatus = ''
                if (student1_1.anyExperience){
                    pastJobsStatus=   `Yes(${student1_1[exp].length})`
                }else{
                    pastJobsStatus = 'No'
                }
                console.log( `${exp} : ${pastJobsStatus}`)
                for ( prop of student1_1[exp]){
                    for(jobExp in prop){
                        console.log(`\t${jobExp} : ${prop[jobExp]}`)
                    }

                }
    }else{ 
        let knownSkillsStatus = '';
        if (student1_1.knownSkills  ){
            knownSkillsStatus =  `${student1_1.knownSkills.length} (${student1_1[exp]})`
           }  
            console.log(`${exp} : ${knownSkillsStatus}`)
        
    }
}


console.log(`Break between the codes`)


for (exp in student1_2){
    if (exp !== 'pastJobs' && exp !== 'knownSkills'){
        console.log( ` ${exp} : ${student1_2[exp]}`)
    }else if (exp == 'pastJobs'){
        let pastJobsStatus = ''
                if (student1_2.anyExperience){
                    pastJobsStatus=   `Yes(${student1_2[exp].length})`
                }else{
                    pastJobsStatus = 'No'
                }
                console.log( `${exp} : ${pastJobsStatus}`)
                for ( prop of student1_2[exp]){
                    for(jobExp in prop){
                        console.log(`\t${jobExp} : ${prop[jobExp]}`)
                    }

                }
    }else{ 
        let knownSkillsStatus = '';
        if (student1_2.knownSkills  ){
            knownSkillsStatus =  `${student1_2.knownSkills.length} (${student1_2[exp]})`
           }  
            console.log(`${exp} : ${knownSkillsStatus}`)
        
    }
}

console.log(`==========================================================`)

/**
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let firstIndex = -1;
for( let i = 0 ; i < favSports_3.length ; i++){
    if(favSports_3[i].toLocaleLowerCase() === 'baseball') {
        if(firstIndex <0){
            firstIndex = i
        }else {
            console.log( `Baseball index for second occurrence is ${i}`)
            break;
        }
    }

 }
 for(  let i = 0 ; i < favSports_2.length ; i++){
    if(firstIndex>=0){
        console.log( `Baseball is present only once in the given array`)
        break;
 } 
 }
 for(let i = 0 ; i < favSports_1.length ; i++){
    if(firstIndex = -1){
        console.log( `Baseball is not present in the given array`)
        break;
 } 

 }
 
 console.log(`=================================================`)


/**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

function ex(student)
{   let sum = 0 
    let name = student.name
    if ((student.anyExperience) ){
        for (let i = 0; i < student.pastJobs.length; i++){
            sum+= student.pastJobs[i].numOfYears
        }
        return name+ "has total "+ sum+"-years of experience"
    }
    
    else {
        return name + "has no past experience"
        }

    
}
students = [student3_1,student3_2]
for (let i = 0; i<students.length;i++){
    console.log(ex(students[i]))
}

