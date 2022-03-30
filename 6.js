//a simple a Javascript function that takes an array of numbers and return a reversed version
function isReverse(array){
    for(let i=0;i<array.length;i++){
        var neewArray=array.reverse();
    }
    return neewArray;
}
console.log(isReverse([1,3,4,5,6]));