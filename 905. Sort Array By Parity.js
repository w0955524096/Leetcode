/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const out=new Array()
    for(let i=0;i<A.length;++i)
        {
            if(A[i]%2==0)
            out.unshift(A[i])
            else
            out.push(A[i])
        }
    return out;
};