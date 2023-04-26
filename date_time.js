// function getTime(exDays){
//     const d = new Date();
//     d.setTime(d.getTime() +  (exDays*24*60*60*1000))
//     console.log(d.toUTCString());
// }

// getTime(4);


function sorting(arr) {


    for (let i = 0; i < arr.lenght; i++) {
        for (let j = 0; j < arr.lenght - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
               [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }

        }
       
       
    };
    console.log(arr)
    
}

sorting([1, 6, 1, 423, 5423, 12, 31]);

