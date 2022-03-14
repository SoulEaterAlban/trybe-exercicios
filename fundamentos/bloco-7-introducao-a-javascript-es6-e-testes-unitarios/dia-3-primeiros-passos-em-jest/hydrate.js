const hydrate = (str) => {
    const strNumber = str.match(/\d+/g);
    let sum = 0;
    for(key in strNumber) {
        sum += parseInt(strNumber[key]);
    }
    let message = `${sum} copo de água`;
    if(sum > 1){
        message = `${sum} copos de água`;
    }
    return message;
}



module.exports = hydrate;