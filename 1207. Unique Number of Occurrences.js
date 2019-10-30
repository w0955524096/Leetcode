/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
     let map = new Map(); 
    let end=true
    let a
    let b
for(let i=0;i<arr.length;i++)
 {   if(map.get(arr[i])!=undefined)
    {
        let t=map.get(arr[i])+1;
        map.set(arr[i],t);
    }
    else
        map.set(arr[i],1);
 }
    let map1 = map; 
    a=map.values();
    
for(let i=0;i<map.size;i++)
    {
       let t=a.next().value
       b=map1.values();
       for(let j=0;j<map.size;j++)
            {
                if(t==b.next().value&&i!=j)
                  end=false;  
                
            }
    }
    //console.log(map);
return end;
};
