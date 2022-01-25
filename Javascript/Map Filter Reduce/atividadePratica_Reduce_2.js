const precos = [
    {
        nome: 'queijo',
        preco: 16
    },
    {
        nome: 'laranja',
        preco: 8
    },
    {
        nome: 'ketchup',
        preco: 6
    }
]

function baixaSaldo(vetorPrecos, saldoDisponivel) {
    return vetorPrecos.reduce((acc, preco) => acc - preco, saldoDisponivel);
}

//Testes
console.log(baixaSaldo([10,20,30,40], 100)); //0
console.log(baixaSaldo([30.0,45.79,50,119.15], 300.47));

console.log("Exemplo com vetor de objetos");
console.log(baixaSaldo(precos.map(item => item.preco), 60));