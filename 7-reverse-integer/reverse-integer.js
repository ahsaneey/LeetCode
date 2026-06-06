
 let x=120
var reverse = function(x) {
    let isNegative=x<0;
    let result=Math.abs(x).toString().split("").reverse().join("");
    let num= isNegative?-Number(result):Number(result);

    if(num<-2147483648 || num > 2147483647){
        return 0;
    }

    return num;
};
console.log(reverse(x))