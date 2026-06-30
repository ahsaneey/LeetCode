let nums=[0,1,1,0]
var getSneakyNumbers = function(nums) {
    return nums.filter((item,index)=>nums.indexOf(item)!==index)

};
console.log(getSneakyNumbers(nums))