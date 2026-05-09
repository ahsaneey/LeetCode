let target=9
let nums=[-1,0,3,5,9,12]
var search = function(nums, target) {
    if(nums.includes(target)){
        return (nums.indexOf(target))
    }else{
        return -1
    }
    
};
console.log(search(nums,target))