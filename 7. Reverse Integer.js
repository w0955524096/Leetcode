/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let out="";
    if(x<0)
        {
        x*=-1;
        out="-"
        }

    
 
    for(let i=String(x).length-1;i>-1;i--)
        out+=String(x)[i];
    
      if(out>Math.pow(2,31)-1||out<-1*Math.pow(2,31)+1){
       out="0"
       }  
    


    return out;
    
};


