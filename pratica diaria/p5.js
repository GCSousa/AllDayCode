/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/

function inArray(array1, array2) {
  var result = [];
  array1.forEach(function (palavra) {
    if (array2.some((str) => str.includes(palavra))) {
      result.push(palavra);
    }
  });
  return result.sort();
}

var a1 = ["arp", "live", "strong"];
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
inArray(a1, a2); // ["arp", "live", "strong"]

/* failure
function inArray(array1, array2) {
  var arrH = [], arrL = [],Result = [];
  array1.length > array2.length ? (arrH = array1, arrL = array2) : (arrH = array2, arrL = array1);
  arrL.forEach(function (palavra, index) {
    let found = arrH.find((element) => element === palavra);
    if (found) {
      Result.push(palavra);
    }
  });
  return Result;
}
*/