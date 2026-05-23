let nums= [0,1,4,6,7,10];
let diff=3
var arithmeticTriplets = function(nums, diff) {
    let count=0
    for(let i=0;i<nums.length;i++){
        let current=nums[i];
        if(nums.includes(current + diff) && 
          nums.includes(current + 2 * diff)){
             count++
        }
    }
    return count

}
console.log(arithmeticTriplets(nums,diff))