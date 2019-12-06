/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
 
    for (let i=0;i<nums.length;i++)
        if(nums[i]===val)
            {
            [nums[i],nums[nums.length-1]]=[nums[nums.length-1],nums[i]];    
             i--;  
            nums.pop();
            }
     
   

   
};
