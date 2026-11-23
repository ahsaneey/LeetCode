public class Solution {
    public int FindDuplicate(int[] nums) {
        var duplicate = nums
          .GroupBy(x=>x)
          .Where(g=>g.Count()>1)
          .Select(g=>g.Key)
          .First();

          return duplicate;

        
    }
}