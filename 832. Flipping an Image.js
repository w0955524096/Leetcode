/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(let i=0;i<A.length;++i)
        for(let j=0;j<parseInt(A[i].length/2);++j)
            {
                let temp_A_n=A[i][j]
                A[i][j]=A[i][A[i].length-j-1]
                A[i][A[i].length-j-1]=temp_A_n
                
            
                
            }
                
        for(let i=0;i<A.length;++i)
        for(let j=0;j<parseInt(A[i].length);++j)        
              {
            if(A[i][j]==0)
                 A[i][j]=1;
              
                 
             else   
                A[i][j]=0;
                    
                
              } 
        
   return A;
};



        
        
