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
	},
	caracteristicas: {
		cnh:true,
		carteira: ['dinheiro','documento','moeda']
	}

}

console.log(pessoa.caracteristicas.carteira[2]);

