/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
//建立a-z
    let sub = "abcdefghijklmnopqrstuvwxyz";

//建立array
    let arr = new Array(26).fill(0);

//與s[i]相同的++,t[i]相同的--
    for (let i = 0; i < t.length; i++) {
        arr[sub.indexOf(s[i])]++;
        arr[sub.indexOf(t[i])]--;
    }

//輸出
    return sub[arr.indexOf(-1)];
};
