
function stringCalculator(exp){
    var numArray= exp.split(',').map(Number);
    return (parseInt(numArray.reduce((a,b)=>a+b)));
}

module.exports = stringCalculator;