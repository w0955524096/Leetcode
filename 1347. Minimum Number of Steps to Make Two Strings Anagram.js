/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function (s, t) {

//建立a-z
    let sub = "abcdefghijklmnopqrstuvwxyz"

//建立array
    let arr = new Array(26).fill(0);

//與s[i]相同的++
    for (let i = 0; i < s.length; i++) {
        arr[sub.indexOf(s[i])]++;
        arr[sub.indexOf(t[i])]--;
    }

//加總
    let out = 0;
    for (let i = 0; i < 26; i++) {
        if (arr[i] < 0)
            out += Math.abs(arr[i])
    }

    return out

};