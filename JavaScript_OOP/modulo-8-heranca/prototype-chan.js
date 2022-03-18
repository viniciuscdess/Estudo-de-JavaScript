function Veiculo() {
	this.carenagem = "aço";
	this.ligar = function() {
		console.log("O veiculo ligou!");
	}
}

function Trem(tipo) {
	this.tipo = tipo;
	this.vagoes = 50;
}

Trem.prototype = new Veiculo();
let tremBala = new Trem('Trem Bala');

tremBala.ligar();
console.log(tremBala.tipo);