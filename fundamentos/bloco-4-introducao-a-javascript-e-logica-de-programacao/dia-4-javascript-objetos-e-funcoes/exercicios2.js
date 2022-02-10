// Exercicio 1
function checkPalindrom(palindrom){
    let palindromReverse = palindrom.split('').reverse().join('');
    if(palindrom === palindromReverse){
        return true;
    }
        return false;
}
console.log(checkPalindrom('arara'));
console.log(checkPalindrom('desenvolvimento'));

// Exercicio 2
function bigIndex(numbers){
let bigNumber = 0;
    for(let key in numbers){
        if(numbers[key]> bigNumber){
            bigNumber = key;
        }   
    }
    return bigNumber;
}
console.log(bigIndex([2,3,6,7,10,1]));

// Exercicio 3
function lessIndex(numbers){
let bigNumber = 0;
    for(let key in numbers){
        if(numbers[key]< bigNumber){
            bigNumber = key;
        }   
    }
    return bigNumber;
}
console.log(lessIndex([2, 4, 6, 7, 10, 0, -3]));

// Exercicio 4
function bigWord(word){
    let biggerWord = word[0];
    for(let key in word){
        if(biggerWord.length < word[key].length){
            biggerWord = word[key];
        }
    }
    return biggerWord;
}
console.log(bigWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercicio 5

function arrInt(numbers){
    let counter = 0;
    let checkNumber;
    let indexNumber = 0;
    let counterRepetitive =0;
    // laço para contar os numeros repitidos
    for(let key in numbers){
        checkNumber= numbers[key];
        for(let index in numbers){
            if(checkNumber === numbers[index]){
                counter += 1;
            }
        }
        // condição para adicionar os numeros repitidos dentro de outro 
        // contador e adicionar o index do numero repetido em uma variavel
        if(counter > counterRepetitive){
            counterRepetitive = counter;
            indexNumber = key;
        }
        counter= 0;
    }
    return numbers[indexNumber];
}
console.log(arrInt([1,2,2,3,4,5,6]));

// Exercicio 6
function numberNatural(number) {
    let sum = 0;
    for(let index = 1; index<= number; index +=1){
        sum += index;
    }
    return sum;
}
console.log(numberNatural(5));

// Exercicio 7
function verifyString(strWord, strEnding){
    let word = strWord.split('');
    let wordEnd = strEnding.split('');
    for(let index = 0; index< wordEnd.length; index +=1 ){
        if(word[word.length - wordEnd.length + index] !== wordEnd[index]){
            return false;
        }
    }
    return true;
}
console.log(verifyString('trybe','be'));
