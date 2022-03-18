function Veiculo() {}

Veiculo.prototype.carenagem = "aço";
Veiculo.prototype.ligar = function() {
		console.log("O veiculo ligou!");
	}

function Trem(tipo) {
	this.tipo = tipo;
}

Trem.prototype.vagoes = 50;

function Carro() {}

Carro.prototype.pneus = 4;

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let tremBala = new Trem('Trem Bala');
let trem = new Trem('Trem ');
let ferrari = new Carro();

tremBala.ligar();
ferrari.ligar();
trem.ligar();