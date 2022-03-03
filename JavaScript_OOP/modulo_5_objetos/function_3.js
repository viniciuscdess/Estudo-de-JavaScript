let a = {
	nome:"Vinicius",
	dizerNome() {
		console.log("O nome é: " + this.nome);
	}
}

let b = {
	nome:"joao"
}

a.dizerNome();

a.dizerNome.call(b); //executa o metodo de outro objeto nesse objeto
//dizerNome é uma função
//call é um metodo do objeto Function