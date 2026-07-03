let s="abcd";
let k=2
var reversePrefix = function(s, k) {
    var res="";
    res+=s.slice(0,k).split('').reverse().join('');
    res+=s.slice(k)
    return res;
    
};
console.log(reversePrefix(s,k))