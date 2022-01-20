function processaNumeros(num1, num2) {
    let resultado = `Os números ${num1} e ${num2} `;
    let soma = num1 + num2;

    if(num1 == num2) {
        resultado = resultado.concat(`são iguais. `);
    } else {
        resultado = resultado.concat(`não são iguais. `);
    }

    resultado = resultado.concat(`Sua soma é ${soma}, que é `);

    if(soma < 10) {
        resultado = resultado.concat(`menor que 10 e `);
    } else {
        resultado = resultado.concat(`maior que 10 e `);
    }

    if(soma < 20) {
        resultado = resultado.concat(`menor que 20.`);
    } else {
        resultado = resultado.concat(`maior que 20.`);
    }

    console.log(resultado);

}

processaNumeros(82,8);