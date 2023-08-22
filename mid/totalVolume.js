function totalVoume(...list) {
    
    //console.log(list);
    const list_number = [];
    let total_numer = 1;

    
     
    for (let index_1 = 0; index_1 < list[index].length; index_1++) {
        let index = 0;
        while (index < list.length) {
            console.log(list[index_1][index]);
            console.log("------");
            total_numer = total_numer * list[index_1][index]
            console.log(total_numer);
            index++
        }
    }
              
        
        
        
    
}


totalVoume([2,3,2],[6,6,7],[1,2,1])









