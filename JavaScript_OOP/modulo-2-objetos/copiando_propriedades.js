let pessoa = {
	nome:"Vinicius",
	getNome() {
		console.log("Esse é o nome: " + this.nome);
	}
};

let pessoa2 = {
	nome:"Joao",
	age:12
};

Object.assign(pessoa2, pessoa); //copiando as propriedades e metodos de um objeto para o outro

console.log(pessoa2);

pessoa2.getNome();

