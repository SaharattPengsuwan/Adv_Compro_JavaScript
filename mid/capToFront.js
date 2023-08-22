function capToFront(word) {
    
    const list_word = [];

    for (let j of word) {
        if (j == j.toUpperCase()) {
            list_word.push(j);
        }
    }
    for (let i of word) {
        if (i == i.toLowerCase()) {
            list_word.push(i);
        }
    }
    console.log(list_word.join(""));
    //const list = list_word.join("");
    //return list
}

capToFront("hApPy")