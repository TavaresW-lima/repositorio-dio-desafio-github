const pessoa = {
    nome: "Jhon",
    idade: 23
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

//Testes
console.log(calculaIdade.call(pessoa, 0));
console.log(calculaIdade.apply(pessoa, [0]));
console.log(calculaIdade.call(pessoa, 2));
console.log(calculaIdade.apply(pessoa, [2]));
console.log(calculaIdade.call(pessoa, 3));
console.log(calculaIdade.apply(pessoa, [3]));
console.log(calculaIdade.call(pessoa, Math.floor(Math.random()*100)));
console.log(calculaIdade.apply(pessoa, [Math.floor(Math.random()*100)]));