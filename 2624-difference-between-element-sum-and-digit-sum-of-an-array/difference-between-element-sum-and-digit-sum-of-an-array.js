let nums=[1,15,6,3]
var differenceOfSum = function(nums) {
    let digitSum=0;
    let elementSum=0;
    for(let i=0;i<nums.length;i++){
        elementSum+=nums[i]

        let n=nums[i]
        while(n>0){
            let digit=n%10;
            digitSum+=digit;
            n=Math.floor(n/10)

        }
    }
    return elementSum-digitSum
    
};
console.log(differenceOfSum(nums))