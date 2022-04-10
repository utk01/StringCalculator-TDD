
function stringCalculator(exp){
    var numArray= exp.split(',');
    return (parseInt(numArray[0])||0)+(parseInt(numArray[1])||0);
}

module.exports = stringCalculator;