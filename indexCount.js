/*Sample input :

const inputStr = "Believe in yourself"

Sample Output : "B5e in y6f"

Note: you have to count the numbers of the letters present 
between first & last letter of the word . this logic has to 
be done only when you see word is having more than 3 letters.
*/

const inputStr = "Believe in yourself";

const strArr = inputStr.split(" ");

//console.log(strArr);

for(let i=0; i<strArr.length;i++){
   
    const outputStr =[];

    console.log(strArr[i].substring(1,-2));
   
}
