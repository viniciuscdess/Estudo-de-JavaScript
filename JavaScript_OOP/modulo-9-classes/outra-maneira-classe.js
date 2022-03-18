let Humano = class {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	nomeDaPessoa() {
		return "O nome da pessoa é: " + this.nome;
	}
}
console.log(typeof Humano);

let vinicius = new Humano('vinicius',18);

console.log(vinicius);

console.log(vinicius.nomeDaPessoa());
