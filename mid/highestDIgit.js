function highestDigit(number) {
    let str_number = number.toString();
    let lits_number = [];

    for (let i of str_number) {
        //console.log(i);
        lits_number.push(i);
        //console.log(lits_number);
    }
    console.log(Math.max(...lits_number));
}


highestDigit(379)
highestDigit(2)

