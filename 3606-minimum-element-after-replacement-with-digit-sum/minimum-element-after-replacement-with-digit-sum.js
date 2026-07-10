let nums=[10,12,13,14]
var minElement = function(nums) {
  let result=[];
  let min=Infinity;
  for(let num of nums){
    let sum=0;
    while(num>0){
        sum+=num%10;
        num=Math.floor(num/10)
    }
    if(sum<min){
        min=sum
    }
  }
  return min
    
};
console.log(minElement(nums))