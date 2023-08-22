function simplePair(list, number) {

    const list_to = [];
    for (let index = 0; index < list.length; index++) {
        //console.log("ll");
        let index_1 = 0; 
        while (index_1 < list.length) {
            if ((list[index] * list[index_1]) == number) {
                //console.log(list[index],list[index_1]);
                list_to.push(list[index],list[index_1])
                
            }
            index_1++
        }
        index_1 = 0;
    }
    console.log(list_to[0],list_to[1]);
}


simplePair([1,2,3],3)
simplePair([1,2,3],3)