/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let out=0
    if(y>x)
        [x,y] = [y,x];
    
        x=x.toString(2)
        y=y.toString(2)
    y=(Math.pow(10,x.length-y.length)+"").substr(1)+""+y
    for(i in x)
    if(x[i]!==y[i])
        out++;

        
    return out;
};