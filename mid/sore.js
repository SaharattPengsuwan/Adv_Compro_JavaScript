const list = [5,2,6,8,3,18,22]

let list_2 = list.sort(function(a,b){
    return a-b
})
let list_3 = list.sort(function(a,b){
    return b-a
})

console.log(list_2);
console.log(list_3);