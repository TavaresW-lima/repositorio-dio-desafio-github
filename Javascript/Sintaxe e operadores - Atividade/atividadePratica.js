function processaNumeros(num1, num2) {
    if(!isNullOrUndefined(num1) && !isNullOrUndefined(num2)) {
        return `Os números ${num1} e ${num2} ${isEqual(num1,num2)}. `
                .concat(`Sua soma é ${getSum(num1, num2)}, `)
                .concat(`que é ${greaterOrLessThan(getSum(num1, num2), 10)} 10 `)
                .concat(`e ${greaterOrLessThan(getSum(num1, num2), 20)} 20.`);
    } else {
        return 'Defina dois números!';
    }
}

function isEqual(num1, num2) {
    return num1 === num2 
            ? 'são iguais'
            : 'não são iguais';
}

function getSum(num1, num2) {
    return num1 + num2;
}

function greaterOrLessThan(num1, num2) {
    if(num1 > num2) {
        return 'maior que'; 
    } else if(num1 < num2) {
        return 'menor que'; 
    } else {
        return 'igual a';
    }
}

function isNullOrUndefined(value) {
    return value == undefined || value == null;
}

//Testes
console.log(processaNumeros(5,5));
console.log(processaNumeros(12,5));
console.log(processaNumeros(10,10));
console.log(processaNumeros(5, 5));

console.log(processaNumeros(Math.floor(Math.random()*10),Math.floor(Math.random()*20)));