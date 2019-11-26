/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    return out(N);   
};

function out(N){
    if(N==1)
        return 1;
    else if(N==0)
        return 0;
    else
        return out(N-1)+out(N-2);
 
}