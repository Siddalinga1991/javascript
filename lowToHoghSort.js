function bubbuleSort(sort){

    
    for(let i = 0; i< sort.length; i++){
        
      
        for (let j = 0; j < sort.length - i - 1; j++){
       
            
       
            if(sort[j+1] < sort[j]){
       
                
                [sort[j + 1], sort[j]] = [sort[j], sort[j + 1]];
                
            }
        }
    };
    return sort;
};
console.log(bubbuleSort([12,65,76,23,1,423,64]))
