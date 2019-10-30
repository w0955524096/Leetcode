/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let out=[]
    
    let so=[]

    arr.sort(function(a, b) {
  return a - b;
});
    let gg=arr[0+1]-arr[0];
    for(let i=0;i<arr.length-1;i++)
        {
            so.push(arr[i+1]-arr[i]);
            if(arr[i+1]-arr[i]<gg)
                gg=arr[i+1]-arr[i];
        }
    for(let i=0;i<so.length;i++)
        {
            if(so[i]==gg)
                {
                    
                    let tt=[]
                    tt.push(arr[i])
                    tt.push(arr[i+1])
                    out.push(tt)}
        }

    return out;
};