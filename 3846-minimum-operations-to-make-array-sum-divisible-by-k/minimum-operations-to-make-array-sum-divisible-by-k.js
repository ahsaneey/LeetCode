let nums=[3,9,7];
let k=5
var minOperations = function(nums, k) {
    var sum=nums.reduce((acc,curr)=>acc + curr ,0);
    return sum % k ;
    
}
console.log(minOperations(nums,k))