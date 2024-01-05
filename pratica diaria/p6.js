/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)*/

function findOutlier(integers) {
    const evenNumbers = integers.filter(numero => numero % 2 === 0);
    const oddNumbers = integers.filter(numero => numero % 2 !== 0);
    if (evenNumbers.length === 1) {
        return evenNumbers[0];
    } else {
        return oddNumbers[0];
    }
}
const integers = [2, 4, 7, 6, 8, 10];
const outlier = findOutlier(integers);
console.log("The outlier is:", outlier);