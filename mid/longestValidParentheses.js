
function long(word) {

    let total = 0
    let words = ""
    let index = 0
    while( index < word.length) {
        words = word[index] + word[index + 1]
        //return words
        //return words
        if (words == "()") {
            //return words
            total += 2
            words = ""
            index++
        }else {
            words = ""
            index++
        }
        
    }
    return total
}

console.log(long("(()"));
console.log(long("(()()"));
console.log(long("())(()))))()()()"));

