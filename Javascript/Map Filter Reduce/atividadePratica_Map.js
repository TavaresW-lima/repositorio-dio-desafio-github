const obj = {
    valor : 2,
};

const valoresIniciais = [1,2,3,4,5,6,7,8,9];

function mapComThisArg(vetor, thisArg) {
    return vetor.map(function(num) {
        return this.valor*num;
    }, obj)
}

console.log(mapComThisArg(valoresIniciais, obj));
