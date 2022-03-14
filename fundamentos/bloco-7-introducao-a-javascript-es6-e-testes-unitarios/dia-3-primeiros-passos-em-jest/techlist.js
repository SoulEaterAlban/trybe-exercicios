function techList(array5, name) {
    let arrayTech = [];
    array5.sort();
    if (array5.length === 0) {
      return 'Vazio!';
    }
    for (let index = 0; index < array5.length; index += 1) {
      arrayTech.push({ tech: array5[index], name: name });
    }
    return arrayTech;
  }
  module.exports = techList;