function Ninja(nome) {
	this.nome = nome;
	this.atirar = function() {
		console.log("O " + this.nome + " atirou uma kunai");
	}
}

let naruto = new Ninja("naruto");

console.log(naruto);

naruto.atirar();