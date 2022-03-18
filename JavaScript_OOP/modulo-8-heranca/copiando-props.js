function extend(Filho, Pai) {
	let paiProto = Pai.prototype;
	let filhoProto = Filho.prototype;

	for(let i in paiProto) {
		filhoProto[i] = paiProto[i];
	}
	//filho tem acesso ao obj do pai
	filhoProto.uber = paiProto;
}

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

//copiando só prototype em vez de instanciar uma classe
// Trem.prototype = Veiculo.prototype;

//construtor temporario por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);

let tremBala = new Trem('Trem Bala');
let trem = new Trem('Trem ');
let ferrari = new Carro();

Carro.prototype.ligar = function() {
	console.log("O carro ligou!");
};

Trem.prototype.ligar = function() {
	console.log("piiui");
};

tremBala.ligar();
ferrari.ligar();
trem.ligar();

