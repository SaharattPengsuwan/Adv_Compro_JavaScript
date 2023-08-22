function frequencySort(word) {

    const list_word = [];

    for (i of word) {
        //console.log(i);
        list_word.push(i)
    }
    for (index = 0; index < word.length; index++){
        let index_1 = word.length;
        while (index_1 > 0) {
            if (word[index] == list_word[index_1] ) {
                
            }
        }
    }
    const sort_word = list_word.sort()
    console.log(sort_word.join(""));
}

frequencySort("tree")
frequencySort("cccaaa")
frequencySort("Aabb")