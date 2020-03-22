/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {

    
    intervals.sort(function (a, b) {return a[0] - b[0]});
    
    for(let i=0;i<intervals.length-1;i++)
    {
        if((intervals[i][1]-intervals[i][0])>=(intervals[i+1][1]-intervals[i+1][0])&&intervals[i][1]>=intervals[i+1][1])
        {
            intervals.splice(i+1,1);
            i--;
        }
    }    
    
    return intervals.length;
    
};