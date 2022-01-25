function getSomaNumeros(vetorNumeros) {
    return vetorNumeros.reduce((acc,num) => acc + num);
}

//Teste
console.log(getSomaNumeros([1,2,3,4,5,6,7,8,9]));
console.log(getSomaNumeros([10,20,30,40,50,60,70,80,90]));
console.log(getSomaNumeros([0,0,0,0,0,0,1]));
console.log(getSomaNumeros([1,0,1,0,1,0,1]));