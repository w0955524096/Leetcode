class Solution:
    def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        temp=[]        
        out=[ [] * c for i in range(r) ]
        
        for i in nums:
            for j in i:
                
                temp.append(j)
        if(r*c>len(temp)):
            return nums
                
        else:
            for i in range(len(temp)):
            #print(str(i//c)+","+str(i%c))
           
                out[i//c].append(temp[i])
                
            return out
        