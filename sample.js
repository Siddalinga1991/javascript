//program to empty the array

var str = [1,2,4,5,2,2,1,1,3]

while(str.length){
    str.pop()
}
var str=[1]
console.log(str)

//mul
function mul(x){
    console.log(x)
    return function(y){
        console.log(y)
      return  function(z){
          console.log(z)
            return x*y*z;
        }
    }
}

console.log(mul(2)(4)(5));

const str1 = "Hello";

// for( let i= 0; i< str1.length - 1; i-- ){
//     console.log(str1[i]);
// }

console.log(str1.length)