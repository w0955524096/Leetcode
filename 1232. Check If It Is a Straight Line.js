/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let end=true;
    let m=(coordinates[0][1]-coordinates[coordinates.length-1][1])/(coordinates[0][0]-coordinates[coordinates.length-1][0]);
    for(let i=1;i<coordinates.length;i++)
        {
        if((coordinates[0][1]-coordinates[i][1])/(coordinates[0][0]-coordinates[i][0])!=m)
        {
          end = false;
            break;
        }
        }    
        
    return end;
};