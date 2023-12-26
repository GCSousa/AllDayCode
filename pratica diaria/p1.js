/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.
*/

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
function comp(array1, array2) {
    // Verifica se ambos os arrays são diferentes de null
    if (array1 && array2) {
      // Verifica se os arrays têm o mesmo comprimento
      if (array1.length === array2.length) {
        // Ordena ambos os arrays
        array1.sort((a, b) => a - b);
        array2.sort((a, b) => a - b);
        // Compara cada elemento dos arrays
        for (let i = 0; i < array1.length; i++) {
          if (array1[i] * array1[i] !== array2[i]) {
            return false;
          }
        }
        // Se todos os elementos forem iguais, retorna true
        return true;
      }
    }
    // Se algum dos arrays for null ou se tiverem comprimentos diferentes, retorna false
    return false;
  }
console.log(comp(a1, a2));

/*
=============================================================Versão sem Consulta=============================================================
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
function comp(array1, array2) {
    let igualOuMultiplo = true;
    if (array1 === null || array2 === null ) {
        if (array1 === null && array2 === null ) {
            return true;
        }
        return false;
    }
    if (array1.length === 0 || array2.length === 0 ) {
        if (array1.length === 0  && array2.length === 0) {
            return true;
        }
        return false;
    }
    if ((array2[0] == array1[0])) {
        for (i = 1; i < array2.length; i++) {
            if (!(Math.sqrt(array2[i]) == array1[i - 1])) {
                console.log(Math.sqrt(array2[i]));
                console.log(array1[i - 1]);
                return false;
            }
        }
    }
    return igualOuMultiplo;
}
console.log(comp(a1, a2));
*/