/**
    Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

    Example 1:
    Input:

    "bbbab"
    Output:
    4
    One possible longest palindromic subsequence is "bbbb".
    Example 2:
    Input:

    "cbbd"
    Output:
    2
    One possible longest palindromic subsequence is "bb".
 */

/**
O(n^2) O(n^2) solution
 */

var longestPalindromeSubseq = function(s) {
  let len = s.length,
    dp = new Array();
  for (let i = 0; i < len; i++) dp.push(new Array(len).fill(0));

  for (let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < len; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][len - 1];
};

/**
O(n) space solution
 */
var longestPalindromeSubseq = function(s) {
  let len = s.length,
    dp = new Array(len).fill(0);

  for (let i = len - 1; i >= 0; i--) {
    dp[i] = 1;
    let pre = 0;
    for (let j = i + 1; j < len; j++) {
      let tmp = dp[j];
      if (s.charAt(i) === s.charAt(j)) {
        dp[j] = 2 + pre;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      pre = tmp;
    }
  }

  return dp[len - 1];
};
