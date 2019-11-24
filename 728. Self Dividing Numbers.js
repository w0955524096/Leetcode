/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let out=[]
    let self=0;
    for(let i=left;i<right+1;++i)
        {
            
         for(let j=0;j<(i+"").length;++j)
        {
            
            if(i%parseInt((i+"")[j])!=0)
                {
                    self=1
                                   break;
                }
        }
            if(self==0)
                out.push(i)
            self=0;
        }
    return out;
};