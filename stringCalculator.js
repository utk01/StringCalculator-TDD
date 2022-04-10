
function stringCalculator(exp){
    var numArray=[]
    if(exp[0]=='/'){
        var delim=exp.split('\n')[0].substring(2);
        numArray= exp.split('\n').slice(1).join('\n').split(delim).map(Number);
        

    }else{
        numArray= exp.split(/,|\n/).map(Number);
    }
    
    return (parseInt(numArray.reduce((a,b)=>a+b)));
}

module.exports = stringCalculator;