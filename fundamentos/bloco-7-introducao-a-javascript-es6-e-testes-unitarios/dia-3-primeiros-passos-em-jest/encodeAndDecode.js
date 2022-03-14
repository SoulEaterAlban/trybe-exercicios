function encode(string1) {
    let split = string1.split("");
    for (let index = 0; index < split.length; index += 1) {
      if (split[index] === 'a') {
        split[index] = '1';
      } else if (split[index] === 'e') {
        split[index] = '2';
      } else if (split[index] === 'i') {
        split[index] = '3';
      } else if (split[index] == 'o') {
        split[index] = '4';
      } else if (split[index] == 'u') {
        split[index] = '5';
      }
    }
    split = split.join('');
    return split;
  }
  
  function decode(string1) {
    let split = string1.split("");
    for (let index = 0; index < split.length; index += 1) {
      if (split[index] === '1') {
        split[index] = 'a';
      } else if (split[index] === '2') {
        split[index] = 'e';
      } else if (split[index] === '3') {
        split[index] = 'i';
      } else if (split[index] == '4') {
        split[index] = 'o';
      } else if (split[index] == '5') {
        split[index] = 'u';
      }
    }
    split = split.join('');
    return split;
  }

  module.exports = {encode, decode};