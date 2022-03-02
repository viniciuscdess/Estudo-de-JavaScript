function aluno(idade,nome,classe) {
	return {
		idadeAluno: idade,
		nomeAluno: nome,
		classe: classe,
		detalhesAluno: function() {
			console.log("O aluno " + this.nomeAluno + ", tem " + this.idadeAluno + "anos, e esta no " + this.classe + "MB no colegio");
		}
	}
}

let alunoFundamental = aluno(18,"Vinicius",3);
alunoFundamental.detalhesAluno();