function spinWords(string) {
    let palavras = string.split(" ");
    let stringResultado = "";
  
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].length > 5) {
        for (let j = palavras[i].length - 1; j >= 0; j--) {
          stringResultado += palavras[i][j];
        }
      } else {
        stringResultado += palavras[i];
      }
  
      if (i < palavras.length - 1) {
        stringResultado += " ";
      }
    }
  
    console.log(stringResultado);
  }
  
  // Exemplo de uso:
  spinWords("Olá mundo, esta é uma frase de exemplo");
  