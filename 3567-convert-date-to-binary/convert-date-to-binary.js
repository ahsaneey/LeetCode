let date="2080-02-29";
var convertDateToBinary = function(date) {
    const [year,month,day]=date.split('-');
    return `${Number(year).toString(2)}-${Number(month).toString(2)}-${Number(day).toString(2)}`  
};
console.log(convertDateToBinary(date))