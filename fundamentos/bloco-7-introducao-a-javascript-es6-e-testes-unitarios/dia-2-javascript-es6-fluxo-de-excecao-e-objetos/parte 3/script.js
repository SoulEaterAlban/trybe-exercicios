const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const nightTurn = (obj, key , value) => obj[key] = value;
nightTurn(lesson2,'turno','noite');

const chaves = (obj) => Object.keys(obj);
console.log(chaves(lesson1));

const sizeCheck = (obj) => Object.keys(obj).length;
console.log(sizeCheck);

const allLessons = Object.assign({},{lesson1,lesson2,lesson3});
console.log(allLessons);

const sum = (allLessons) => {
    let valueStudent = 0;
    for (let key in allLessons) {
        valueStudent += allLessons[key].numeroEstudantes;
    }
    return valueStudent;
};

console.log(sum(allLessons));


const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
    const entradas = Object.entries(obj);
    for(let index in entradas) {
        if(entradas[index][0] === key && entradas[index][1] === value) {
            return true;
        };
    }
    return false;
};
console.log(verifyPair(lesson3,'materia','Matemática'));