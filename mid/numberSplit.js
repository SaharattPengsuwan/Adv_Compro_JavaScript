function numberSplit(number) {
    const list_number_1 = [];
    //const list_number_2 = [];
    if (number % 2 == 0) {
        let total_1 = Math.floor(number / 2);
        //console.log(total_1);
        list_number_1.push(total_1)
        let total_2 = Math.floor(number / 2);
        list_number_1.push(total_2)
        console.log(list_number_1);
    }else if (number % 2 > 0) {
        let total_1 = Math.floor(number / 2);
        //console.log(total_1);
        list_number_1.push(total_1)
        let total_2 = (Math.floor(number / 2)) + 1;
        list_number_1.push(total_2)
        console.log(list_number_1);
    }else if (number < 0) {
        let total_1 = Math.floor(number / 2);
        //console.log(total_1);
        list_number_1.push(total_1)
        let total_2 = (Math.floor(number / 2)) + 1;
        list_number_1.push(total_2)
        console.log(list_number_1);
    }
}

numberSplit(4)
numberSplit(5)
numberSplit(11)
numberSplit(10)
numberSplit(-9)