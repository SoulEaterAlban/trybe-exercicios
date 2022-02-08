function checkPalindrom(palindrom){
    let palindromReverse = palindrom.split('').reverse().join('');
    if(palindrom === palindromReverse){
        return true;
    }
        return false;
}
console.log(checkPalindrom('arara'));
console.log(checkPalindrom('desenvolvimento'));


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