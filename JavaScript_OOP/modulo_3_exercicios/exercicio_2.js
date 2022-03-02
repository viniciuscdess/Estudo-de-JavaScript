let pessoa = {
	nome:"Vinicius Carvalho",
	exibeNome() {
		console.log("O nome da pessoa é " + this.nome);
	}
}

console.log(pessoa);
pessoa.exibeNome();