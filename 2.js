//simple js  function that return true/false wether a Palindrome or not
 
function isPalindrome(name){
    let string = name.split("").reverse().join("");
    if (string == name){
       return true;
    }else{
       return false;
    }
}
   
console.log(isPalindrome("2002"));