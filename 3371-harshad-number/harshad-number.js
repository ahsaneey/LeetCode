/**
 * @param {number} x
 * @return {number}
 */ 
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum=0;
    let value=x;
    while(x>0){
        let digit=x%10;
        sum+=digit;
        x=Math.floor(x/10)
    }
    if(value%sum===0){
        return sum
    }else{
        return -1
    }
};
console.log(sumOfTheDigitsOfHarshadNumber(18))