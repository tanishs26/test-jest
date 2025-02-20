function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  
  function reverse(str) {
    const str2 = str.split("");
    return str2.reverse().join("");
  }
  
  const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    divide: function (a, b) {
      if (b == 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };
  // console.log(calculator.divide(10,0));
  
  //A to Z 65 to 90
  //a to z 97 to 122
  function caesarCipher(str, key) {
    return str
      .split("")
      .map((char) => shiftCharKey(char, key))
      .join("");
  }
  function shiftCharKey(char, key) {
    const lowerCase = char >= "a" && char <= "z";
    const upperCase = char >= "A" && char <= "Z";
    if (upperCase) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
    } else if (lowerCase) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97);
    } else return char;
  }
  
  function analyzeArray(arr) {
    let min, max, avg, length;
    const arr2 = arr.sort();
    min = arr2[0];
    max = arr2[arr.length - 1];
    avg = arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
    length = arr.length;
  
    return {
      min: min,
      max: max,
      avg: avg,
      length: length,
    };
  }
  module.exports = {
    capitalize,
    analyzeArray,
    caesarCipher,
    calculator,
    reverse,
  };
  