class Humano {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	falar() {
		console.log("O humano falou");
	}
}

class Engenheiro extends Humano{
	constructor(nome,idade,espec) {
		super(nome,idade); //para pegar os do pai,
		this.profissao = "Engenheiro"
		this.especializacao = espec;
	}
}
let joao = new Engenheiro("joao",25,"civil");

console.log(joao);

joao.falar();
