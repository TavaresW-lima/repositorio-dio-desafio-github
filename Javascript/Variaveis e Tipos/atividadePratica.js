function verificaPalindromo(texto, metodo) {
    if(!texto || typeof texto !== 'string') {
        console.log("Valor inválido, por favor forneça um texto.");
        return;
    } else {
        let palindromo;
        texto = texto.toLowerCase();
        texto = texto.replaceAll(" ", "");

        switch(metodo) {
            case 1:
                palindromo = ePalindromo_V1_Array(texto);
                break;
            case 2:
                palindromo = verificaPalindromo_V2_String(texto);
                break;
            default:
                console.log("Informe o método a ser utilizado!");
        }
        
        if(palindromo) {
            console.log(`Método ${metodo}. É um palíndromo!`);
        } else {
            console.log(`Método ${metodo}. Não é um palíndromo!`);
        }
    }
}

function ePalindromo_V1_Array(texto) {

    let caracteresOrdemOriginal = texto.split("");
    let caracteresOrdemInversa = texto.split("").reverse();

    for(let i = 0; i < caracteresOrdemOriginal.length; i++) {
        if(caracteresOrdemOriginal[i] != caracteresOrdemInversa[i]) {
            return false;
        }
    }

    return true;    
}

function verificaPalindromo_V2_String(texto) {
    let ultimoIndiceTexto = texto.length - 1;
    
    for(let i = 0; i < texto.length; i++) {
        if(texto[i] != texto[ultimoIndiceTexto - i]) {
            return false;
        }
    }

    return true;
}

// Testes
verificaPalindromo('Ovo', 1);
verificaPalindromo('Roma me tem amor', 1);
verificaPalindromo('A cara rajada da jararaca', 1);
verificaPalindromo('Anotaram a data da maratona', 1);

verificaPalindromo('Ovo', 2);
verificaPalindromo('Roma me tem amor', 2);
verificaPalindromo('A cara rajada da jararaca', 2);
verificaPalindromo('Anotaram a data da maratona', 2);

console.log('//////');

verificaPalindromo('Esqueci o isqueiro na esquina da escola', 1);
verificaPalindromo('Três pratos de trigo para três tigres tristes', 1);

verificaPalindromo('Esqueci o isqueiro na esquina da escola', 2);
verificaPalindromo('Três pratos de trigo para três tigres tristes', 2);
