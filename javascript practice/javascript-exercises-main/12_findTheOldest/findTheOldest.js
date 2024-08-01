const findTheOldest = function(arr) {
    arr.sort( (p1, p2) => {
        let age1 = p1.yearOfDeath - p1.yearOfBirth;
        let age2 = p2.yearOfDeath - p2.yearOfBirth;
        return age1 < age2 ? 1 : -1;
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
