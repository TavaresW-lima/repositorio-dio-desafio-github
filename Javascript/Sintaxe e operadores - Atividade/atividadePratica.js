function processaNumeros(num1, num2) {
    let resultado = `Os números ${num1} e ${num2} ${num1 != num2 ? 'não' : ''} são iguais. Sua soma é ${num1 + num2}, que é ${(num1 + num2) > 10 ? 'maior' : 'menor'} que 10 e ${(num1 + num2) > 20 ? 'maior' : 'menor'} que 20.`;
    console.log(resultado);
}

processaNumeros(82,8);