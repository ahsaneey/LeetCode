public class Solution {
    public int ThirdMax(int[] nums) {
        var result=nums
        .Distinct()
        .OrderByDescending(x=>x)
        .ToArray();

        return result.Length >=3 ? result[2] : result[0] ;

    }
}
        

    