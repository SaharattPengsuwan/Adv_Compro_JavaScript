function sumTwoSmallestNums(list) {

    const list_number = [];
    for (let i of list) {
            if (i > 0) {
                list_number.push(i)
            }
        }
    console.log(list_number);
    const list_num = [];
    const num_lest_1 = Math.min(...list_number)
    console.log(num_lest_1);
    list_num.push(num_lest_1)
    list_number.splice(num_lest_1)
    console.log(list_number);
    const num_lest_2 = Math.min(...list_number)
    console.log(num_lest_2);
    list_num.push(num_lest_2)
    console.log(list_num);
    let total_number = 0;
    for (j of list_num) {
        total_number += j
    }
    console.log(total_number);
}

sumTwoSmallestNums([19,5,42,2,77,-1])

