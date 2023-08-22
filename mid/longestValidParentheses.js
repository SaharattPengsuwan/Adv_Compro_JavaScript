function longestValidParentheses(str) {
    
    let count = 0;
    let count_1 = 0;
    let count_2 = 0;

    for (let i of str) {
        count++
    }
    for (let j of str) {
        if (j == "(") {
        count_1++ 
        }
       
    }
    for (let o of str) {
        if (o == ")")
    }
    //console.log(count);
}

longestValidParentheses(")()())")