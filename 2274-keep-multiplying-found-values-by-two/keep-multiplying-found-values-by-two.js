let nums=[5,3,6,1,12];
let original=3
var findFinalValue = function(nums, original) {
    while(nums.includes(original)){
        original=original*2
    }
    return original

}
console.log(findFinalValue(nums,original))