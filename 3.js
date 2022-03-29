/* let setStudentAgeApi = (student, age) => {  //async code below
    console.log("1. Starting ..")
    setTimeout(() => { student.age = age; console.log("2. Api Processing")}, 500);
    console.log("3. Done ..")
  
 }
 */
 setStudentAgeApi = (student, age) => {
 
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age")
         else
                  resolve(student)
        },
            500);
  
    });
 }
 

 let student = {name:"Eric" }

 setStudentAgeApi(student,20).then(data =>{ console.log(data)}).catch(err =>console.log(`Error occured : ${err}`));