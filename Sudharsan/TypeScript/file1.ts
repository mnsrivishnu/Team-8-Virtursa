class Solution {
    longestPalindrome(s: string): string {

        let maxlen = 0;
        let longest = "";

        for (let i = 0; i < s.length; i++) {

            let ans = "";

            for (let j = i; j < s.length; j++) {

                ans += s.charAt(j);

                if (this.isPalindrome(ans)) {

                    if (ans.length > longest.length) {
                        longest = ans;
                    }
                }
            }
        }

        return longest;
    }

    isPalindrome(ans: string): boolean {

        let l = 0;
        let r = ans.length - 1;

        while (l <= r) {

            if (ans.charAt(l) !== ans.charAt(r)) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
