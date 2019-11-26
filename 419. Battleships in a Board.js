/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let out=0
    for(let i=0;i<board.length;++i)
       for(let j=0;j<board[i].length;++j)
            if(board[i][j]==='X')
                {
                if((i+j==0)||(i==0&&board[i][j-1]!=='X')||(j==0&&board[i-1][j]!=='X')||(board[i][j-1]!=='X'&&board[i-1][j]!=='X'))
                   out++;
                }
                
    
    return out;
};