function longestValidParentheses(str) {
    
    let count = 0;
    let count_1 = 0;
    let count_2 = 0;

    const list_count = [];

    for (let i of str) {
        count++
    }
    for (let j of str) {
        if (j == "(") {
            count_1++ 
        }
    }
    for (let o of str) {
        if (o == ")") {
            count_2++
        }
    }
    //console.log(count);
    //console.log(count_1);
    //console.log(count_2); 
    list_count.push(count_1,count_2)
    //console.log(list_count);
    const sum = count - Math.min(...list_count)
    console.log(sum);
}

longestValidParentheses(")()())")
longestValidParentheses("(()")
longestValidParentheses("()()()()()")