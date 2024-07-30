const repeatString = function(strin, numRpeat) {
    let counter = 0;
    let phrase = '';
    while (counter != numRpeat){
        phrase += strin;
        counter++
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
