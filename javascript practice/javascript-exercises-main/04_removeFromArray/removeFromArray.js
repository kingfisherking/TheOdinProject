const removeFromArray = function(arr, valueToRemove) {
    let newList = arr.filter(item => item != valueToRemove);
    console.log(newList);
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
