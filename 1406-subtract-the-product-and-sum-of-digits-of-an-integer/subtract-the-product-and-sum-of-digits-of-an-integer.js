
let n=234; 
var subtractProductAndSum = function(n) {
    let sum=0;
    let p=1;
    while(n>0){
        let digit=n%10;
        sum+=digit;
        p*=digit;
        n=Math.floor(n/10)
    }
    return p-sum
    
};
console.log(subtractProductAndSum(n))