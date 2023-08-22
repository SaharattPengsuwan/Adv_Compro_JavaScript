function totalVoume(...list) {
    
    //console.log(list);
    const list_number = [];
    let total_numer = 1;

    for (index = 0; index < list.length; index++) {
        let index_1 = 0;
        let sum = 1;
        while (index_1 < list[index].length) {
            sum = sum * list[index][index_1]
            //console.log(list[index][index_1]);
            index_1++ 
        }
        //console.log("_____");
        list_number.push(sum)    
    }
    //console.log(list_number);
    let total = 0;
    for (let num of list_number) {
        total += num
    }
    console.log(total);
}


totalVoume([2,3,2],[6,6,7],[1,2,1])
totalVoume([4,2,4],[3,3,3],[1,1,2],[2,1,1])









