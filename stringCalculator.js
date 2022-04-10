function stringCalculator(exp){
    var numArray=[]
    if(exp[0]=='/'){        //check if it has custom delimitter

        //get delimmiter and get numbers in array
        var delim=exp.split('\n')[0].substring(2);
        numArray= exp.split('\n').slice(1).join('\n').split(delim).map(Number);

    }else{  // use default delimitter and get numbers in array
        numArray= exp.split(/,|\n/).map(Number);
    }
    
    if(numArray.some(a=>a<0)){
        throw new Error("negatives not allowed - "+numArray.filter(a=>a<0).join(','))
    }

    // return sum of numbers in the number array
    return (parseInt(numArray.reduce((a,b)=>a+b)));
}

module.exports = stringCalculator;