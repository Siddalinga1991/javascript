// // //Progrma to check if a string is palindrom using for loop

// // const str = 'My age is 0, 0 si ega ym.';

// // /*
// // Step1: Create a variable to store the reversed value.
// // Step2: initialize the value of i to lenghth-1
// // Step3: Repeat until i>=0
// // Step4: revString += i
// // Step5: print the revString
// // */
// // let strCase = str.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g,'');
// // let strRev ='';
// // for(var i = strCase.length-1;i>=0;i--){
// //     strRev = strRev+strCase[i];s
// // }
// // console.log(strRev);
// // if(strCase == strRev){
// //     console.log('Given string is palindrom')

// // }else{
// //     console.log('Given string is not a palindrom')
// // // }

// // let str = "Hello My name is raj"

// // let realStr = str.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g, "");
// // let revStr = '';
// // for (i = realStr.length - 1; i >= 0; i--) {
// //      revStr = revStr + realStr[i];
// // }
// // if (realStr == revStr) {
// //     console.log`Given string ${str} is a palindrom`();
// // }
// // else {
// //     console.log(`Given string '${str}' is not a palindrom`)
// // }

// let OrignalStr =  'My name is raj'
// let myStr = OrignalStr.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g,'');
// console.log(myStr)

// revStr = '';

// for(i= myStr.length-1; i>=0;i--){
//     revStr = revStr + myStr[i];
// }
// if(revStr == myStr){
//     console.log(`Given sting ${OrignalStr} is a palindrom` )
// }else{
//     console.log(`Given string ${OrignalStr} is not a palindrom`)
// }

// for(i=0;i<=10;i++){
//     print(i)
// }

// function print(i){
//     setTimeout(function(){
//         console.log(i)
//     }, i*2000)
// }

const date = new Date('19-11-2022');
console.log(date.getMonth());