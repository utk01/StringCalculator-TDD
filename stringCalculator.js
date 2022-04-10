
function stringCalculator(exp){
    var numArray= exp.split(/,|\n/).map(Number);
    return (parseInt(numArray.reduce((a,b)=>a+b)));
}

module.exports = stringCalculator;