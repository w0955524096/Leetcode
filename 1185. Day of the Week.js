/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    
    
    
    const mon='*622503514624';
    const out=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const yea='0531053105310531'
    
    lum=0;
    if((((year%4==0)&&(year%100!=0))||(year%400==0))&&(month==1||month==2))
        lum=1;
    return out[(day+parseInt(mon[month])+parseInt((year+"").slice(2))+Math.floor((year+"").slice(2)/4)+parseInt(yea[(year+"").slice(0,2)%16])-lum)%7]
};