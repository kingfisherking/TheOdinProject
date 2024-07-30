const reverseString = function(word) {
    let wordArr = word.split("");
    let reverseArr = wordArr.reverse();
    let reversed = reverseArr.join("");

    console.log(word, wordArr[0], reverseArr[0], reversed);

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
