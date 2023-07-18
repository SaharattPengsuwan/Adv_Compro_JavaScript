const obj1 = {
    person : 'Saharatt',
    weight : 64
}

//const obj2 = obj1;
//const obj2 = Object.asssing({},obj1);
const obj2 = {... obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);