// a Javascript function that takes an array of numbers and return a reversed version. 
// Note: here you are not allowed to use an intermediary array. You need to use the same array passed in
//  the parameter and just reverse its content. Do not use inbuilt functions like reverse(). Just use loops and conditions.

function isReverse(array){
    let output = [];
    for(let i=array.length - 1; i>=0;i--){
      output.push(array[i]);
    }
  return output;
}
console.log(isReverse([22,7,8,9,5]));