// a function that takes a formatted array. The array is made of a string of people’s identities in a predefined format, 
// [“Patrick wyne, 30”, “lil wyne, 32”,“Eric mimi, 21”,“Dodos deck, 21”,“Alian Dwine, 22”,“Patrick wyne, 33”,“Patrick wyne, 100”,“Patrick wyne, 40”]
// {
//     patrick: {second-name:wyne, age:30},
//  lil: {second-name:wyne, age:30},
//  ...
// }
function getPeople(array) {
    let output = {};
    for(let i = 0; i < array.length; i++) {
        let firstName = array[i].split(" ")[0];
        let lastName = array[i].split(" ")[1].split(",")[0];
        let age = array[i].split(" ")[2];
        let myObj = {
            second_name: lastName,
            age: parseInt(age)
        }
        output[firstName] = myObj;
        
    }
    return output;
}
let peopleObj = getPeople(["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21"]);
console.log(peopleObj)
