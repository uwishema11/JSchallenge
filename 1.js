var oldArray=[2,4,5,7,8,31,11];
var theArray=[];

function primeNumber(array){
for( var i=0;i<array.length; i++){
    if(array[i]%2 !=0){
        theArray.push(array[i])
    }
}
return theArray;
}
console.log(primeNumber(oldArray));