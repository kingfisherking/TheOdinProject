const palindromes = function (word) {
    let letters = word.split();
    return letters.every((item, index, arr) => 
        item == arr[index - index*2]
    )

};

// Do not edit below this line
module.exports = palindromes;
