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

Trem.prototype = Veiculo.prototype;

//construtor temporario
let F = function () {};
F.prototype = Veiculo.prototype;
Carro.prototype = new F();

let tremBala = new Trem('Trem Bala');
let trem = new Trem('Trem ');
let ferrari = new Carro();

Carro.prototype.ligar = function() {
	console.log("O carro ligou!");
};

tremBala.ligar();
ferrari.ligar();
trem.ligar();

