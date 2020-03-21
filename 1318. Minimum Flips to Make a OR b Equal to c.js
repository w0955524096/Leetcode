/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {

    const len=Math.max(a, b, c).toString(2).length;    
    const c_tostring=c.toString(2).padStart(len, '0');
    const a_tostring=a.toString(2).padStart(len, '0'); 
    const b_tostring=b.toString(2).padStart(len, '0');

    let out=0;
    
    for(let i=0;i<len;i++)
        {
            
        //a或只有其中一個是1
            if((a_tostring[i]=="1"&&b_tostring[i]=="0")||(a_tostring[i]=="0"&&b_tostring[i]=="1"))
            {
                if(c_tostring[i]=="0")
                    out++
            }
            
        //a跟b都是1            
           else if(a_tostring[i]=="1"&&b_tostring[i]=="1")
           {
               if(c_tostring[i]=="0")
                   out+=2;
               
           }  
            
        //a跟b都是0
            else
                if(c_tostring[i]=="1")
                    out++;
                        
        }
    
    return out;
};