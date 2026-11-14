public class Solution {
    public int[] Intersect(int[] nums1, int[] nums2) {
        List<int> result=new List<int>();
        foreach(int num in nums1){
            int index=Array.IndexOf(nums2,num);
            if(index!=-1){
                result.Add(num);
                nums2[index]=-1;

            }
        }
        return result.ToArray();
    }
}