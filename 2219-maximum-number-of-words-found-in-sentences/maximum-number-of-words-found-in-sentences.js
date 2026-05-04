/**
 * @param {string[]} sentences
 * @return {number}
 */
let sentences=["alice and bob love leetcode", "i think so too", "this is great thanks very much"] 
var mostWordsFound = function(sentences) {
    let max=0;
    for(let i=0;i<sentences.length;i++){
        let words=sentences[i].split(' ');
        console.log(words)

        if(words.length>max){
            max=words.length
        }
    }
    return max

    
};
console.log(mostWordsFound(sentences))