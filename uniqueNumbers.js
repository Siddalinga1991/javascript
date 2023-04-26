//const num = [12,12,42,12,42,523,212,3212,3212]
// for(let i=0;i<num.length; i++){
   
//     if(!arr.includes(num[i])){
//         arr.push(num[i]);
        
//     } 

    
// }
// //console.log(arr)

const arr =[]
function uniqueInt(num){
    
    for(let i=0;i<num.length; i++){
        if(!arr.includes(num[i])){
            arr.push(num[i]);
            
        } 
    
        
    }
    return arr

}

console.log(uniqueInt([1,2,3,4,12,1,2,3,4]));