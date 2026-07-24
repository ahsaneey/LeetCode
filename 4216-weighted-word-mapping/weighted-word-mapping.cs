public class Solution {
    public string MapWordWeights(string[] words, int[] weights) {
        string result="";
        foreach(string word in words){
            int totalWeight=0;
            foreach(char ch in word){
                int index=ch - 'a';
                totalWeight+=weights[index];

            }
            int remainder=totalWeight % 26;
            char mappedChar=(char)('z' - remainder);

            result+=mappedChar;
        }
        return result;
    }
}