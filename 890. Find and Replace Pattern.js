/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let wordtemp=""
    let out=new Array()
    let outdoor=new Array()
    let wordstore=''
    words.unshift(pattern)
    for(let i=0;i<words.length;++i)
    {for(let j=0;j<words[i].length;++j)
        {
            //找不到
            if(out.indexOf(words[i][j])==-1)
            {out.push(words[i][j])
             wordtemp+=out.indexOf(words[i][j])
            
            }
            //找到
            else
            wordtemp+=out.indexOf(words[i][j])
                
        }
    wordstore=words[i]
     words[i]=wordtemp
      if(wordtemp===words[0]&&i!=0)
         outdoor.push(wordstore)
     wordtemp=""
     out=[];
    }
    //console.log(words)
    return outdoor
};