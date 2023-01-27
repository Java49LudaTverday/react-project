"use strict";
function getRandomNumber(minValue, maxValue, isMinInclusive = true, isMaxInclusive = false) {
    if (minValue < maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
    }
    if (!isMinInclusive && !isMaxInclusive) {
        minValue += 1;
    }
    else if (isMinInclusive && isMaxInclusive) {
        maxValue += 1;
    }
    else if (!isMinInclusive && isMaxInclusive) {
        minValue += 1, maxValue += 1;
    }
    return minValue + Math.floor(Math.random() * (maxValue - minValue));
}
let res = getRandomNumber(3, 5);
console.log(res);
console.log("1)" + getRandomNumber(1, 5));
console.log("2)" + getRandomNumber(1, 5, true, true));
console.log("3)" + getRandomNumber(1, 5, false, true));
console.log("4)" + getRandomNumber(1, 5, false, false));
