 class Humano {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	nomeDaPessoa() {
		return "O nome da pessoa é: " + this.nome;
	}

	//muda o nome
	set nomeDaPessoa2(novoNome) {
		this.nome = "Sr. " + novoNome;
	}

	//recbe o nome
	get receberNome() {
		return "O nome da pessoa é: " + this.nome;
	}
}
console.log(typeof Humano);

let vinicius = new Humano('vinicius',18);

console.log(vinicius);

console.log(vinicius.nomeDaPessoa());

vinicius.nomeDaPessoa2 = "vinicius carvalho";

console.log(vinicius.nome);

console.log(vinicius.receberNome);
