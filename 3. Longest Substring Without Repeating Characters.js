/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0
    let dict = {},
        maxLen = 1,
        curr = null
    

    for(let i = 0, j = 0; i < s.length; i++){
        curr = s.charAt(i)
        if(dict[curr] !== undefined){
            if(j <= dict[curr]){
                j = dict[curr] + 1
            }
        }
        dict[curr] = i
        maxLen = Math.max(maxLen, i - j + 1)
    }
    return maxLen
};

var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    
    let max = 1,
        flag = 0;
    
    for (let i=0; i<s.length; i++) {
        const index = s.indexOf(s[i], flag);
        if (index !== -1 && index < i) flag = index + 1;
        max = Math.max(max, i-flag+1)
    }
    return max;
}


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length, res = 0;
    
    let hashMap = new Array(256).fill(0)
    
    for (let i = 0, j = 0; i < len; i++) {
        j = Math.max(hashMap[s.charCodeAt(i)], j);
        res = Math.max(res, i - j + 1);
        hashMap[s.charCodeAt(i)] = i + 1;
    }
    return res;
    
};