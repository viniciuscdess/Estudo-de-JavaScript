function Ninja(nome,quantidade) {
	this.nome = nome;
	this.quantidade = quantidade;

	this.atirar = function() {
		console.log("O " + this.nome + " atirou uma kunai");
	},

	this.atirouKunai = function() {
		if(this.quantidade > 0) {
			console.log("Atirou " + this.quantidade + " kunais");
			this.quantidade = (this.quantidade - 1);
		}else{
			console.log("O ninja não pode mais atirar kunais");
		}
	}


}

let naruto = new Ninja("naruto",5);
// console.log(naruto);

naruto.atirouKunai();
naruto.atirouKunai();
naruto.atirouKunai();
naruto.atirouKunai();
naruto.atirouKunai();
naruto.atirouKunai();
