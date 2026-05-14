let nums=[0,1,0,3,12];
var moveZeroes = function(nums) {
    let result=[];
    let zero=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            result.push(nums[i])
        }else{
            zero++;
        }
    }
    for(let i=0;i<zero;i++){
        result.push(0)
    }
    for(let i=0;i<nums.length;i++){
        nums[i]=result[i]
    }
}
moveZeroes(nums);
console.log(nums)