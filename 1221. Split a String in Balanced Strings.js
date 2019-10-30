/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let out=0;
    let tt=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=="R")
            tt++;
        if(s[i]=="L")
            tt--;
        if(tt==0)
            out++;
    }
    return out;
};