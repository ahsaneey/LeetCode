public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        var result=nums1.Take(m)
            .Concat(nums2)
            .OrderBy(x=>x)
            .ToArray();
            for(int i=0;i<result.Length;i++){
                 nums1[i]=result[i];
            }
    }
}