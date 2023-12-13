const wordList = {
    word1: "hehehahayuiop",
    word2: "yomamayuiop",
    word3: "poopooyuiop",
}

const wordList2 = ["hehehahayuiop", "yomamayuiop", "poopooyuiop"];

console.log(Array.from(wordList).forEach(word => { console.log(word.replace("yuiop", ""))}));
// wordList.array.forEach(element => { console.log(element.replace("yuiop", "")); });
console.log(wordList2.forEach(word => { console.log(word.replace("yuiop", ""))}));