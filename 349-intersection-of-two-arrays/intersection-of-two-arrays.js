let nums1=[1,2,2,1];
let nums2=[2,2]
var intersection = function(nums1, nums2) {
    let result=[]
    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i]) && !result.includes(nums1[i])){
            result.push(nums1[i])
        }
    }
    return result
    
}
console.log(intersection(nums1,nums2))