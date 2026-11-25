public class Solution {
    public int[] FindErrorNums(int[] nums) {
        int[] result=new int[2];
        for(int i=0;i<nums.Length;i++){
            if(Array.IndexOf(nums,nums[i])!=Array.LastIndexOf(nums,nums[i])){
                result[0]=nums[i];
            }
            if(!nums.Contains(i+1)){
                result[1]=i+1;
            }
        }
        return result;
    }
}