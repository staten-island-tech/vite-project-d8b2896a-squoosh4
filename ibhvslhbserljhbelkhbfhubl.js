const wordList = {
    word1: "hehehahayuiop",
    word2: "yomamayuiop",
    word3: "poopooyuiop",
}

Array.from(wordList).forEach(word => { console.log(word.replace("yuiop", ""))});
// wordList.array.forEach(element => { console.log(element.replace("yuiop", "")); });