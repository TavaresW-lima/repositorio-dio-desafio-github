function substituiParesPorZero(numeros) {
    if(!numeros || typeof numeros !== 'object') {
        console.log('Entrada inválida. Insira uma lista de números!');
        return;
    }

    if(numeros.length === 0) {
        return -1;
    }

    for(let i = 0; i < numeros.length; i ++) {
        if(typeof numeros[i] !== 'number') {
            console.log('Elemento não numérico encontrado, abortando...');
            return;
        }

        if(numeros[i] !== 0 && numeros[i] % 2 === 0) {
            numeros[i] = 0;
        }
    }

    return numeros;
}

//Testes
console.log(substituiParesPorZero([1,3,4,6,80,33,23,90]));
console.log(substituiParesPorZero([2,4,6,8,10]));
console.log(substituiParesPorZero([1,3,5,7,9,11]));
console.log(substituiParesPorZero([]));

console.log(substituiParesPorZero());
console.log(substituiParesPorZero([2,undefined,6,8,10]));
console.log(substituiParesPorZero([2,'4',6,8,10]));