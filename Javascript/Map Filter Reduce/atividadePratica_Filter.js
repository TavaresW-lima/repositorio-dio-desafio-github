function filtraPares(vetorNumeros) {
    return vetorNumeros.filter(num => num%2 == 0);
}

//Teste
console.log(filtraPares([1,2,3,4,5,6,7,8,9]));
console.log(filtraPares([2,4,6,8,10]));
console.log(filtraPares([1,3,5,7,9,11]));
console.log(filtraPares([0]));
console.log(filtraPares([]));