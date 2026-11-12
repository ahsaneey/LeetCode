public class Solution {
    public int SingleNumber(int[] nums) {
        for(int i=0;i<nums.Length;i++){
            bool isDuplicated=false;
            for(int j=0;j<nums.Length;j++){
                if(i!=j && nums[i]==nums[j]){
                    isDuplicated=true;
                    break;
                }
            }
            if(!isDuplicated){
                return nums[i];
            }
           
        }
        return -1;



    }
    }        