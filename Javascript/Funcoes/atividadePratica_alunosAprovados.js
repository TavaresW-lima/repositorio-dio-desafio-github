//Copiado do repositório do desafio
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
    let alunosAprovados = [];
    for(let {nome, nota} of alunos) {
        if(nota >= media) {
            alunosAprovados.push(nome);
        }
    }
    console.log(`Média: ${media}. AlunosAprovados: ${alunosAprovados}`);
}

//Testes
alunosAprovados(alunos, 7.5);
alunosAprovados(alunos, 6);
alunosAprovados(alunos, 5);
alunosAprovados(alunos, 4);