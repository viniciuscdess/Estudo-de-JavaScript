let pessoa = {
	nome: "Vinicius",
	idade: 18,
	falar: function() {
		console.log("Oi meu nome é Vinicius");
	},
	aniversario() {
		this.idade += 1;
	},
	dizerIdade() {
		console.log("A minha idade é " + this.idade);
	},
	podeDirigir() {
		if(this.idade > 18){
			console.log("Pode dirigir");
		}else{
			console.log("Não pode dirigir");
		}
	}

}

console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.dizerIdade();
pessoa.podeDirigir();

