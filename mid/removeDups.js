function removeDupe(data) {
    const list = [];
    let count = 0;
    for (let i of data){
        for (let j of data){
            if (i == j) {
                count++
            }
        }if (count == 2){
            
        }
    }return list
}


//console.log(removeDupe([1,0,1,0]));
//console.log(removeDupe(["pae","tep","pae"]));

removeDupe([1,0,1,0])

//const list = [1,0,2,3,5,5]
//console.log(list.shift());
//console.log(list);
//console.log(list_keep);
//const o = list.pop()
//const p = list.slice()
//console.log(list);