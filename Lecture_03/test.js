let value1 = ['Apple',1,false];
let value2 = ['Fries',2,true];
let value3 = ['Mars',9,'Apple']

for (let index = 0; index < value1.length; index++) {
    const name = value1[index];
    //console.log(name);
    for (let index = 0; index < value3.length; index++) {
        const name1 = value3[index];
        //console.log(name1);
        if (name === name1) {
            console.log('value1 == value2 '+ name)
        }
    }
}