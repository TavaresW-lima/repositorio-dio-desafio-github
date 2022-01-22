function verificaVetor(vetor, tamanho) {
    if(typeof vetor == 'undefined' || typeof tamanho == 'undefined') throw new ReferenceError("Os dois parâmetros precisam estar presentes");
    if(typeof vetor != 'object' || !(vetor instanceof Array)) throw new TypeError("A variável 'vetor' tem que ser um array");
    if(typeof tamanho !== 'number') throw new TypeError("O parâmetro 'tamanho' deve ser um número");
    if(vetor.length !== tamanho) throw new RangeError("O comprimento do vetor não é igual ao tamanho fornecido");
    return vetor;
}

function tryVerificaVetor(vetor, tamanho) {
    try {
        console.log(verificaVetor(vetor, tamanho));
    } catch (erro) {
        if(erro instanceof ReferenceError){
            console.log('Tipo do erro: ReferenceError');
        } else if (erro instanceof TypeError) {
            console.log('Tipo do erro: TypeError');
        } else if (erro instanceof RangeError) {
            console.log('Tipo do erro: RangeError');
        } else {
            console.log('Erro não esperado: ', erro.name);
        }
        console.log(`Mensagem: ${erro.message}`);
        console.log(`Stack: ${erro.stack}`);        
    }
}

//Testes
tryVerificaVetor([],0);
tryVerificaVetor([1,2,3,4,5], 5);
tryVerificaVetor();
tryVerificaVetor(undefined,5);
tryVerificaVetor([1,2,3]);
tryVerificaVetor('[1,2,3,4,5]', 5);
tryVerificaVetor([1,2,3,4,5], '5');
tryVerificaVetor([],1);
tryVerificaVetor([1,2,3,4,5], 6);