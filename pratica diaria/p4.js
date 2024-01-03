//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    let result = '';
  
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
  
      // Check if the character is a letter
      if (/[a-zA-Z]/.test(char)) {
        let offset = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        result += String.fromCharCode((char.charCodeAt(0) - offset + 13) % 26 + offset);
      } else {
        // If the character is not a letter, keep it unchanged
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(rot13("Hello World"));  // Outputs: "Uryyb Jbeyq"
  