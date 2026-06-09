let nums=[1,2,3]
var concatWithReverse = function(nums) {
  return nums.concat([...nums].reverse())
    
    
};
console.log(concatWithReverse(nums))