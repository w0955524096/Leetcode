/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    
//建立a-z
    let sub="abcdefghijklmnopqrstuvwxyz"
    
//建立array
    let arr=new Array(26);
    for(let i=0;i<26;i++)
        arr[i]=0;

//s[i]出現次數++;t[i]出現次數--
    for(let i=0;i<s.length;i++)
    {
    arr[sub.indexOf(s[i])]++;    
    arr[sub.indexOf(t[i])]--; 
    }  
    
//加總
    let out=0
    for(let i=0;i<26;i++)        
        if(arr[i]>0)
        out+=arr[i]
    
    return out
  
};