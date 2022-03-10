const factorial = (number) => {
    let result = 1;
    for(let index = 1; index <= number; index +=1 ) {
        result *=index;
    }
    return result;
}
console.log(factorial(5));

const longestWord = text => {
    let splitText = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of splitText) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const array = ['Js', 'Html', 'Css', 'React'];
const substitutionX = (text) => {
    let pronto = `Tryber x aqui!Tudo bem?`;
    let result = pronto.split('');
    for (let i = 0; i < result.length; i += 1) {
        if(result[i] === 'x'){
            result[i] = text;
        }
    }
    result = result.join('');
    return result;
}

const skillsText = (name) => {
    let ordenedArray = array.sort();
    const skills = `
Minhas cinco principais habilidades são:
${ordenedArray[0]}
${ordenedArray[1]}
${ordenedArray[2]}
${ordenedArray[3]}`
    const textFinal = substitutionX(name) + skills;
    return textFinal;
}

console.log(skillsText('Breno'));